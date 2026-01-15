import React, { useEffect } from "react";
/* layout handled by section components */
import TeamAboutUs from "components/TeamPage/components/TeamAboutUs";
import TeamMeetUs from "components/TeamPage/components/TeamMeetUs";
import MissionSection from "components/TeamPage/components/MissionSection";
import TeamRoles from "components/TeamPage/components/TeamRoles";
import TeamJoinUs from "components/TeamPage/components/TeamJoinUs";

const TeamPage: React.FC = () => {
  useEffect(() => {
    // On mount, if the URL contains a hash, scroll to the matching id.
    if (
      typeof window !== "undefined" &&
      window.location &&
      window.location.hash
    ) {
      const id = window.location.hash.replace("#", "");
      if (id) {
        // wait a tick so that the section is rendered before scrolling
        requestAnimationFrame(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      }
    }
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "center", // vertically center the page contents
      }}
    >
      <TeamAboutUs />
      {/* <TeamMeetUs /> */}

      <TeamRoles />
      <MissionSection />
      <TeamJoinUs />
    </div>
  );
};

export default TeamPage;
