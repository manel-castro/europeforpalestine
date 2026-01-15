import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../../ui/Button";
import Text from "../../ui/Text";

import handsUp from "media/images/hands-up.png";
import SectionWrapper from "components/TeamPage/components/SectionWrapper";

const LandingLema: React.FC = () => {
  const { t } = useTranslation();

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
          background:
            "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.99) 52%, rgba(0,0,0,0.95) 58%, rgba(0,0,0,0.5) 74%, rgba(0,0,0,0.25) 88%, rgba(0,0,0,0) 100%)",
        }}
      >
        <SectionWrapper
          backgroundColor="transparent"
          paddingTop="0"
          paddingBottom="0"
          maxWidth={1200}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textAlign: "left",
              width: "100%",
            }}
          >
            <Text
              variant="title-h2"
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                margin: 0,
                marginBottom: "1.5rem",
              }}
            >
              {title}
            </Text>

            <Text
              variant="description"
              style={{
                fontSize: "1.1rem",
                maxWidth: "400px",
                margin: "0 0 1.5rem 0",
                lineHeight: "1.8",
              }}
            >
              {description}
            </Text>

            <a
              href="https://consumer-list.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: "1rem", textDecoration: "none" }}
            >
              <Button variant="primary" color="palestine">
                {t("landing.meetUs")}
              </Button>
            </a>
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
};

export default LandingLema;
