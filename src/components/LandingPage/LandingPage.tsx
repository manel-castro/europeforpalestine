import React from "react";
import LandingLema from "components/LandingPage/components/LandingLema";
import LandingApps from "components/LandingPage/components/LandingApps";
import LandingTeam from "components/LandingPage/components/LandingTeam";
import LandingHowToHelp from "components/LandingPage/components/LandingHowToHelp";

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
