import React from "react";
import { useTranslation } from "react-i18next";
import AppStoreBadge from "../../ui/AppStoreBadge";
import PlayStoreBadge from "../../ui/PlayStoreBadge";
import Card from "../../ui/Card";
import { useGetPadding } from "../../../utils/useGetPadding";
import Text from "../../ui/Text";

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
      <Text
        variant="title-h3"
        style={{
          fontSize: "1.8rem",
          textAlign: "center",
          marginBottom: "1.5rem",
        }}
      >
        {appName}
      </Text>
      <Text
        variant="description"
        style={{
          fontSize: "1rem",
          lineHeight: "1.6",
          textAlign: "left",
          marginBottom: "2rem",
        }}
      >
        {appDescription}
      </Text>
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

  const horizontalPadding = useGetPadding();

  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        color: "white",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        ...horizontalPadding,
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
          <Text
            variant="title-h2"
            style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}
          >
            {t("apps.title")}
          </Text>
          <Text
            variant="description"
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {t("apps.description")}
          </Text>
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
