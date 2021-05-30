import {
  Flex,
  IconButton,
  HStack,
  Avatar,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { FiBell, FiSettings } from 'react-icons/fi';
import { shortenAddress } from '../../utils';
import { useSettingsDialog } from '../../context';

export const UserProfile = ({
  address,
  walletType,
}: {
  address: string;
  walletType: string;
}) => {
  const [settingsDialogIsOpen, setSettingsDialogIsOpen] = useSettingsDialog();

  return (
    <>
      <Flex order={{ base: 2, md: 1 }}>
        <IconButton
          isRound
          size="sm"
          aria-label="settings"
          mr="0.5rem"
          color="current"
          icon={<FiSettings />}
          onClick={() => setSettingsDialogIsOpen(!settingsDialogIsOpen)}
        />
        <IconButton
          isRound
          size="sm"
          aria-label="notifications"
          color="current"
          icon={<FiBell />}
        />
      </Flex>
      <HStack spacing={3} order={{ base: 1, md: 2 }} flex="1">
        <Avatar size="sm" />
        <Flex direction="column" display={{ base: 'flex', md: 'none' }}>
          <Text fontWeight="bold" lineHeight="shorter">
            {shortenAddress(address)}
          </Text>
          <Text fontSize="sm" lineHeight="shorter" opacity={0.7}>
            {walletType}
          </Text>
        </Flex>
      </HStack>
    </>
  );
};
