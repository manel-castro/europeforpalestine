import React from "react";
import { useTranslation } from "react-i18next";
import AppStoreBadge from "./AppStoreBadge";
import PlayStoreBadge from "./PlayStoreBadge";
import Card from "./ui/Card";

interface AppCardProps {
  appName: string;
  appDescription: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
}

const AppCard: React.FC<AppCardProps> = ({
  appName,
  appDescription,
  appStoreUrl,
  playStoreUrl,
}) => {
  return (
    <Card
      color="darker"
      style={{
        flex: "1",
        minWidth: "300px",
        maxWidth: "500px",
      }}
    >
      <h3
        style={{
          fontSize: "1.8rem",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "1.5rem",
        }}
      >
        {appName}
      </h3>
      <p
        style={{
          fontSize: "1rem",
          lineHeight: "1.6",
          color: "#cccccc",
          textAlign: "left",
          marginBottom: "2rem",
        }}
      >
        {appDescription}
      </p>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <AppStoreBadge url={appStoreUrl} />
        <PlayStoreBadge url={playStoreUrl} />
      </div>
    </Card>
  );
};

const LandingApps: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        padding: "4rem",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Title and Description Section */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "1.5rem",
            }}
          >
            {t("apps.title")}
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "#cccccc",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {t("apps.description")}
          </p>
        </div>

        {/* Apps Grid Section */}
        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <AppCard
            appName={t("apps.appName")}
            appDescription={t("apps.appDescription")}
          />
          <AppCard
            appName={t("apps.appName")}
            appDescription={t("apps.appDescription")}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingApps;
