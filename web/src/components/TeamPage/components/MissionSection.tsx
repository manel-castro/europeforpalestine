import React from "react";
import Text from "components/ui/Text";
import SectionWrapper from "./SectionWrapper";
import networkIcon from "media/images/network-icon.png";
import peopleIcon from "media/images/people-icon.png";
import shieldIcon from "media/images/shield-icon.png";
import { useTranslation } from "react-i18next";

const MissionSection: React.FC = () => {
  const { t } = useTranslation();

  const cardData = [
    {
      key: "network",
      icon: networkIcon,
      title: t("team.mission.cards.humanRights.title"),
      desc: t("team.mission.cards.humanRights.description"),
    },
    {
      key: "people",
      icon: peopleIcon,
      title: t("team.mission.cards.volunteerDriven.title"),
      desc: t("team.mission.cards.volunteerDriven.description"),
    },
    {
      key: "shield",
      icon: shieldIcon,
      title: t("team.mission.cards.legallyAssisted.title"),
      desc: t("team.mission.cards.legallyAssisted.description"),
    },
  ];

  return (
    <SectionWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          alignItems: "center",
        }}
      >
        <Text variant="title-h2" style={{ margin: 0 }}>
          {t("team.mission.title")}
        </Text>

        <Text
          variant="description"
          style={{
            maxWidth: 800,
            margin: 0,
            lineHeight: 1.6,
            textAlign: "center",
          }}
        >
          {t("team.mission.description")}
        </Text>

        {/* Cards row */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            marginTop: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          {cardData.map((c) => (
            <div
              key={c.key}
              style={{
                backgroundColor: "#000000",
                padding: "1.25rem",
                borderRadius: 12,
                width: 260,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  borderRadius: 10,
                  padding: 10,
                  backgroundColor: "rgba(0,122,61,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={c.icon}
                  alt={c.key}
                  style={{
                    width: 18,
                    height: 18,
                    display: "block",
                    objectFit: "contain",
                    margin: "0 auto",
                  }}
                />
              </div>

              <div style={{ width: "100%", textAlign: "center" }}>
                <Text variant="title-h4" style={{ margin: 0 }}>
                  {c.title}
                </Text>
              </div>

              <Text
                variant="description"
                style={{ margin: 0, textAlign: "center" }}
              >
                {c.desc}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default MissionSection;
