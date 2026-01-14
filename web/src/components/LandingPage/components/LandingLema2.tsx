import React from "react";
import { useTranslation } from "react-i18next";
import SectionWrapper from "components/TeamPage/components/SectionWrapper";
import Text from "../../ui/Text";

const LandingLema2: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper>
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <Text
          variant="title-h2"
          style={{ fontSize: "2rem", marginBottom: "1rem" }}
        >
          {t("lema.title")}
        </Text>
        <Text
          variant="description"
          style={{ fontSize: "1rem", lineHeight: 1.6 }}
        >
          {t("lema.description")}
        </Text>
      </div>
    </SectionWrapper>
  );
};

export default LandingLema2;
