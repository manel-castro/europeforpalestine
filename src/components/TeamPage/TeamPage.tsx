import React from "react";
import { useGetPadding } from "../../utils/useGetPadding";
import TeamAboutUs from "./components/TeamAboutUs";
import TeamMeetUs from "./components/TeamMeetUs";

const TeamPage: React.FC = () => {
  return (
    <div>
      {/* First section: Team / About */}
      <TeamAboutUs />
      <TeamMeetUs />
    </div>
  );
};

export default TeamPage;
