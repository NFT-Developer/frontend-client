import { Text } from '@chakra-ui/react';

import { injected } from '../../../config/connectors';
import { SUPPORTED_WALLETS } from '../../../utils/supported_wallets';

export default function formatConnectorName(connector: any) {
  const { ethereum } = window;
  const isMetaMask = !!(ethereum && ethereum.isMetaMask);
  const name = Object.keys(SUPPORTED_WALLETS)
    .filter(
      (k) =>
        SUPPORTED_WALLETS[k].connector === connector &&
        (connector !== injected || isMetaMask === (k === 'METAMASK')),
    )
    .map((k) => SUPPORTED_WALLETS[k].name)[0];

  return <Text>Connected with {{ name }}</Text>;
}
