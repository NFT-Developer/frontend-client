import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Redirect(): null {
  const { replace } = useRouter();

  useEffect(() => {
    replace('/decentraland');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
