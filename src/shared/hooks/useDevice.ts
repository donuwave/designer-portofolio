import { useMediaQuery } from 'react-responsive';

import { breakpoints } from '@/shared/config';

const useDevice = () => {
  const isMobile = useMediaQuery({ query: `(max-width: ${breakpoints.maxMobile}px)` });
  const isTablets = useMediaQuery({ query: `(max-width: ${breakpoints.maxTablets}px)` });
  const isLaptops = useMediaQuery({ query: `(max-width: ${breakpoints.maxLaptops}px)` });
  const isOldDesktop = useMediaQuery({ query: `(max-width: ${breakpoints.maxOldDesktops}px)` });
  const isDesktop = useMediaQuery({ query: `(min-width: ${breakpoints.maxDesktops}px)` });

  return { isMobile, isTablets, isLaptops, isOldDesktop, isDesktop };
};

export default useDevice;
