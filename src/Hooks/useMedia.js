import { useEffect, useState } from 'react';

const useMedia = (media) => {
  const [match, setMatch] = useState(null);

  useEffect(() => {
    function changeMath() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    changeMath();
    window.addEventListener('resize', changeMath);
    return () => {
      window.removeEventListener('resize', changeMath);
    };
  }, [media]);

  return match;
};

export default useMedia;
