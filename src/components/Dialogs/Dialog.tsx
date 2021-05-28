import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useMediaQuery,
  useTheme,
} from '@chakra-ui/react';

export default function Dialog({
  isOpen,
  onClose,
  header,
  children,
  footer,
  disableClose,
  size = 'md',
}: {
  isOpen: boolean;
  onClose: () => any;
  header: string;
  children: JSX.Element;
  footer?: JSX.Element;
  disableClose?: boolean;
  size?: string;
}) {
  const theme = useTheme();
  const [isDesktop] = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);

  if (!isDesktop) {
    return (
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose} size={size}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton isDisabled={disableClose} />
            <DrawerHeader>{header}</DrawerHeader>
            <DrawerBody>{children}</DrawerBody>
            {footer && <DrawerFooter>{footer}</DrawerFooter>}
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      closeOnEsc={!disableClose}
      closeOnOverlayClick={!disableClose}
      size={size}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{header}</ModalHeader>
        <ModalCloseButton isDisabled={disableClose} />

        <ModalBody>{children}</ModalBody>
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContent>
    </Modal>
  );
}
