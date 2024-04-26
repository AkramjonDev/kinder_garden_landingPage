import YouTube from "react-youtube";
import "../globals.css";

const YoutubeVideo = ({ videoId }) => {
  const opts = {
    width: "100%",
    height: "100%",
  };

  return (
    <div className="video-container">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default YoutubeVideo;
