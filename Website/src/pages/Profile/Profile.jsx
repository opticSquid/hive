import React from "react";
import Head from "../../components/Navbar/navbar";

import graph from "../../assests/images/chart.svg";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-page">
      <Head />
      <div className="banner">
        <div></div>
      </div>
      <div className="profile-content">
        <h1>John Doe</h1>
        <h4>johndoe@gmail.com</h4>
        <div className="flex">
          <div>
            <h2>Social handles connected</h2>
            <h4>Facebook</h4>
            <h4>Instagram</h4>
            <h4>Youtube</h4>
          </div>
          <br />
          <div>
            <h2>Content Reach</h2>
            <img src={graph} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
