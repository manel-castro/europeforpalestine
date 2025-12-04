import React from "react";
import { useGetPadding } from "../utils/useGetPadding";
import { useIsWidthLessThan } from "../utils/useWindowSize";
import Text from "./ui/Text";

const TeamAboutUs: React.FC = () => {
  const padding = useGetPadding();
  const isPhone = useIsWidthLessThan(700);

  return (
    <>
      <section
        style={{
          backgroundColor: "#1a1a1a", // same as LandingApps
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
            textAlign: isPhone ? "center" : "left",
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
            textAlign: isPhone ? "center" : "left",
          }}
        >
          <Text
            variant="title-h2"
            style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}
          >
            Meet the team behind #EuropeForPalestine
          </Text>

          <Text variant="description" style={{ fontSize: "1rem", maxWidth: 900 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </Text>
        </div>
      </section>
    </>
  );
};

export default TeamAboutUs;
