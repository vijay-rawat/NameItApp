import React from "react";
import headerImage from "./../../assets/icon.svg";
import "./Header.css";

const Header = ({ expandedHeader }) => {
  return (
    <div className="head-container">
      <img
        src={headerImage}
        className={`head-image ${
          expandedHeader ? "head-image-expanded" : "head-image-contracted"
        }`}
        alt="header"
      />
      <h1
        className={`head-text ${
          expandedHeader ? "head-text-expanded" : "head-text-contracted"
        }`}
      >
        Name It!
      </h1>
    </div>
  );
};

export default Header;
