import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Flex,
  Text,
  useMediaQuery,
  useTheme,
} from '@chakra-ui/react';
import MetaMaskOnboarding from '@metamask/onboarding';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { injected } from '../../../config/connectors';
import { usePrevious } from '../../../hooks';
import { useWalletDialog } from '../../../context';
import { SUPPORTED_WALLETS } from '../../../utils/supported_wallets';
import Modal from '../Dialog';
const Pending = dynamic(() => import('./Pending'), { ssr: false });
const Option = dynamic(() => import('./Option'), { ssr: false });

const WALLET_VIEWS = {
  OPTIONS: 'options',
  PENDING: 'pending',
};

export default function Wallets() {
  const { active, account, connector, activate, error } = useWeb3React();

  const [walletView, setWalletView] = useState(WALLET_VIEWS.OPTIONS);
  const [pendingWallet, setPendingWallet] =
    useState<AbstractConnector | undefined>();
  const [pendingError, setPendingError] = useState<boolean>();

  const previousAccount = usePrevious(account);

  const [walletDialogIsOpen, setWalletDialogIsOpen] = useWalletDialog();
  // console.log('walletDialogIsOpen:', walletDialogIsOpen);

  const theme = useTheme();
  const [isDesktop] = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);

  // close on connection, when logged out before
  // useEffect(() => {
  //   if (account && !previousAccount && walletDialogIsOpen)
  //     setWalletDialogIsOpen(false);
  // }, [account, previousAccount, walletDialogIsOpen, setWalletDialogIsOpen]);

  useEffect(() => {
    if (account && !previousAccount && walletDialogIsOpen)
      setWalletDialogIsOpen(!walletDialogIsOpen);
  }, [account, previousAccount, setWalletDialogIsOpen, walletDialogIsOpen]);

  // always reset to account view
  useEffect(() => {
    if (walletDialogIsOpen) {
      setPendingError(false);
      setWalletView(WALLET_VIEWS.OPTIONS);
    }
  }, [walletDialogIsOpen]);

  // close modal when a connection is successful
  const activePrevious = usePrevious(active);
  const connectorPrevious = usePrevious(connector);
  useEffect(() => {
    if (
      walletDialogIsOpen &&
      ((active && !activePrevious) ||
        (connector && connector !== connectorPrevious && !error))
    )
      setWalletView(WALLET_VIEWS.OPTIONS);
  }, [
    setWalletView,
    active,
    error,
    connector,
    walletDialogIsOpen,
    activePrevious,
    connectorPrevious,
  ]);
  const tryActivation = async (connector: AbstractConnector | undefined) => {
    //eslint-disable-next-line
    let name = '';
    Object.keys(SUPPORTED_WALLETS).map((key) => {
      //eslint-disable-next-line
      if (connector === SUPPORTED_WALLETS[key].connector)
        return (name = SUPPORTED_WALLETS[key].name);
      return true;
    });

    setPendingWallet(connector);
    setWalletView(WALLET_VIEWS.PENDING);

    // if the connector is walletconnect and the user has already tried to connect, manually reset the connector
    if (
      connector instanceof WalletConnectConnector &&
      connector.walletConnectProvider?.wc?.uri
    ) {
      connector.walletConnectProvider = undefined;
    }

    connector &&
      activate(connector, undefined, true).catch((error) => {
        if (error instanceof UnsupportedChainIdError) activate(connector);
        else setPendingError(true);
      });
  };

  function getOptions() {
    const isMetamask =
      window.ethereum && MetaMaskOnboarding.isMetaMaskInstalled();

    return Object.keys(SUPPORTED_WALLETS).map((key) => {
      const option = SUPPORTED_WALLETS[key];
      if (!isDesktop) {
        if (option.mobile && !window?.web3 && !window?.ethereum) {
          return (
            <Option
              onClick={() =>
                option.connector !== connector &&
                !option.href &&
                tryActivation(option.connector)
              }
              key={key}
              id={key}
              active={option.connector && option.connector === connector}
              link={option.href}
              name={option.name}
              icon={option.name}
            />
          );
        }
        return null;
      }

      // overwrite injected when needed
      if (option.connector === injected) {
        // don't show injected if there's no injected provider
        if (!(window?.web3 || window?.ethereum)) {
          if (option.name === 'MetaMask') {
            return (
              <Option
                key={key}
                id={key}
                name={'Install MetamMsk'}
                icon={option.name}
                link={'https://metamask.io/'}
              />
            );
          } else {
            return null; //dont want to return install twice
          }
        }
        // don't return metamask if injected provider isn't metamask
        else if (option.name === 'MetaMask' && !isMetamask) {
          return null;
        }
        // likewise for generic
        else if (option.name === 'Injected' && isMetamask) {
          return null;
        }
      }

      // return rest of options
      return (
        isDesktop &&
        !option.mobileOnly && (
          <Option
            icon={option.name}
            onClick={() => {
              option.connector === connector
                ? null
                : !option.href && tryActivation(option.connector);
            }}
            key={key}
            id={key}
            active={option.connector === connector}
            link={option.href}
            name={option.name}
          />
        )
      );
    });
  }

  function getModalContent() {
    if (error)
      return (
        <Box my="1rem" color="white">
          {error instanceof UnsupportedChainIdError ? (
            <Alert
              variant="left-accent"
              status="error"
              borderRadius="base"
              textAlign="left"
            >
              <AlertIcon />
              <Flex direction="column">
                <Text textAlign="left" fontWeight="600">
                  Wrong network
                </Text>
                <Text>Please connect to Ethereum Mainnet</Text>
              </Flex>
            </Alert>
          ) : (
            <Alert variant="left-accent" status="error" borderRadius="base">
              <AlertIcon />
              <AlertTitle>Error connecting</AlertTitle>
            </Alert>
          )}
        </Box>
      );

    return (
      <>
        {walletView === WALLET_VIEWS.PENDING ? (
          <>
            <Pending
              connector={pendingWallet}
              error={pendingError}
              setPendingError={setPendingError}
              tryActivation={tryActivation}
            />
            <Button
              leftIcon={<FiArrowLeft />}
              variant="ghost"
              onClick={() => {
                setPendingError(false);
                setWalletView(WALLET_VIEWS.OPTIONS);
              }}
            >
              Return
            </Button>
          </>
        ) : (
          getOptions()
        )}
      </>
    );
  }

  return (
    <Modal
      isOpen={walletDialogIsOpen}
      onClose={() => setWalletDialogIsOpen(false)}
      header="Connect a wallet"
    >
      {getModalContent()}
    </Modal>
  );
}
