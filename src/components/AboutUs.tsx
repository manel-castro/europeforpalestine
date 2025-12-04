import React from "react";
import { useGetPadding } from "../utils/useGetPadding";
import TeamAboutUs from "./TeamAboutUs";

const AboutUs: React.FC = () => {
  const padding = useGetPadding();

  return (
    <div>
      {/* First section: Team / About */}
      <TeamAboutUs />
    </div>
  );
};

export default AboutUs;
