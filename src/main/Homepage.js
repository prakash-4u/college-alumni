import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

function Homepage() {
  const logo = require("./images/logo.jpg");
  return (
    <div className="main_section">
      <div className="nav">
        <div className="a">
          <h1 align="center">
            <img src={logo} alt="" height="100px" align="left" />
            SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY
          </h1>
        </div>
        <ul>
          <Link to="/">
            <span>ABOUT</span>
          </Link>
          <Link to="/">
            <span>CONTACT US</span>
          </Link>
          <Link to="/departments">
            <span>DEPARTMENTS</span>
          </Link>
          <Link to="/">
            <span>GALLERY</span>
          </Link>
        </ul>
      </div>
      <div className="ab">
        <h2 style={{ color: "white", textShadow: "2px 2px #000000" }}>
          ALUMNI PORTAL
        </h2>
      </div>
    </div>
  );
}

export default Homepage;
