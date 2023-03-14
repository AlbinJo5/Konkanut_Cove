import { useState, useEffect, useLayoutEffect } from "react";

export const useMediaQuery = (minWidth,maxWidth) => {
  const [matches, setMatches] = useState(false);
  const query = `(min-width:${minWidth}px)${maxWidth===Infinity ?"": ` and (max-width:${maxWidth}px)`}`
  console.log(query)
  const media = window.matchMedia(query);
    
  const listener = () => {
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    setMatches(media.matches);
  }

  useEffect(() => {
    listener();
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    }
  }, [matches, query,window.innerWidth]);

  return matches;
}
