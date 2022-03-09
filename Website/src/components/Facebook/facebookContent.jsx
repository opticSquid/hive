import React from "react";
import "../Instagram/instagramContent.css";
import data from "./facebookData";

export default function FacebookContent() {
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
                <h5>{item.shares}</h5>Shares
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
