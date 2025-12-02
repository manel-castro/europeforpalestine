import React from "react";

// Color palette for card backgrounds
export const cardColors = {
  dark: "#252525",
  darker: "#1a1a1a",
  black: "#000000",
  light: "#f5f5f5",
  white: "#ffffff",
  transparent: "transparent",
} as const;

export type CardColor = keyof typeof cardColors;

interface CardProps {
  children: React.ReactNode;
  color?: CardColor;
  padding?: string;
  borderRadius?: string;
  style?: React.CSSProperties;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  color = "dark",
  padding = "2rem",
  borderRadius = "12px",
  style,
  className,
}) => {
  const backgroundColor = cardColors[color];

  const cardStyles: React.CSSProperties = {
    backgroundColor,
    padding,
    borderRadius,
    ...style,
  };

  return (
    <div style={cardStyles} className={className}>
      {children}
    </div>
  );
};

export default Card;
