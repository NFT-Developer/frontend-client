import { BellIcon } from '@chakra-ui/icons';
import {
  Avatar,
  AvatarBadge,
  Box,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';

export default function Notifications() {
  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Avatar
          as="button"
          mx="0.5rem"
          aria-label="Notifications"
          icon={<BellIcon aria-label="Notifications" boxSize={4} />}
          size="sm"
          appearance="none"
          bgColor="rgba(255,255,255,.08)"
          border="0 solid rgba(255,255,255,.16)"
          color="rgba(255,255,255,.92)"
          cursor="pointer"
          borderRadius="9999px"
          transition="all 250ms"
          outline="none"
          fontWeight="600"
          _focus={{
            boxShadow: 'rgba(66,153,225,.6) 0 0 0 3px',
          }}
          _hover={{
            bgColor: 'rgba(255,255,255,.16)',
          }}
          _active={{
            bgColor: 'rgba(255,255,255,.24)',
          }}
          //   onClick={() => dispatch(SET_HAS_READ_NOTIFICATIONS())}
          children={<AvatarBadge boxSize="1rem" bg="red.500" />}
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverCloseButton />
        <PopoverHeader fontWeight="semibold">Notifications</PopoverHeader>
        <PopoverBody>
          <Box maxHeight="320px" overflow="auto">
            <Text textAlign="center" lineHeight="3rem">
              No notifications
            </Text>
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
