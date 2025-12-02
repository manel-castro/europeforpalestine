import React from "react";
import { useTranslation } from "react-i18next";

interface PlayStoreBadgeProps {
  url?: string;
}

const PlayStoreBadge: React.FC<PlayStoreBadgeProps> = ({ url = "#" }) => {
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
        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
        alt={t("apps.availableOnPlayStore")}
        style={{
          height: "60px",
          width: "auto",
          marginLeft: "-10px",
        }}
      />
    </a>
  );
};

export default PlayStoreBadge;
