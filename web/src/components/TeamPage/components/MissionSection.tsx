import React from "react";
import Text from "components/ui/Text";
import SectionWrapper from "./SectionWrapper";
import networkIcon from "media/images/network-icon.png";
import peopleIcon from "media/images/people-icon.png";
import shieldIcon from "media/images/shield-icon.png";

const cardData = [
  {
    key: "network",
    icon: networkIcon,
    title: "Volunteer-driven",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
  {
    key: "people",
    icon: peopleIcon,
    title: "Volunteer-driven",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
  {
    key: "shield",
    icon: shieldIcon,
    title: "Volunteer-driven",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
];

const MissionSection: React.FC = () => {
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
          Our mission
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
