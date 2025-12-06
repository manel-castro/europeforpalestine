import React from "react";
import Text from "../../ui/Text";
import SectionWrapper from "./SectionWrapper";

const TeamAboutUs: React.FC = () => {
  return (
    <SectionWrapper>
      <Text
        variant="title-h2"
        style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}
      >
        About us
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
      </Text>
    </SectionWrapper>
  );
};

export default TeamAboutUs;
