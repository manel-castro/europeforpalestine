import React from "react";
import { useTranslation } from "react-i18next";
import AppStoreBadge from "../../ui/AppStoreBadge";
import PlayStoreBadge from "../../ui/PlayStoreBadge";
import WebBadge from "../../ui/WebBadge";
import Card from "../../ui/Card";

import Text from "../../ui/Text";
import SectionWrapper from "components/TeamPage/components/SectionWrapper";

interface AppCardProps {
  appName: string;
  appDescription: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  webUrl?: string;
  showWeb?: boolean;
  showAppStore?: boolean;
  showPlayStore?: boolean;
}

const AppCard: React.FC<AppCardProps> = ({
  appName,
  appDescription,
  appStoreUrl,
  playStoreUrl,
  webUrl,
  showWeb = false,
  showAppStore = true,
  showPlayStore = true,
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
        {showAppStore && <AppStoreBadge url={appStoreUrl} />}
        {showPlayStore && <PlayStoreBadge url={playStoreUrl} />}
        {showWeb && <WebBadge url={webUrl} />}
      </div>
    </Card>
  );
};

const LandingApps: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper>
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
            showWeb
            showAppStore={false}
            showPlayStore={false}
            webUrl={"https://consumer-list.com"}
          />
          <AppCard
            appName={t("apps.app2Name")}
            appDescription={t("apps.app2Description")}
            showWeb={false}
            showAppStore
            appStoreUrl={
              "https://apps.apple.com/es/app/transparent/id6740002727?l=en-GB"
            }
            playStoreUrl={
              "https://play.google.com/store/apps/details?id=com.transparente"
            }
            showPlayStore
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LandingApps;
