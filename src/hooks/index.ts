import { useCallback, useEffect, useState } from 'react';
const useIsInViewPort = (ref: any) => {
  const [isIn, setIsIn] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current?.getBoundingClientRect().top < document.body.clientHeight) {
      setIsIn(true);
    }
    window.addEventListener('scroll', () => {
      if (ref.current?.getBoundingClientRect().top < document.body.clientHeight) {
        console.log(2);
        setIsIn(true);
      }
    });
  }, [ref.current]);
  return [isIn];
};

export { useIsInViewPort };
