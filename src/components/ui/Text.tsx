import React, { CSSProperties } from "react";

type Variant =
  | "title-h1"
  | "title-h2"
  | "title-h3"
  | "title-h4"
  | "description";

interface TextProps {
  variant: Variant;
  children: React.ReactNode;
  style?: CSSProperties;
  className?: string;
  id?: string;
}

const baseStyles: Record<Variant, CSSProperties> = {
  "title-h1": {
    fontSize: "2.5rem",
    fontWeight: 800,
    margin: 0,
    color: "white",
  },
  "title-h2": {
    fontSize: "2rem",
    fontWeight: 700,
    margin: 0,
    color: "white",
  },
  "title-h3": {
    fontSize: "1.3rem",
    fontWeight: 700,
    margin: 0,
    color: "white",
  },
  "title-h4": {
    fontSize: "1rem",
    fontWeight: 700,
    margin: 0,
    color: "white",
  },
  description: {
    fontSize: "1rem",
    lineHeight: 1.6,
    color: "#cccccc",
    margin: 0,
  },
};

const Text: React.FC<TextProps> = ({
  variant,
  children,
  style,
  className,
  id,
}) => {
  const merged = { ...baseStyles[variant], ...style } as CSSProperties;

  if (variant === "title-h1") {
    return (
      <h1 id={id} style={merged} className={className}>
        {children}
      </h1>
    );
  }

  if (variant === "title-h2") {
    return (
      <h2 id={id} style={merged} className={className}>
        {children}
      </h2>
    );
  }

  if (variant === "title-h3") {
    return (
      <h3 id={id} style={merged} className={className}>
        {children}
      </h3>
    );
  }

  if (variant === "title-h4") {
    return (
      <h4 id={id} style={merged} className={className}>
        {children}
      </h4>
    );
  }

  return (
    <p id={id} style={merged} className={className}>
      {children}
    </p>
  );
};

export default Text;
