import React from "react";
import Text from "../../ui/Text";
import { useGetPadding } from "utils/useGetPadding";
// keep imports minimal

const TeamAboutUs: React.FC = () => {
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
          variant="title-h2"
          style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}
        >
          About us
        </Text>

        <Text variant="description" style={{ fontSize: "1rem", maxWidth: 900 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
        </Text>
      </div>
    </section>
  );
};

export default TeamAboutUs;
