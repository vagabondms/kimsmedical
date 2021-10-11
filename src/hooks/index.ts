import { useCallback, useEffect, useState } from 'react';
const useIsInViewPort = (ref: any) => {
  const [isIn, setIsIn] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current?.getBoundingClientRect().top < document.body.clientHeight) {
      setIsIn(true);
    }

    const handler = () => {
      if (ref.current?.getBoundingClientRect().top < document.body.clientHeight) {
        setIsIn(true);
      }
    };

    window.addEventListener('scroll', handler);

    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, [ref.current]);
  return [isIn];
};

export { useIsInViewPort };
