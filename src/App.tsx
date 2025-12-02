import React, { useState, useEffect, useContext, useReducer } from "react";
import LoadingLogo from "./_LoadingLogo";

function _App() {
  const [Loading, setLoading] = useState(true);

  const [ActiveModule, setActiveModule] = useState<null | (() => JSX.Element)>(
    null
  );

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  if (/Mobi|Android/i.test(navigator.userAgent)) {
    import("./_MobileApp").then((m) => setActiveModule(() => m.default));
  } else {
    import("./_DesktopApp").then((m) => setActiveModule(() => m.default));
  }

  return (
    // <>{Loading ? <LoadingLogo /> : <>{ActiveModule && <ActiveModule />}</>}</>
    <>{ActiveModule && <ActiveModule />}</>
  );
}

export default _App;
