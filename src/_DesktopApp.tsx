import React, { useReducer, memo } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import LandingLema from "./components/LandingLema";
import LandingApps from "./components/LandingApps";
import LandingTeam from "./components/LandingTeam";

export const MyContext = React.createContext({});

function DesktopApp(): JSX.Element {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <LandingLema />
      <LandingApps />
      <LandingTeam />
    </div>
  );
}

export default DesktopApp;
