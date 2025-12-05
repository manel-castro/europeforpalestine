import React from "react";
import LandingLema from "./components/LandingLema";
import LandingApps from "./components/LandingApps";
import LandingTeam from "./components/LandingTeam";
import LandingHowToHelp from "./components/LandingHowToHelp";

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
