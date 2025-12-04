import React from "react";
import { useGetPadding } from "../utils/useGetPadding";
import { useIsWidthLessThan } from "../utils/useWindowSize";
import linkedinIcon from "../media/images/linkedin-icon.svg";
import instagramIcon from "../media/images/instagram-icon.svg";
import xIcon from "../media/images/x-icon.svg";

const Footer: React.FC = () => {
  const padding = useGetPadding();
  const isPhone = useIsWidthLessThan(700);

  const title1Size = isPhone ? Math.round(74 * 0.7) : 74;
  const title2Size = isPhone ? Math.round(90 * 0.7) : 90;

  return (
    <footer style={{ backgroundColor: "#0b0b0b", color: "white", ...padding }}>
      <div
        style={{
          display: "flex",
          flexDirection: isPhone ? "column" : "row",
          justifyContent: isPhone ? "center" : "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingTop: "3rem",
          paddingBottom: "2rem",
          gap: isPhone ? "1rem" : "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0rem",
            alignItems: isPhone ? "center" : "flex-start",
          }}
        >
          <div
            style={{
              fontFamily: "Gilroy-Black, sans-serif",
              fontSize: title1Size,
              lineHeight: 1.2,
              whiteSpace: isPhone ? "normal" : "nowrap",
              textAlign: isPhone ? "center" : "left",
            }}
          >
            EUROPE FOR
          </div>
          <div
            style={{
              fontFamily: "Gilroy-Black, sans-serif",
              fontSize: title2Size,
              lineHeight: 0.78,
              marginTop: isPhone ? "-0.2rem" : "-0.6rem",
              textAlign: isPhone ? "center" : "left",
            }}
          >
            PALESTINE
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: isPhone ? "center" : "flex-end",
            gap: "0.5rem",
            marginTop: isPhone ? "0.5rem" : undefined,
          }}
        >
          <div
            style={{
              fontSize: "0.95rem",
              color: "#cccccc",
              fontWeight: 500,
              alignSelf: isPhone ? "center" : "flex-start",
            }}
          >
            Connect
          </div>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              style={{ color: "#fff", display: "inline-block" }}
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                style={{ width: 32, height: 32, display: "block" }}
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              style={{ color: "#fff", display: "inline-block" }}
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                style={{ width: 32, height: 32, display: "block" }}
              />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              style={{ color: "#fff", display: "inline-block" }}
            >
              <img
                src={xIcon}
                alt="X"
                style={{ width: 32, height: 32, display: "block" }}
              />
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.04)",
          marginTop: "1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            paddingTop: "1rem",
            paddingBottom: "2rem",
            color: "#888",
            textAlign: "center",
          }}
        >
          © 2025 EuropeForPalestine. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
