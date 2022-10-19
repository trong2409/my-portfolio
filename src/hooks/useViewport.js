import { useEffect, useState } from "react";

export const useViewport = (width) => {
  const [windowDimension, setWindowDimension] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= width;

  return { isMobile };
};
