import {
  createContext,
  useContext,
  Dispatch,
  ReactNode,
  useState,
  useMemo,
  SetStateAction,
} from 'react';

const LayoutContext = createContext<
  [
    {
      walletDialogIsOpen: any;
      settingsDialogIsOpen: any;
    },
    {
      setWalletDialogIsOpen: Dispatch<SetStateAction<any>>;
      setSettingsDialogIsOpen: Dispatch<SetStateAction<any>>;
    },
  ]
>([{}, {}] as any); // eslint-disable-line @typescript-eslint/no-explicit-any

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function useLayoutContext() {
  return useContext(LayoutContext);
}

export default function LayoutProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [walletDialogIsOpen, setWalletDialogIsOpen] = useState(false);
  const [settingsDialogIsOpen, setSettingsDialogIsOpen] = useState(false);

  return (
    <LayoutContext.Provider
      value={useMemo(
        () => [
          {
            walletDialogIsOpen,
            settingsDialogIsOpen,
          },
          {
            setWalletDialogIsOpen,
            setSettingsDialogIsOpen,
          },
        ],
        [
          walletDialogIsOpen,
          settingsDialogIsOpen,
          setWalletDialogIsOpen,
          setSettingsDialogIsOpen,
        ],
      )}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export function useWalletDialog() {
  const [{ walletDialogIsOpen }, { setWalletDialogIsOpen }] =
    useLayoutContext();
  return [walletDialogIsOpen, setWalletDialogIsOpen];
}

export function useSettingsDialog() {
  const [{ settingsDialogIsOpen }, { setSettingsDialogIsOpen }] =
    useLayoutContext();
  return [settingsDialogIsOpen, setSettingsDialogIsOpen];
}
