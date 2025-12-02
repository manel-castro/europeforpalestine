import React, { useRef, useEffect } from "react";

function LoadingLogo() {
  const _MLeftDiv = useRef<HTMLDivElement>(null);
  const _MMiddleDiv = useRef<HTMLDivElement>(null);
  const _MRightDiv = useRef<HTMLDivElement>(null);

  const _JUpDiv = useRef<HTMLDivElement>(null);
  const _JDownDiv = useRef<HTMLDivElement>(null);
  const _JMiddleDiv = useRef<HTMLDivElement>(null);

  const _LoadingLogoContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      if (
        _MLeftDiv &&
        _MLeftDiv.current &&
        _MMiddleDiv &&
        _MMiddleDiv.current &&
        _MRightDiv &&
        _MRightDiv.current &&
        _JUpDiv &&
        _JUpDiv.current &&
        _JDownDiv &&
        _JDownDiv.current &&
        _JMiddleDiv &&
        _JMiddleDiv.current &&
        _LoadingLogoContainer &&
        _LoadingLogoContainer.current
      ) {
        _MLeftDiv.current.style.bottom = "6rem";
        _MRightDiv.current.style.bottom = "6rem";
        _MLeftDiv.current.style.bottom = "6rem";
        _MRightDiv.current.style.bottom = "6rem";

        _JUpDiv.current.style.left = "3rem";

        setTimeout(() => {
          _MMiddleDiv.current.style.top = "6rem";

          _JMiddleDiv.current.style.top = "4.8rem";
          setTimeout(() => {
            _JDownDiv.current.style.right = "4.9rem";
            setTimeout(() => {
              _LoadingLogoContainer.current.style.opacity = "0";
            }, 650);
          }, 210);
        }, 500);
      }
    }, 0);
  }, []);
  return (
    <div
      style={{
        position: "relative",
        // height: "100",
        width: "100%",
      }}
    >
      <div
        ref={_LoadingLogoContainer}
        style={{
          position: "relative",
          width: "100%",
          textAlign: "center",
          top: "40vh",
          opacity: "1",
          transition: "opacity 0.5s",
        }}
      >
        <p
          style={{
            fontFamily: "PoiretOneRegular",
            fontSize: "6rem",
            margin: "0",
            zIndex: 2,
          }}
        >
          M J
        </p>
        <div
          style={{
            // background: "rgba(200,200,0,0.7)",
            margin: "auto",
            marginTop: "-6.5rem",
            width: "11rem",
            height: "6rem",
            zIndex: 1,
            position: "relative",
          }}
        >
          <div
            ref={_MLeftDiv}
            style={{
              position: "absolute",
              top: "0",
              bottom: "0",
              // height: "6rem",
              background: "white",
              width: "0.95rem",
              left: "0",
              display: "inline-block",
              // borderRight: "1px solid black",
              transition: "all 0.5s",
            }}
          ></div>
          <div
            ref={_MMiddleDiv}
            style={{
              background: "white",
              width: "4.2rem",
              position: "absolute",
              top: "0",
              bottom: "0",
              left: "0.95rem",
              // height: "6rem",
              display: "inline-block",
              // borderRight: "1px solid black",
              transition: "all 0.7s",
            }}
          ></div>
          <div
            ref={_MRightDiv}
            style={{
              position: "absolute",
              background: "white",
              width: "1rem",
              left: "5.1rem",
              top: "0",
              bottom: "0",
              // height: "6rem",
              display: "inline-block",
              // borderRight: "1px solid black",
              transition: "all 0.5s",
            }}
          ></div>

          <div
            style={{
              width: "4.9rem",
              height: "6rem",
              display: "inline-block",
              position: "absolute",
              left: "7.7rem",
            }}
          >
            <div
              ref={_JUpDiv}
              style={{
                background: "white",
                // height: "0.9rem",
                top: "0",
                bottom: "5.1rem",
                left: "0rem",
                right: "1.9rem",
                position: "absolute",
                // border: "1px solid black",
                transition: "all 0.5s",
              }}
            ></div>
            <div
              ref={_JMiddleDiv}
              style={{
                background: "white",
                width: "3rem",
                // height: "3.9rem",
                top: "0.8684rem",
                bottom: "1.29rem",
                left: "0",
                position: "absolute",
                // border: "1px solid black",
                transition: "all 0.30s ease-in-out",
                // transition: "all 1s",
              }}
            ></div>
            <div
              ref={_JDownDiv}
              style={{
                background: "white",

                // height: "1rem",
                position: "absolute",
                top: "4.76rem",
                bottom: "0",
                left: "0",
                right: "2.6rem",
                // border: "1px solid black",
                transition: "all 0.40s ",
                // transition: "all 1s",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingLogo;
