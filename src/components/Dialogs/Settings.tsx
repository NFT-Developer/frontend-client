import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Img,
  VStack,
} from '@chakra-ui/react';
import { useSettingsDialog } from '../../context';
import {
  Box,
  HStack,
  Text,
  useCheckbox,
  UseCheckboxProps,
  useColorModeValue as mode,
  useId,
  BoxProps,
  useColorModeValue,
  Heading,
  Stack,
  useCheckboxGroup,
} from '@chakra-ui/react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import CryptovoxelsLogo from '../../assets/Cryptovoxels';
import DecentralandLogo from '../../assets/Decentraland';
import SomniumSpaceLogo from '../../assets/SomniumSpace';
import TheSandboxLogo from '../../assets/TheSandbox';
// import Axie from '../../assets/axie.webp';

import Dialog from './Dialog';

interface ButtonCheckboxProps extends UseCheckboxProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  price: string;
  children: React.ReactNode;
}

const ButtonCheckbox = (props: ButtonCheckboxProps) => {
  const { icon, title, description, price, ...rest } = props;
  const { getCheckboxProps, getInputProps, getLabelProps, state } =
    useCheckbox(rest);
  const id = useId();

  return (
    <label {...getLabelProps()}>
      <input {...getInputProps()} aria-labelledby={id} />
      <CheckboxBox {...getCheckboxProps()} id={id}>
        <HStack spacing="4">
          <Box
            data-checked={state.isChecked ? '' : undefined}
            fontSize="2xl"
            _checked={{
              color: mode('purple.500', 'purple.300'),
            }}
            color={mode('gray.300', 'whiteAlpha.400')}
          >
            {state.isChecked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          </Box>
          <Box fontSize="3xl">{icon}</Box>
          <Box flex="1">
            <Text fontWeight="bold">{title}</Text>
            <Text fontSize="sm">{description}</Text>
          </Box>
          {/* <Box fontWeight="bold" color={mode('purple.600', 'purple.400')}>
            {price}
          </Box> */}
        </HStack>
      </CheckboxBox>
    </label>
  );
};

const CheckboxBox = (props: BoxProps) => (
  <Box
    borderWidth="2px"
    px="4"
    py="3"
    borderRadius="md"
    cursor="pointer"
    transition="all 0.2s"
    _focus={{ shadow: 'outline' }}
    _checked={{
      bg: useColorModeValue('gray.50', 'whiteAlpha.100'),
      borderColor: useColorModeValue('purple.500', 'purple.300'),
    }}
    {...props}
  />
);

export default function Settings() {
  const [settingsDialogIsOpen, setSettingsDialogIsOpen] = useSettingsDialog();
  const { getCheckboxProps } = useCheckboxGroup({
    defaultValue: ['decentraland', 'somnium-space', 'cryptovoxels'],
  });

  return (
    <Dialog
      isOpen={settingsDialogIsOpen}
      onClose={() => setSettingsDialogIsOpen(!settingsDialogIsOpen)}
      header="Settings"
      footer={
        <>
          <Button
            variant="ghost"
            mr={3}
            onClick={() => setSettingsDialogIsOpen(!settingsDialogIsOpen)}
          >
            Cancel
          </Button>
          <Button
            colorScheme="purple"
            // onClick={handleRequest}
            // isLoading={isLoading}
          >
            Save
          </Button>
        </>
      }
    >
      {/* <VStack> */}
      <Box as="section" py="12">
        <Box maxW="xl" mx="auto" width="full" px={{ base: '6', md: '8' }}>
          <Stack spacing="5" justify="flex-start">
            <ButtonCheckbox
              {...getCheckboxProps({ value: 'decentraland' })}
              icon={<DecentralandLogo />}
              title="Decentraland"
              description="DAO"
              price="$0"
            >
              Option 1
            </ButtonCheckbox>
            <ButtonCheckbox
              {...getCheckboxProps({ value: 'somnium-space' })}
              icon={<SomniumSpaceLogo />}
              title="Somnium Space"
              description="VR"
              price="$0"
            >
              Option 2
            </ButtonCheckbox>
            <ButtonCheckbox
              {...getCheckboxProps({ value: 'cryptovoxels' })}
              icon={<CryptovoxelsLogo />}
              title="Cryptovoxels"
              description="Art"
              price="$0"
            >
              Option 3
            </ButtonCheckbox>
            <ButtonCheckbox
              {...getCheckboxProps({ value: 'm1' })}
              icon={<TheSandboxLogo />}
              title="The Sandbox"
              description="Builder"
              price="$0"
              isDisabled
            >
              Option 4
            </ButtonCheckbox>
            <ButtonCheckbox
              {...getCheckboxProps({ value: 'm1' })}
              icon={<Img src="./axie.webp" w="1.5rem" />}
              title="Axie Infinity"
              description="Mobile"
              price="$0"
              isDisabled
            >
              Option 5
            </ButtonCheckbox>
          </Stack>
        </Box>
      </Box>
      {/* </VStack> */}
    </Dialog>
  );
}
