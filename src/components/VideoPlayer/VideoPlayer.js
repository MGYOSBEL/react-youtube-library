import React from "react";

const videoPlayer = (props) => (
    <div className="relative w-full overflow-hidden Aspect-ratio-16-9">
        <iframe
          className="absolute top-0 bottom-0 right-0 left-0 w-full h-full"
          id="ytplayer" title="youtube-player"
          type="text/html" 
          src="https://www.youtube.com/embed/VlFDlpP_cGc"
          frameBorder="0"
        ></iframe>
    </div>
);

export default videoPlayer;
