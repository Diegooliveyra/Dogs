import React, { useEffect, useState } from 'react';

const useMedia = (media) => {
  const [match, setMatch] = useState(null);

  useEffect(() => {
    function changeMath() {
      const { match } = window.matchMedia(media);
      setMatch(match);
    }
    window.addEventListener('resize', changeMath);
    return () => {
      window.removeEventListener('resize', changeMath);
    };
  }, [media]);

  return match;
};

export default useMedia;
