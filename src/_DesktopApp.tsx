import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

export const MyContext = React.createContext({});

function DesktopApp(): JSX.Element {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <LandingPage />} />
          <Route path="/about-us" render={() => <AboutUs />} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default DesktopApp;
