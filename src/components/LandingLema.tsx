import React from "react";
import { useTranslation } from "react-i18next";
import Button from "./ui/Button";
import { useGetPadding } from "../utils/useGetPadding";
import handsUp from "../media/images/hands-up.png";

const LandingLema: React.FC = () => {
  const { t } = useTranslation();
  const padding = useGetPadding();

  const title = t("landing.title");
  const description = t("landing.description");

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "400px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <img
          src={handsUp}
          alt={t("landing.imageAlt")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1.5rem",
          zIndex: 2,
          paddingTop: "4rem",
          paddingBottom: "4rem",
          ...padding,
          background:
            "linear-gradient(to right, #000000 0%, #000000 50%, rgba(0, 0, 0, 0.95) 60%, rgba(0, 0, 0, 0.85) 70%, rgba(0, 0, 0, 0.7) 75%, rgba(0, 0, 0, 0.5) 80%, rgba(0, 0, 0, 0.3) 85%, rgba(0, 0, 0, 0.15) 90%, rgba(0, 0, 0, 0.05) 95%, rgba(0, 0, 0, 0) 100%)",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            margin: 0,
            color: "white",
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.6",
            color: "#cccccc",
            maxWidth: "400px",
            margin: 0,
          }}
        >
          {description}
        </p>

        <Button
          variant="primary"
          color="palestine"
          style={{ alignSelf: "flex-start" }}
        >
          {t("landing.learnMore")}
        </Button>
      </div>
    </div>
  );
};

export default LandingLema;
