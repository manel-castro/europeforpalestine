import React from "react";
import LandingLema from "components/LandingPage/components/LandingLema";
import LandingApps from "components/LandingPage/components/LandingApps";
import LandingLema2 from "components/LandingPage/components/LandingLema2";
import LandingTeam from "components/LandingPage/components/LandingTeam";
import LandingHowToHelp from "components/LandingPage/components/LandingHowToHelp";
import LandingDatabases from "components/LandingPage/components/LandingDatabases";
import NewsletterSubscribe from "components/LandingPage/components/NewsletterSubscribe";
import LandingTransparency from "components/LandingPage/components/LandingTransparency";
import LandingFAQ from "components/LandingPage/components/LandingFAQ";

const LandingPage: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <LandingLema />
      <LandingApps />
      <LandingLema2 />
      <LandingTeam />
      <LandingHowToHelp />
      {/* <NewsletterSubscribe /> */}
      <LandingDatabases />
      <LandingTransparency />
      <LandingFAQ />
    </div>
  );
};

export default LandingPage;
