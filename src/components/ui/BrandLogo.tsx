import React from "react";
import logo from "../../media/images/logo.png";
import { useWindowSize } from "../../utils/useWindowSize";
import { Link } from "react-router-dom";

type BrandLogoProps = {
  /** Height of the image in pixels */
  imageHeight?: number;
};

const BrandLogo: React.FC<BrandLogoProps> = ({ imageHeight = 72 }) => {
  const { width } = useWindowSize();

  // avoid hiding content during SSR/hydration by treating width=0 as large
  const showText = width === 0 ? true : width >= 700;

  return (
    <Link
      to="/"
      aria-label="brand-logo"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        color: "white",
        textDecoration: "none",
      }}
    >
      {showText && (
        <div
          style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}
        >
          <div
            style={{
              fontFamily:
                "Gilroy-Black, Gilroy, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
              fontSize: "30px",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            EUROPE FOR
          </div>
          <div
            style={{
              fontFamily:
                "Gilroy-Black, Gilroy, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
              fontSize: "37px",
              fontWeight: 800,
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            PALESTINE
          </div>
        </div>
      )}

      <img
        src={logo}
        alt="Europe for Palestine logo"
        style={{ height: imageHeight, width: "auto" }}
      />
    </Link>
  );
};

export default BrandLogo;
