import React from "react";
import "./youtubeContent.css";
import ReactPlayer from "react-player";
import data from "./youtubeData";
console.log(data);

function youtubeContent() {
  return (
    <div className="youtube-content">
      <div className="youtube-cards">
        {data.map((item) => (
          <div className="youtube-card">
            <ReactPlayer
              fluid={false}
              width={"13rem"}
              height={"10rem"}
              url={item.video}
            />
            <div className="youtube-stats">
              <h5>
                <h5>{item.likes}</h5>Likes
              </h5>
              <h5>
                <h5>{item.dislikes}</h5>Dislikes
              </h5>
              <h5>
                <h5>{item.views}</h5>Views
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default youtubeContent;
