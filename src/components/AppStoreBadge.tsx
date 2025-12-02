import React from "react";
import { useTranslation } from "react-i18next";

interface AppStoreBadgeProps {
  url?: string;
}

const AppStoreBadge: React.FC<AppStoreBadgeProps> = ({ url = "#" }) => {
  const { t } = useTranslation();

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        textDecoration: "none",
      }}
    >
      <img
        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
        alt={t("apps.availableOnAppStore")}
        style={{
          height: "40px",
          width: "auto",
        }}
      />
    </a>
  );
};

export default AppStoreBadge;
