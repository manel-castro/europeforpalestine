import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import Button from "./ui/Button";
import BrandLogo from "./ui/BrandLogo";
import { useGetPadding } from "../utils/useGetPadding";
import { useWindowSize } from "../utils/useWindowSize";

const Navbar: React.FC = () => {
  const { t } = useTranslation();

  const { width } = useWindowSize();
  const isPhone = width === 0 ? false : width < 700;
  const horizontalPadding = useGetPadding();

  const rightContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: isPhone ? "column" : "row",
    gap: isPhone ? "0.75rem" : "1rem",
    alignItems: isPhone ? "flex-end" : "center",
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#000000",
        color: "white",
        paddingTop: isPhone ? "2rem" : "1rem",
        paddingBottom: isPhone ? "2rem" : "1rem",
        ...horizontalPadding,
      }}
    >
      <BrandLogo />

      <div style={rightContainerStyle}>
        <LanguageSwitcher style={{}} />
        <Button variant="primary" color="palestine">
          {t("navbar.howToHelp")}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
