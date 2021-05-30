import dynamic from 'next/dynamic';

const Wallets = dynamic(() => import('./Wallets'), { ssr: false });
const Settings = dynamic(() => import('./Settings'), { ssr: false });

export default function Dialogs() {
  return (
    <>
      <Wallets />
      <Settings />
    </>
  );
}
