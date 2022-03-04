import React from "react";
import "./instagramContent.css";
import data from "./instagramData";

export default function InstagramContent() {
  return (
    <div className="instagram-content">
      <div className="instagram-cards">
        {data.map((item) => (
          <div className="instagram-card">
            <img src={item.post} alt="" />
            <div className="instagram-stats">
              <h5>
                <h5>{item.likes}</h5>Likes
              </h5>
              <h5>
                <h5>{item.comments}</h5>Comments
              </h5>
              <h5>
                <h5>{item.saves}</h5>Saves
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
