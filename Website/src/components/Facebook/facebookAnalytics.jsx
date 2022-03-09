import React from "react";
import "../Instagram/instagramAnalytics.css";
import up from "../../assests/images/up.svg";
import down from "../../assests/images/down.svg";
import chart from "../../assests/images/chart.svg";

function FacebookAnalytics() {
  return (
    <div className="instagram-analytic">
      <h1>Your account insights</h1>
      <div className="yt-ana-stats">
        <div className="likes">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.5rem"
            fill="currentColor"
            class="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
          <h1>
            -34k <h2>Likes</h2>
          </h1>
          <img src={up} alt="" />
        </div>
        <div className="comments">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.5rem"
            fill="currentColor"
            class="bi bi-chat-left-text"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
          </svg>
          <h1>
            +654 <h2>Comments</h2>
          </h1>
          <img src={down} alt="" />
        </div>
        <div className="subscribe">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.5rem"
            fill="currentColor"
            class="bi bi-people-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            <path
              fill-rule="evenodd"
              d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
            />
            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
          </svg>
          <h1>
            +76k <h2>Followers</h2>
          </h1>
          <img src={up} alt="" />
        </div>
        <div className="shares">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.5rem"
            fill="currentColor"
            class="bi bi-graph-up-arrow"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
            />
          </svg>
          <h1>
            +83k <h2>Shares</h2>
          </h1>
          <img src={up} alt="" />
        </div>
      </div>
      <h1>your followers last week</h1>
      <div className="ig-ana-graph">
        <img src={chart} alt="chart" />
      </div>
    </div>
  );
}

export default FacebookAnalytics;
