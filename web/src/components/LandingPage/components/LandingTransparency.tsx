import React from "react";
import SectionWrapper from "components/TeamPage/components/SectionWrapper";
import Text from "../../ui/Text";
import { useTranslation } from "react-i18next";

const LandingTransparency: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper>
      <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "left" }}>
        <Text
          variant="title-h2"
          style={{ color: "#fff", marginBottom: "0.5rem" }}
        >
          {t("landing.transparencyTitle")}
        </Text>
        <Text
          variant="description"
          style={{ color: "#ddd", whiteSpace: "pre-wrap" }}
        >
          {t("landing.transparencyDescription")}
        </Text>
      </div>
    </SectionWrapper>
  );
};

export default LandingTransparency;
