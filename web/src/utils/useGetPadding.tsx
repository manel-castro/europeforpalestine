import { CSSProperties } from "react";
import { useWindowSize } from "./useWindowSize";

/**
 * Returns an object with `paddingLeft` and `paddingRight` based on window width.
 * Use this to keep horizontal paddings consistent across the site.
 */
export function useGetPadding(): Pick<
  CSSProperties,
  "paddingLeft" | "paddingRight"
> {
  const { width } = useWindowSize();

  // Default to the desktop padding to avoid layout shifts during SSR/hydration
  if (!width || width === 0) {
    return { paddingLeft: "4rem", paddingRight: "4rem" };
  }

  if (width < 480) {
    return { paddingLeft: "1rem", paddingRight: "1rem" };
  }

  if (width < 700) {
    return { paddingLeft: "2rem", paddingRight: "2rem" };
  }

  return { paddingLeft: "4rem", paddingRight: "4rem" };
}
