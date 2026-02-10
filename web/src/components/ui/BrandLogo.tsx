import React, { useRef, useState, useEffect } from "react";
import logo from "media/images/logo.png";
import { useWindowSize } from "utils/useWindowSize";
import { Link } from "react-router-dom";

type BrandLogoProps = {
  /** Height of the image in pixels */
  imageHeight?: number;
};

const BrandLogo: React.FC<BrandLogoProps> = ({ imageHeight = 72 }) => {
  const { width } = useWindowSize();

  // avoid hiding content during SSR/hydration by treating width=0 as large
  const showText = width === 0 ? true : width >= 700;

  const totalFrames = 20;
  const frameDuration = 40;

  const [currentFrame, setCurrentFrame] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    let i = 0;
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      if (i < totalFrames) {
        setCurrentFrame(i);
        i++;
      } else {
        setCurrentFrame(0);
        if (intervalRef.current) window.clearInterval(intervalRef.current);
      }
    }, frameDuration);
  };
  const handleMouseLeave = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    setCurrentFrame(0);
  };

  // Preload animation frames to avoid delays in production
  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    for (let f = 0; f < totalFrames; f++) {
      const img = new Image();
      img.src = `/images/logo-animation/${f}.png`;
      imgs.push(img);
    }
    return () => {
      // allow GC to collect
      imgs.length = 0;
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <Link
      to="/"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
        src={`/images/logo-animation/${currentFrame}.png`}
        alt="Europe for Palestine logo"
        style={{ height: imageHeight, width: "auto", cursor: "pointer" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onPointerEnter={handleMouseEnter}
        onPointerLeave={handleMouseLeave}
        onTouchStart={handleMouseEnter}
        onTouchEnd={handleMouseLeave}
      />
    </Link>
  );
};

export default BrandLogo;
