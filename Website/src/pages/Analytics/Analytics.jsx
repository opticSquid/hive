import { useState } from "react";
import InstagramAnalytics from "../../components/Instagram/instagramAnalytics";
import Head from "../../components/Navbar/navbar";
import YoutubeAnalytics from "../../components/Youtube/youtubeAnalytics";

import "./Analytics.css";

function Analytics() {
  const [media, setMedia] = useState("");

  return (
    <div className="analytic">
      <Head />
      <div className="info">
        <form className="ana-social">
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
        {media === "youtube" ? <YoutubeAnalytics /> : <InstagramAnalytics />}
      </div>
    </div>
  );
}

export default Analytics;
