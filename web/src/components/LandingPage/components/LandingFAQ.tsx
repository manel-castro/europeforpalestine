import React from "react";
import SectionWrapper from "components/TeamPage/components/SectionWrapper";
import Text from "../../ui/Text";
import { useTranslation } from "react-i18next";

const LandingFAQ: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper>
      <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "left" }}>
        <Text
          variant="title-h2"
          style={{ color: "#fff", marginBottom: "0.5rem" }}
        >
          {t("landing.faq.title")}
        </Text>

        <div style={{ color: "#ddd", lineHeight: 1.6 }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <div key={i} style={{ marginBottom: 24 }}>
              <div style={{ fontWeight: "bold", marginBottom: 8 }}>
                {t(`landing.faq.q${i}.question`)}
              </div>
              <div>{t(`landing.faq.q${i}.answer`)}</div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LandingFAQ;
