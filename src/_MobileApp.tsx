import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import MainPageMobile from "./mobile/MainPageMobile";

function MobileApp() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={MainPageMobile} />
      {/* <Route render={() => <div>404</div>} /> */}
    </BrowserRouter>
  );
}

export default MobileApp;
