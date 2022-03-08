import React from "react";
import "./youtubeAnalytics.css";
import up from "../../assests/images/up.svg";
import down from "../../assests/images/down.svg";
import chart from "../../assests/images/chart.svg";
import "bootstrap-icons/font/bootstrap-icons.css";

function YoutubeAnalytics() {
  return (
    <div className="youtube-analytic">
      <h1>Your account insights</h1>
      <div className="yt-ana-stats">
        <div className="likes">
          <i class="bi bi-heart"></i>
          <h1>
            +13.1k <h2>Likes</h2>
          </h1>
          <img src={up} alt="" />
        </div>
        <div className="comments">
          <i class="bi bi-chat-left-text"></i>
          <h1>
            -904 <h2>Comments</h2>
          </h1>
          <img src={down} alt="" />
        </div>
        <div className="subscribe">
          <i class="bi bi-people-fill"></i>
          <h1>
            +840 <h2>Subscribers</h2>
          </h1>
          <img src={up} alt="" />
        </div>
        <div className="shares">
          <i class="bi bi-graph-up-arrow"></i>
          <h1>
            +121 <h2>Shares</h2>
          </h1>
          <img src={up} alt="" />
        </div>
      </div>
      <h1>your followers last week</h1>
      <div className="yt-ana-graph">
        <img src={chart} alt="chart" />
      </div>
    </div>
  );
}

export default YoutubeAnalytics;
