import React from "react";
import { useIsWidthLessThan } from "utils/useWindowSize";

// Color palette
export const colors = {
  palestine: "#00732F", // Green from Palestinian flag
  palestineRed: "#CE1126", // Red from Palestinian flag
  palestineBlack: "#000000", // Black from Palestinian flag
  palestineWhite: "#FFFFFF", // White from Palestinian flag
  green: "#00732F",
  red: "#CE1126",
  blue: "#007BFF",
  gray: "#6C757D",
  dark: "#343A40",
  light: "#F8F9FA",
} as const;

export type ButtonColor = keyof typeof colors;

export type ButtonVariant = "primary" | "secondary" | "outline" | "text";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  children: React.ReactNode;
  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  color = "palestine",
  children,
  fullWidth = false,
  size = "medium",
  style,
  ...props
}) => {
  const baseColor = colors[color];

  const isPhone = useIsWidthLessThan(700);

  // Size configurations
  const sizes = {
    small: {
      padding: "0.5rem 1rem",
      fontSize: "0.875rem",
    },
    medium: {
      padding: "0.75rem 1.5rem",
      fontSize: "1rem",
    },
    large: {
      padding: "1rem 2rem",
      fontSize: "1.125rem",
    },
  };

  // Variant styles
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case "primary":
        return {
          backgroundColor: baseColor,
          color: "white",
          border: "none",
        };
      case "secondary":
        return {
          backgroundColor: "transparent",
          color: baseColor,
          border: `2px solid ${baseColor}`,
        };
      case "outline":
        return {
          backgroundColor: "white",
          color: baseColor,
          border: `1px solid ${baseColor}`,
        };
      case "text":
        return {
          backgroundColor: "transparent",
          color: baseColor,
          border: "none",
        };
      default:
        return {};
    }
  };

  const resolvedSizeKey = (() => {
    // on phone, increase size: small->medium, medium->large, large->large
    if (!isPhone) return size;
    if (size === "small") return "medium" as const;
    return "large" as const;
  })();

  const buttonStyles: React.CSSProperties = {
    ...getVariantStyles(),
    borderRadius: "50px",
    cursor: "pointer",
    fontWeight: 500,
    transition: "all 0.3s ease",
    width: fullWidth ? "100%" : "auto",
    ...sizes[resolvedSizeKey],
    ...style,
  };

  return (
    <button style={buttonStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
