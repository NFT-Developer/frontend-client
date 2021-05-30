import {
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useClipboard,
} from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';
import { FiClipboard, FiPaperclip } from 'react-icons/fi';
import formatConnectorName from './utils/formatConnectorName';
import { ethers } from 'ethers';

import { injected, walletlink } from '../../config/connectors';
import { getIcon } from '../../theme';
import { getEtherscanLink, shortenAddress } from '../../utils';
import { useWalletDialog } from '../../context';

export default function AccountPopover() {
  const { account, library, chainId, connector } = useWeb3React();
  const accountClipboard = useClipboard(
    account || ethers.constants.AddressZero,
  );
  const [ENSName, setENSName] = useState('');
  const [walletDialogIsOpen, setWalletDialogIsOpen] = useWalletDialog();

  useEffect(() => {
    if (library && account) {
      let stale = false;
      library
        .lookupAddress(account)
        .then((name: string | null) => {
          if (!stale && typeof name === 'string') {
            if (name.length > 12) setENSName(name.substr(0, 8) + '...');
            else setENSName(name);
          }
        })
        .catch(() => {});
      return (): void => {
        stale = true;
        setENSName('');
      };
    }
  }, [library, account, chainId]);

  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          isRound
          icon={getIcon('Avatar')}
          aria-label="account"
          size="sm"
          color="white"
          height="2rem"
          width="2rem"
        />
      </PopoverTrigger>
      <PopoverContent bgColor="background.100">
        <PopoverHeader fontWeight="semibold">Account</PopoverHeader>
        <PopoverCloseButton />
        <PopoverBody>
          {!!account && (
            <Flex direction="column" fontSize="1.25rem">
              <Text fontSize="0.75rem">{formatConnectorName(connector)}</Text>
              <Text>{ENSName || `${shortenAddress(account)}`}</Text>

              <ButtonGroup size="xs" spacing="2">
                <IconButton
                  fontWeight="300"
                  aria-label="Copy address"
                  icon={
                    accountClipboard.hasCopied ? (
                      <FiPaperclip />
                    ) : (
                      <FiClipboard />
                    )
                  }
                  onClick={accountClipboard.onCopy}
                />
                <Button
                  as="a"
                  target="_blank"
                  href={
                    chainId
                      ? getEtherscanLink(chainId, account, 'address')
                      : '#'
                  }
                  rel="noopener noreferrer"
                  aria-label="View on Etherscan"
                  leftIcon={getIcon('Etherscan', 4)}
                  fontWeight="300"
                >
                  View on Etherscan
                </Button>
              </ButtonGroup>
            </Flex>
          )}
        </PopoverBody>
        <PopoverFooter d="flex" justifyContent="flex-end">
          <ButtonGroup size="sm" textAlign="right">
            <Button onClick={() => setWalletDialogIsOpen(true)}>
              Change wallets
            </Button>
            <Button
              color="white"
              onClick={() => (connector as any).close()}
              display={
                connector !== injected && connector !== walletlink
                  ? 'block'
                  : 'none'
              }
            >
              Disconnect
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
