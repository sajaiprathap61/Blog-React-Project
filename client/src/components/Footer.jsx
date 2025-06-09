import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer>
      <Link to={`/`}>
        <img src={Logo} alt="" />
      </Link>
      <span>Footer content</span>
    </footer>
  );
};

export default Footer;
