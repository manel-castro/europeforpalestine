import React from "react";
import { useTranslation } from "react-i18next";
import Text from "../../ui/Text";
import SectionWrapper from "./SectionWrapper";

const TeamAboutUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper>
      <Text
        id="team-roles"
        variant="title-h2"
        style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}
      >
        {t("team.title")}
      </Text>

      <Text
        variant="description"
        style={{
          fontSize: "1rem",
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {t("team.description")}
      </Text>
    </SectionWrapper>
  );
};

export default TeamAboutUs;
