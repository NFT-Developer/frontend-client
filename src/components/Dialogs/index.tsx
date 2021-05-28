import dynamic from 'next/dynamic';

const Wallets = dynamic(() => import('./Wallets'), { ssr: false });

export default function Dialogs() {
  return (
    <>
      <Wallets />
    </>
  );
}
