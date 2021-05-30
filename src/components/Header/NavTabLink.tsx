import {
  Link,
  Icon,
  Tab,
  Img,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import SomniumSpaceIcon from '../../assets/SomniumSpace';
export const NavTabLink = ({
  onClick,
  text,
  logo,
}: {
  onClick: any;
  text: string;
  logo: any;
}) => {
  return (
    <Tab
      _selected={{ color: mode('purple.600', 'purple.200') }}
      _focus={{ shadow: 'none' }}
      justifyContent="flex-start"
      px={{ base: 4, md: 6 }}
      onClick={onClick}
    >
      <Icon as={logo} />
      <Link
        as="div"
        ml="0.5rem"
        display="block"
        fontWeight="medium"
        color="inherit"
        whiteSpace="nowrap"
        _hover={{ color: mode('purple.600', 'purple.200') }}
        _activeLink={{
          color: mode('purple.600', 'purple.200'),
        }}
      >
        {text}
      </Link>
    </Tab>
  );
};
