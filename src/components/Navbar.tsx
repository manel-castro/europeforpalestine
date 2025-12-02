import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <div>LOGO</div>
      <div></div>
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          borderRadius: "50px",
          padding: "0.75rem 1.5rem",
          border: "none",
          cursor: "pointer",
        }}
      >
        How to help?
      </button>
    </nav>
  );
};

export default Navbar;
