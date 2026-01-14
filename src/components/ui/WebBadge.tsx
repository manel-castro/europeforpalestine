import React from "react";

interface WebBadgeProps {
  url?: string;
}

const WebBadge: React.FC<WebBadgeProps> = ({ url = "#" }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Accede ahora - web"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.6rem",
        textDecoration: "none",
        padding: "6px 10px",
        borderRadius: "6px",
        background: "#000",
        color: "#fff",
        height: "44px",
        border: "1px solid #fff",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-globe-icon lucide-globe"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span style={{ fontSize: "0.85rem", fontWeight: 700 }}>
          Accede ahora
        </span>
        <span style={{ fontSize: "0.75rem", opacity: 0.9 }}>
          consumer-list.com
        </span>
      </div>
    </a>
  );
};

export default WebBadge;
