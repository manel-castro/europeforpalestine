import React, { useState } from "react";
import linkedinLogo from "media/images/linkedin-logo.png";

interface ProfileCardProps {
  imageUrl: string;
  name: string;
  title?: string;
  description?: string;
  linkedinUrl?: string;
  getLinkedinUrl?: (name: string) => string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  imageUrl,
  name,
  title,
  description,
  linkedinUrl,
  getLinkedinUrl,
}) => {
  const [hover, setHover] = useState(false);

  const linkedin =
    linkedinUrl || (getLinkedinUrl ? getLinkedinUrl(name) : undefined);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 270,
        height: 270,
      }}
    >
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: "relative",
          width: 270,
          height: 270,
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          cursor: "pointer",
        }}
      >
        <img
          src={imageUrl}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            filter: hover ? "brightness(0.5) blur(1px)" : "brightness(1) blur(0px)",
            transition: "filter 280ms ease",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            // animate height from small to large on hover (35% -> 80%)
            height: hover ? "90%" : "25%",
            color: "white",
            background: `
              linear-gradient(
                to top,
                rgba(0,0,0,1) 0%,
                rgba(0,0,0,0.7) 50%,
                rgba(0,0,0,0) 100%
              )
            `,
            display: "flex",
            flexDirection: "column",
            // keep the content anchored to the top of the overlay so it moves up
            // as the overlay expands upward (follows the top edge)
            justifyContent: "flex-start",
            alignItems: "center",
            textAlign: "center",
            boxSizing: "border-box",
            transition: "height 280ms ease",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              fontWeight: 700,
              lineHeight: 1,
              width: "100%",
              textAlign: "left",
              paddingTop: "0.75rem",
              paddingLeft: "0.75rem",
            }}
          >
            {linkedin ? (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  opacity: hover ? 1 : 0,
                  transition: "opacity 280ms ease",
                  pointerEvents: hover ? "auto" : "none"
                }}
              >
                <img
                  src={linkedinLogo}
                  alt={`${name} LinkedIn`}
                  style={{ width: 28, height: 28 }}
                />
              </a>
            ) : null}
            {name}
          </div>
          {title ? (
            <div
              style={{
                fontSize: "0.9rem",
                opacity: 0.95,
                width: "100%",
                textAlign: "left",
                paddingLeft: "0.75rem",
              }}
            >
              {title}
            </div>
          ) : null}

          {/* Description fades in on hover */}
          <div
            className="profile-description"
            style={{
              opacity: hover ? 1 : 0,
              transition: "opacity 220ms ease",
              marginTop: "0.75rem",
              width: "100%",
              fontSize: "0.9rem",
              lineHeight: 1.3,
              textAlign: "left",
              overflowY: "auto",
              padding: "0 0.75rem 0.75rem 0.75rem",
            }}
          >
            {description ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
