import React from "react";
import Text from "../../ui/Text";
import { useGetPadding } from "../../../utils/useGetPadding";
// keep imports minimal

const TeamMeetUs: React.FC = () => {
  const padding = useGetPadding();

  return (
    <section
      style={{
        backgroundColor: "#1a1a1a",
        color: "white",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        ...padding,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <Text
          id="meet-team"
          variant="title-h2"
          style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}
        >
          Meet the team behind #EuropeForPalestine
        </Text>

        <Text variant="description" style={{ fontSize: "1rem", maxWidth: 900 }}>
          Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </div>
    </section>
  );
};

export default TeamMeetUs;
