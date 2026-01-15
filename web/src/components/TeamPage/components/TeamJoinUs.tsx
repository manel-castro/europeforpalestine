import React from "react";
import { useTranslation } from "react-i18next";
import Text from "components/ui/Text";
import Button from "components/ui/Button";
import SectionWrapper from "./SectionWrapper";

const TeamJoinUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <div>
          <Text variant="title-h2" style={{ margin: 0 }}>
            {t("team.joinUs.title")}
          </Text>
        </div>

        <div>
          <Text
            variant="description"
            style={{ margin: 0, lineHeight: 1.6, textAlign: "center" }}
          >
            {t("team.joinUs.description")}
          </Text>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/company/europeforpalestine/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button color="palestine" variant="primary">
              {t("team.joinUs.button")}
            </Button>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TeamJoinUs;
