import { Box, Center, Button } from '@chakra-ui/react';
import { useWalletDialog } from '../../context';
import { Logo } from './Logo';
import { Navbar } from './Navbar';
import { NavTabLink } from './NavTabLink';
import { UserProfile } from './UserProfile';
import { useWeb3React } from '@web3-react/core';
import { useRouter } from 'next/router';
import CryptovoxelsLogo from '../../assets/Cryptovoxels';
import DecentralandLogo from '../../assets/Decentraland';
import SomniumSpaceLogo from '../../assets/SomniumSpace';
import TheSandboxLogo from '../../assets/TheSandbox';

export default function Header() {
  const [walletDialogIsOpen, setWalletDialogIsOpen] = useWalletDialog();
  const { active, account, connector, activate, error } = useWeb3React();
  const { replace } = useRouter();

  return (
    <Navbar>
      <Navbar.Brand>
        <Center marginEnd={6}>
          <Logo />
        </Center>
      </Navbar.Brand>
      <Navbar.Links>
        <NavTabLink
          onClick={() => replace('/decentraland')}
          text="Decentraland"
          logo={DecentralandLogo}
        />
        <NavTabLink
          onClick={() => replace('/somnium-space')}
          text="Somnium Space"
          logo={SomniumSpaceLogo}
        />

        <NavTabLink
          onClick={() => replace('/cryptovoxels')}
          text="Cryptovoxels"
          logo={CryptovoxelsLogo}
        />

        {/* <NavTabLink
          onClick={() => replace('/the-sandbox')}
          text="The Sandbox"
          logo={TheSandboxLogo}
        /> */}
      </Navbar.Links>
      <Navbar.UserProfile>
        {account ? (
          <UserProfile address={account} walletType="Connected with metamask" />
        ) : (
          <Button
            onClick={() => setWalletDialogIsOpen(true)}
            colorScheme="purple"
            color="white"
          >
            Connect wallet
          </Button>
        )}
      </Navbar.UserProfile>
    </Navbar>
  );
}
