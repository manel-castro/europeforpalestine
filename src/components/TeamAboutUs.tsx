import React from "react";
import { useGetPadding } from "../utils/useGetPadding";
import { useIsWidthLessThan } from "../utils/useWindowSize";

const TeamAboutUs: React.FC = () => {
  const padding = useGetPadding();
  const isPhone = useIsWidthLessThan(700);

  return (
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
        <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>
          About us
        </h2>
        <p
          style={{
            color: "#cccccc",
            lineHeight: 1.8,
            fontSize: "1rem",
            maxWidth: 900,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
        </p>
      </div>
    </section>
  );
};

export default TeamAboutUs;
