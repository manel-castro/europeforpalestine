import React from "react";
import Button from "../../ui/Button";
import Text from "../../ui/Text";
import handsUp from "media/images/hands-up.png";
import { useGetPadding } from "utils/useGetPadding";
import { useIsWidthLessThan } from "../../../utils/useWindowSize";

const LandingHowToHelp: React.FC = () => {
  const padding = useGetPadding();

  const isPhone = useIsWidthLessThan(700);

  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        color: "white",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        ...padding,
      }}
    >
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
                src={handsUp}
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
              How to help?
            </Text>

            <Text variant="description" style={{ margin: 0 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              aliquet, odio at commodo gravida, urna nisl fermentum mauris, sit
              amet facilisis neque nisl in nunc. Curabitur non justo vitae nibh
              posuere convallis. Sed a ex id ligula tristique malesuada.
            </Text>

            <Button variant="primary" color="palestine">
              I want to donate
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingHowToHelp;
