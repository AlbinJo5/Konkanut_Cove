import { useState, useEffect } from "react";

export const useMediaQuery = (minWidth,maxWidth) => {
  const [matches, setMatches] = useState(false);
  const query = `(min-width:${minWidth}px) and (max-width:${maxWidth}px)`
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
}
