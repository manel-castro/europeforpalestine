import React from "react";
import Text from "../../ui/Text";
import SectionWrapper from "./SectionWrapper";

const TeamMeetUs: React.FC = () => {
  return (
    <SectionWrapper>
      <Text
        id="meet-team"
        variant="title-h2"
        style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}
      >
        Meet the team behind #EuropeForPalestine
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
        Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </SectionWrapper>
  );
};

export default TeamMeetUs;
