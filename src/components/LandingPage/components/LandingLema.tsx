import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../../ui/Button";
import Text from "../../ui/Text";
import { useGetPadding } from "utils/useGetPadding";
import handsUp from "media/images/hands-up.png";

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
            "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.99) 52%, rgba(0,0,0,0.95) 58%, rgba(0,0,0,0.5) 74%, rgba(0,0,0,0.25) 88%, rgba(0,0,0,0) 100%)",
        }}
      >
        <Text
          variant="title-h1"
          style={{ fontSize: "2.5rem", fontWeight: "bold", margin: 0 }}
        >
          {title}
        </Text>

        <Text
          variant="description"
          style={{ fontSize: "1.1rem", maxWidth: "400px" }}
        >
          {description}
        </Text>

        <a
          href="/about-us"
          style={{ alignSelf: "flex-start", textDecoration: "none" }}
        >
          <Button
            variant="primary"
            color="palestine"
            style={{ alignSelf: "flex-start" }}
          >
            {t("landing.meetUs")}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default LandingLema;
