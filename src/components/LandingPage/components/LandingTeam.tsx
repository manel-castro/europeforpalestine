import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useGetPadding } from "../../../utils/useGetPadding";
import Text from "../../ui/Text";

interface TeamMemberProps {
  imageUrl: string;
  name: string;
  description: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  imageUrl,
  name,
  description,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        maxWidth: "300px",
      }}
    >
      <div
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <img
          src={imageUrl}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <Text
        variant="title-h3"
        style={{
          fontSize: "1.3rem",
          textAlign: "center",
          margin: 0,
          color: "white",
        }}
      >
        {name}
      </Text>
      <Text
        variant="description"
        style={{
          fontSize: "0.95rem",
          lineHeight: "1.5",
          textAlign: "center",
          margin: 0,
        }}
      >
        {description}
      </Text>
    </div>
  );
};

const LandingTeam: React.FC = () => {
  const { t } = useTranslation();

  const horizontalPadding = useGetPadding();

  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        ...horizontalPadding,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3rem",
        }}
      >
        {/* Title */}
        <Text
          variant="title-h2"
          style={{
            fontSize: "2.5rem",
            textAlign: "center",
            margin: 0,
            color: "white",
          }}
        >
          {t("team.title")}
        </Text>

        {/* Description */}
        <Text
          variant="description"
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
            textAlign: "center",
            maxWidth: "800px",
            margin: 0,
          }}
        >
          {t("team.description")}
        </Text>

        {/* Team Members Grid */}
        <div
          style={{
            display: "flex",
            gap: "3rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "2rem",
          }}
        >
          <TeamMember
            imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
            name={t("team.member1.name")}
            description={t("team.member1.description")}
          />
          <TeamMember
            imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
            name={t("team.member2.name")}
            description={t("team.member2.description")}
          />
          <TeamMember
            imageUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
            name={t("team.member3.name")}
            description={t("team.member3.description")}
          />
        </div>

        {/* Meet the Full Team Link */}
        <Link
          to="/about-us#meet-team"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginTop: "2rem",
            cursor: "pointer",
            transition: "transform 0.2s",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform =
              "translateX(5px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.transform =
              "translateX(0)";
          }}
        >
          <span
            style={{
              fontSize: "1.1rem",
              fontWeight: "600",
              color: "#00732F",
            }}
          >
            {t("team.meetFullTeam")}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00732F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default LandingTeam;
