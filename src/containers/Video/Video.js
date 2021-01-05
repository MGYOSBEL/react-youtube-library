import React, { Component } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import InputUrl from "../../components/UI/InputUrl/InputUrl";
import FavoriteVideoToggler from "../../components/FavoriteVideoToggler/FavoriteVideoToggler";

class Video extends Component {
  state = {};

  render() {
    return (
      <div className="w-full flex flex-col">
        <div className="flex flex-row-reverse relative w-full">
          <InputUrl placeholder="Enter video URL" className="w-full absolute" />
          <FavoriteVideoToggler className="p-0 absolute right-0.5 -top-2" />
        </div>
        <VideoPlayer />
      </div>
    );
  }
}

export default Video;
