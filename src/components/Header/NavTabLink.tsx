import { Link, Tab, useColorModeValue as mode } from '@chakra-ui/react';

export const NavTabLink = ({
  onClick,
  text,
}: {
  onClick: any;
  text: string;
}) => {
  return (
    <Tab
      _selected={{ color: mode('blue.600', 'blue.200') }}
      _focus={{ shadow: 'none' }}
      justifyContent="flex-start"
      px={{ base: 4, md: 6 }}
      onClick={onClick}
    >
      <Link
        as="div"
        display="block"
        fontWeight="medium"
        color="inherit"
        whiteSpace="nowrap"
        _hover={{ color: mode('blue.600', 'blue.200') }}
        _activeLink={{
          color: mode('blue.600', 'blue.200'),
        }}
      >
        {text}
      </Link>
    </Tab>
  );
};
