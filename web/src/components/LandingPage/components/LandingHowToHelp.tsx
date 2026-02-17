import React from "react";
import Button from "../../ui/Button";
import Text from "../../ui/Text";
import { useTranslation } from "react-i18next";
import handsGrab from "media/images/hands-grab.png";
import { useIsWidthLessThan } from "../../../utils/useWindowSize";
import SectionWrapper from "components/TeamPage/components/SectionWrapper";

const LandingHowToHelp: React.FC = () => {
  const isPhone = useIsWidthLessThan(700);

  const { t } = useTranslation();

  return (
    <SectionWrapper id="donate">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <section
          style={{
            display: "flex",
            flexDirection: isPhone ? "column" : "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            width: "100%",
          }}
        >
          {/* left image container */}
          <div
            style={{
              flex: "0 0 320px",
              display: "flex",
              justifyContent: "center",
              order: isPhone ? 2 : 0,
            }}
          >
            <div
              style={{
                width: "320px",
                height: "220px",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                display: "flex",
              }}
            >
              <img
                src={handsGrab}
                alt="how to help"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* right content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              maxWidth: "720px",
              gap: "1rem",
              order: 1,
            }}
          >
            <Text
              variant="title-h2"
              style={{
                margin: 0,
                color: "#fff",
              }}
            >
              {t("landing.howToHelpTitle")}
            </Text>

            <Text variant="description" style={{ margin: 0 }}>
              {t("landing.howToHelpDescription")}
            </Text>

            <a
              href="https://www.patreon.com/cw/EuropeForPalestine/membership"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Button variant="primary" color="palestine">
                {t("buttons.donateNow")}
              </Button>
            </a>
          </div>
        </section>
      </div>
    </SectionWrapper>
  );
};

export default LandingHowToHelp;
