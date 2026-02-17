import React from "react";
import { useTranslation } from "react-i18next";
import SectionWrapper from "components/TeamPage/components/SectionWrapper";
import Text from "../../ui/Text";

const LandingLema2: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper>
      <div style={{ maxWidth: 500, margin: "0 auto", textAlign: "center" }}>
        <div style={{ marginBottom: "1rem" }}>
          <Text
            variant="description"
            style={{ fontSize: "1rem", lineHeight: 1.8 }}
          >
            {t("lema.p1")}
          </Text>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <Text
            variant="description"
            style={{ fontSize: "1rem", lineHeight: 1.8 }}
          >
            {t("lema.p2")}
          </Text>
        </div>

        <div style={{ marginTop: "2.25rem", marginBottom: "0.75rem" }}>
          <Text
            variant="description"
            style={{ fontSize: "1rem", fontWeight: "bold" }}
          >
            {t("lema.boicotTitle")}
          </Text>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <Text
            variant="description"
            style={{ fontSize: "1rem", lineHeight: 1.8 }}
          >
            {t("lema.p3")}
          </Text>
        </div>

        <div>
          <Text
            variant="description"
            style={{ fontSize: "1rem", lineHeight: 1.8 }}
          >
            {t("lema.p4")}
          </Text>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LandingLema2;
