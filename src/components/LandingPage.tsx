import React from "react";
import LandingLema from "./LandingLema";
import LandingApps from "./LandingApps";
import LandingTeam from "./LandingTeam";
import LandingHowToHelp from "./LandingHowToHelp";

const LandingPage: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <LandingLema />
      <LandingApps />
      <LandingTeam />
      <LandingHowToHelp />
    </div>
  );
};

export default LandingPage;
