import { useState } from "react";
import FacebookContent from "../../components/Facebook/facebookContent";

import InstagramContent from "../../components/Instagram/instagramContent";
import Head from "../../components/Navbar/navbar";
import YoutubeContent from "../../components/Youtube/youtubeContent";

import "./Content.css";

function Content() {
  const [media, setMedia] = useState("");

  return (
    <div className="content">
      <Head />
      <div className="info">
        <form className="social">
          <select
            value={media}
            onChange={(e) => {
              setMedia(e.target.value);
            }}
            name="media"
          >
            <option value="instagram">Instagram</option>
            <option value="youtube">Youtube</option>
            <option value="facebook">Facebook</option>
          </select>
        </form>
        <hr />
        {media === "youtube" ? (
          <YoutubeContent />
        ) : media === "instagram" ? (
          <InstagramContent />
        ) : (
          <FacebookContent />
        )}
      </div>
    </div>
  );
}

export default Content;
