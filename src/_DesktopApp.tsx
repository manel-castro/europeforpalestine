import React, { useReducer, memo } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import { useEffect } from "react";

export const MyContext = React.createContext({});

function DesktopApp(): JSX.Element {
  return <div>Hello</div>;
}

export default DesktopApp;
