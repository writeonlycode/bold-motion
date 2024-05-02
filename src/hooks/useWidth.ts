import { useEffect, useState } from "react";

export function useWidth(ref: any) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(ref?.current?.offsetWidth);

    const getwidth = () => {
      setWidth(ref?.current?.offsetWidth);
    };

    window.addEventListener("resize", getwidth);

    return () => window.removeEventListener("resize", getwidth);
  }, [ref]);

  return width;
}
