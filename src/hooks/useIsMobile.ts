import { useEffect, useState } from 'react';
import { useMediaQuery } from '@chakra-ui/react';

export function useIsMobile() {
  const [isLargerThan500] = useMediaQuery('(min-width: 500px)');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(!isLargerThan500);
  }, [isLargerThan500]);

  return { isMobile };
}
