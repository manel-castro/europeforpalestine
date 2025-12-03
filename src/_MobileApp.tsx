import React from "react";
import DesktopApp from "./_DesktopApp";

const MobileApp: React.FC = () => {
  // For mobile we render the DesktopApp to replicate the desktop experience
  return <DesktopApp />;
};

export default MobileApp;
