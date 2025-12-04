import React from "react";
import { useGetPadding } from "../utils/useGetPadding";

const AboutUs: React.FC = () => {
  const padding = useGetPadding();

  return (
    <div style={{ paddingTop: "4rem", paddingBottom: "4rem", ...padding }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h1>About Us</h1>
        <p>
          This is a placeholder About Us page. Replace with real content as
          needed.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
