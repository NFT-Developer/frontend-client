import { Flex, IconButton, HStack, Avatar, Text } from '@chakra-ui/react';
import { FiSettings } from 'react-icons/fi';
import { shortenAddress } from '../../utils';
import { useSettingsDialog } from '../../context';
import NotificationsPopover from '../Popover/Notifications';
import AccountPopover from '../Popover/Account';

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
      <HStack spacing={3} order={{ base: 1, md: 2 }} flex="1">
        <IconButton
          isRound
          size="sm"
          aria-label="settings"
          color="current"
          icon={<FiSettings />}
          onClick={() => setSettingsDialogIsOpen(!settingsDialogIsOpen)}
        />

        <NotificationsPopover />
        <AccountPopover />
      </HStack>
    </>
  );
};
