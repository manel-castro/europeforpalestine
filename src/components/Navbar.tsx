import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import Button from "./ui/Button";
import BrandLogo from "./ui/BrandLogo";

const Navbar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 4rem",
        backgroundColor: "#000000",
        color: "white",
      }}
    >
      <BrandLogo />
      <LanguageSwitcher />
      <Button variant="primary" color="palestine">
        {t("navbar.howToHelp")}
      </Button>
    </nav>
  );
};

export default Navbar;
