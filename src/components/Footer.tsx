import React from "react";
import { useGetPadding } from "../utils/useGetPadding";

const IconLinkedIn: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
    style={{ display: "block" }}
  >
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 7h4V24h-4zM8.5 7h3.84v2.27h.05c.54-1.02 1.86-2.09 3.83-2.09 4.09 0 4.84 2.69 4.84 6.18V24h-4v-8.03c0-1.92-.04-4.39-2.67-4.39-2.67 0-3.08 2.09-3.08 4.25V24h-4z" />
  </svg>
);

const IconInstagram: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
    style={{ display: "block" }}
  >
    <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.055 1.97.24 2.43.4.59.21 1.01.47 1.45.91.44.44.7.86.91 1.45.16.46.34 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.97-.4 2.43-.21.59-.47 1.01-.91 1.45-.44.44-.86.7-1.45.91-.46.16-1.26.34-2.43.4-1.27.06-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.24-2.43-.4-.59-.21-1.01-.47-1.45-.91-.44-.44-.7-.86-.91-1.45-.16-.46-.34-1.26-.4-2.43C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.055-1.17.24-1.97.4-2.43.21-.59.47-1.01.91-1.45.44-.44.86-.7 1.45-.91.46-.16 1.26-.34 2.43-.4C8.416 2.212 8.8 2.2 12 2.2zm0 2.2c-3.12 0-3.49.01-4.72.07-1.03.054-1.59.23-1.96.38-.5.2-.86.44-1.24.82-.38.38-.62.74-.82 1.24-.15.37-.33.93-.38 1.96-.06 1.23-.07 1.6-.07 4.72s.01 3.49.07 4.72c.054 1.03.23 1.59.38 1.96.2.5.44.86.82 1.24.38.38.74.62 1.24.82.37.15.93.33 1.96.38 1.23.06 1.6.07 4.72.07s3.49-.01 4.72-.07c1.03-.054 1.59-.23 1.96-.38.5-.2.86-.44 1.24-.82.38-.38.62-.74.82-1.24.15-.37.33-.93.38-1.96.06-1.23.07-1.6.07-4.72s-.01-3.49-.07-4.72c-.054-1.03-.23-1.59-.38-1.96-.2-.5-.44-.86-.82-1.24-.38-.38-.74-.62-1.24-.82-.37-.15-.93-.33-1.96-.38-1.23-.06-1.6-.07-4.72-.07zM12 7.2a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6zm0 2.2a2.6 2.6 0 110 5.2 2.6 2.6 0 010-5.2zm5.2-2.9a1.12 1.12 0 11-2.24 0 1.12 1.12 0 012.24 0z" />
  </svg>
);

const IconX: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
    style={{ display: "block" }}
  >
    <path d="M22.46 6c-.77.35-1.56.58-2.37.69a4.12 4.12 0 001.8-2.28c-.8.47-1.69.81-2.63 1A4.1 4.1 0 0015.5 4c-2.27 0-4.12 1.86-4.12 4.15 0 .32.04.63.1.93C7.73 9.82 4.1 7.86 1.67 4.9c-.35.6-.55 1.3-.55 2.04 0 1.4.7 2.64 1.77 3.37-.66-.02-1.28-.2-1.82-.5v.05c0 1.98 1.4 3.64 3.26 4.02-.34.1-.7.15-1.06.15-.26 0-.52-.03-.77-.07.52 1.62 2.03 2.8 3.82 2.83A8.27 8.27 0 010 19.54a11.68 11.68 0 006.29 1.84c7.55 0 11.68-6.48 11.68-12.1v-.55c.8-.58 1.48-1.3 2.02-2.12-.73.33-1.5.55-2.31.65z" />
  </svg>
);

const Footer: React.FC = () => {
  const padding = useGetPadding();

  return (
    <footer style={{ backgroundColor: "#0b0b0b", color: "white", ...padding }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingTop: "3rem",
          paddingBottom: "2rem",
          gap: "2rem",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.1rem" }}
        >
          <div
            style={{
              fontFamily: "Gilroy-Black, sans-serif",
              fontSize: 74,
              lineHeight: 1,
            }}
          >
            EUROPE FOR
          </div>
          <div
            style={{
              fontFamily: "Gilroy-Black, sans-serif",
              fontSize: 90,
              lineHeight: 1,
            }}
          >
            PALESTINE
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              fontSize: "0.95rem",
              color: "#cccccc",
              fontWeight: 500,
              alignSelf: "flex-start",
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
              <IconLinkedIn size={32} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              style={{ color: "#fff", display: "inline-block" }}
            >
              <IconInstagram size={32} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              style={{ color: "#fff", display: "inline-block" }}
            >
              <IconX size={32} />
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
