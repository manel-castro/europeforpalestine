import React from "react";
import Text from "components/ui/Text";
import Button from "components/ui/Button";
import SectionWrapper from "./SectionWrapper";

const TeamJoinUs: React.FC = () => {
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
            Want to join us?
          </Text>
        </div>

        <div>
          <Text
            variant="description"
            style={{ margin: 0, lineHeight: 1.6, textAlign: "center" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </Text>
        </div>

        <div>
          <Button color="palestine" variant="primary">
            Connect in Linkedin
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TeamJoinUs;
