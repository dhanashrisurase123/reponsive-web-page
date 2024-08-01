import React from "react";
import "./Navbar.css"; 
import loginBg from "../../assets/loginImage/login-bg-1.svg";
import logo from "../../assets/loginImage/Logo (1).svg";

const Navbar = ({ currentText }) => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <img src={loginBg} alt="Background" className="navbar-bg" />
        <img src={logo} alt="Logo" className="navbar-logo" />
        <span className="navbar-text">{currentText}</span>
      </div>
    </nav>
  );
};

export default Navbar;
