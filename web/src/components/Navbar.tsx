import React from "react";
import { useTranslation } from "react-i18next";
import Button from "components/ui/Button";
import BrandLogo from "components/ui/BrandLogo";
import { useGetPadding } from "utils/useGetPadding";
import { useWindowSize } from "utils/useWindowSize";

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

  const handleDonateClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("donate");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // If the donate section isn't on the current page, navigate to
      // the homepage with the donate hash so the browser will land
      // on the `#donate` anchor there.
      window.location.assign("/#donate");
    }
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
        <a
          href="#donate"
          onClick={handleDonateClick}
          style={{ textDecoration: "none" }}
        >
          <Button variant="primary" color="palestine">
            {t("buttons.donateNow")}
          </Button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
