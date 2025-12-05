import React from "react";

interface ProfileCardProps {
  imageUrl: string;
  name: string;
  title?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ imageUrl, name, title }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          position: "relative",
          width: 220,
          height: 220,
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
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
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            padding: "0.75rem",
            color: "white",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.5))",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div style={{ fontWeight: 700, lineHeight: 1 }}>{name}</div>
          {title ? (
            <div style={{ fontSize: "0.9rem", opacity: 0.95 }}>{title}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
