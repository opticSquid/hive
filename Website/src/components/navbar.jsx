import "./navbar.css";
import React, { useState } from "react";
import * as Icon from "react-bootstrap-icons";

function Head() {
  const [display, setDisplay] = useState("false");
  const changeDisplay = () => {
    setDisplay(!display);
  };
  return (
    <div className="head">
      <div className="navbar">
        <div className="logo">
          <h1 className="logo-name">hive</h1>
          <p className="logo-con">Social media, simplified</p>
        </div>
        <div className="pages">
          <a href="./content">Content</a>
          <a href="./analytics">Analytics</a>
          <a href="./promotions">Promotions</a>
        </div>
        <a class="profile" href="./profile">
          Profile
        </a>
        <button onClick={changeDisplay}>
          <Icon.List size={30} color="white" />
        </button>
      </div>
      <div className={"dropdown " + (display ? "no-display" : "display")}>
        <ul>
          <li>
            <a href="./profile">Profile</a>
          </li>
          <li>
            <a href="./content">Content</a>
          </li>
          <li>
            <a href="./analytics">Analytics</a>
          </li>
          <li>
            <a href="./promotions">Promotions</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Head;
