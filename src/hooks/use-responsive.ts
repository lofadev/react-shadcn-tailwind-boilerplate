import { useEffect, useState } from 'react';

const querys = {
  mobile: '(max-width: 768px)',
  tablet: '(min-width: 769px) and (max-width: 1024px)',
  desktop: '(min-width: 1025px) and (max-width: 1535px)',
  largeDesktop: '(min-width: 1536px)',
};

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};

export const useResponsive = () => {
  const isMobile = useMediaQuery(querys.mobile);
  const isTablet = useMediaQuery(querys.tablet);
  const isDesktop = useMediaQuery(querys.desktop);
  const isLargeDesktop = useMediaQuery(querys.largeDesktop);

  return { isMobile, isTablet, isDesktop, isLargeDesktop };
};
