import React from "react";
import { useGetPadding } from "utils/useGetPadding";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  backgroundColor?: string;
  color?: string;
  paddingTop?: string;
  paddingBottom?: string;
  maxWidth?: number | string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  children,
  backgroundColor = "#1a1a1a",
  color = "white",
  paddingTop = "4rem",
  paddingBottom = "4rem",
  maxWidth = 1200,
}) => {
  const padding = useGetPadding();

  return (
    <section
      id={id}
      style={{
        backgroundColor,
        color,
        paddingTop,
        paddingBottom,
        ...padding,
      }}
    >
      <div style={{ maxWidth, margin: "0 auto", textAlign: "center" }}>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
