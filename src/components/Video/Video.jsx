import React from "react";
import trailer from "../media/trailer.mp4";
import "./video.css";
import "vidstack/styles/defaults.css";
import "vidstack/styles/community-skin/video.css";

import {
  MediaCommunitySkin,
  MediaOutlet,
  MediaPlayer,
  MediaPoster,
} from "@vidstack/react";

const CustomVideo = () => {
  return (
    <div className="vid_container">
      {/* <h1 className="custom__h1">Trailer</h1> */}
      <MediaPlayer
        title="All that's left to me"
        src={trailer}
        // poster="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/thumbnail.webp?time=268&width=980"
        aspectRatio={16 / 9}
        crossorigin=""
      >
        <MediaOutlet>
          <MediaPoster alt="All That's Left To Me Trailer" />
        </MediaOutlet>
        <MediaCommunitySkin />
      </MediaPlayer>
    </div>
  );
};

export default CustomVideo;
