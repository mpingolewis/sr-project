import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
};

export default Header;
