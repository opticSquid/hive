import { useState } from "react";
import Head from "../components/navbar";
import YoutubeContent from "../components/Youtube/youtubeContent";

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
          </select>
        </form>
        <hr />
        {media === "youtube" ? (
          <YoutubeContent />
        ) : (
          <div>This is instagram</div>
        )}
      </div>
    </div>
  );
}

export default Content;
