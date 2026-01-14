import React, { CSSProperties } from "react";

interface Props {
  children: React.ReactNode;
  gap?: string | number;
  style?: CSSProperties;
}

const ProfileCardsContainer: React.FC<Props> = ({
  children,
  gap = "2rem",
  style,
}) => {
  return (
    <div
      style={{
        display: "flex",
        gap,
        flexWrap: "wrap",
        justifyContent: "center",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default ProfileCardsContainer;
