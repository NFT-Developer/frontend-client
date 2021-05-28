import { useEffect, useState } from 'react';

export default function useWindowSize(): {
  width: number | undefined;
  height: number | undefined;
} {
  function getSize(): ReturnType<typeof useWindowSize> {
    const isClient = typeof window === 'object';
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize());
  useEffect(() => {
    const handleResize = (): void => {
      setWindowSize(getSize());
    };
    window.addEventListener('resize', handleResize);
    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}
