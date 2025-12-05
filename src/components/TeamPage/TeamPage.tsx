import React, { useEffect } from "react";
import { useGetPadding } from "../../utils/useGetPadding";
import TeamAboutUs from "./components/TeamAboutUs";
import TeamMeetUs from "./components/TeamMeetUs";
import TeamRoles from "./components/TeamRoles";

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
      {/* First section: Team / About */}
      <TeamAboutUs />
      <TeamMeetUs />
      {/* Roles: Developers / Designers / Social media */}
      <TeamRoles />
    </div>
  );
};

export default TeamPage;
