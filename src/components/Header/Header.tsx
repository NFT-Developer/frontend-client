import { Box, Center, Button } from '@chakra-ui/react';
import { useWalletDialog } from '../../context';
import { Logo } from './Logo';
import { Navbar } from './Navbar';
import { NavTabLink } from './NavTabLink';
import { UserProfile } from './UserProfile';
import { useWeb3React } from '@web3-react/core';

export default function Header() {
  const [walletDialogIsOpen, setWalletDialogIsOpen] = useWalletDialog();
  const { active, account, connector, activate, error } = useWeb3React();

  return (
    <Navbar>
      <Navbar.Brand>
        <Center marginEnd={6}>
          <Logo />
        </Center>
      </Navbar.Brand>
      <Navbar.Links>
        <NavTabLink>Decentraland</NavTabLink>
        <NavTabLink>Cryptovoxels</NavTabLink>
        <NavTabLink>The Sandbox</NavTabLink>
        <NavTabLink>Somnium Space</NavTabLink>
      </Navbar.Links>
      <Navbar.UserProfile>
        {!account ? (
          <UserProfile
            address="0x91c987bf62D25945dB517BDAa840A6c661374402"
            walletType="Connected with metamask"
          />
        ) : (
          <Button onClick={() => setWalletDialogIsOpen(true)}>
            Connect wallet
          </Button>
        )}
      </Navbar.UserProfile>
    </Navbar>
  );
}
