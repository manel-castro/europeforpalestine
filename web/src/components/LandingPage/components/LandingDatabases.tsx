import React from "react";
import { useTranslation } from "react-i18next";
import SectionWrapper from "components/TeamPage/components/SectionWrapper";
import Text from "../../ui/Text";

const LandingDatabases: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper>
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <Text
          variant="title-h2"
          style={{ fontSize: "2rem", marginBottom: "1rem" }}
        >
          {t("landing.databasesTitle")}
        </Text>
        <Text
          variant="description"
          style={{ fontSize: "1rem", lineHeight: 1.6 }}
        >
          {t("landing.databasesDescription")}
        </Text>
      </div>
    </SectionWrapper>
  );
};

export default LandingDatabases;
