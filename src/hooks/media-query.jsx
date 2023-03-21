import { useState, useEffect, useLayoutEffect, useCallback } from "react";

export const useMediaQuery = (minWidth,maxWidth) => {
  const [matches, setMatches] = useState(false);
  const query = `(min-width:${minWidth}px)${maxWidth===Infinity ?"": ` and (max-width:${maxWidth}px)`}`
    
  const listener = useCallback(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    setMatches(media.matches);
  },[matches,query])

  useEffect(() => {
    
    listener();
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    }
  }, [listener]);

  useEffect(() => {
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    }
  }, [matches, query,listener]);

  return matches;
}
