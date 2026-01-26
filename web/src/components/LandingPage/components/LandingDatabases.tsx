import React from "react";
import { useTranslation } from "react-i18next";
import SectionWrapper from "components/TeamPage/components/SectionWrapper";
import Text from "../../ui/Text";

const LandingDatabases: React.FC = () => {
  const { t, i18n } = useTranslation();
  const align: "left" | "center" = (i18n.language || "")
    .toLowerCase()
    .startsWith("es")
    ? "left"
    : "center";

  return (
    <SectionWrapper>
      <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: align }}>
        <Text
          variant="title-h2"
          style={{ textAlign: "left", fontSize: "2rem", marginBottom: "1rem" }}
        >
          {t("landing.databasesTitle")}
        </Text>
        <Text
          variant="description"
          style={{
            textAlign: "left",
            fontSize: "1rem",
            lineHeight: 1.6,
            whiteSpace: "pre-wrap",
          }}
        >
          {t("landing.databasesDescription")}
        </Text>
      </div>
    </SectionWrapper>
  );
};

export default LandingDatabases;
