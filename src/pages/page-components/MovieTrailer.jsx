import ReactPlayer from "react-player";

const MovieTrailer = ({ trailerKey }) => {
  return (
    <div className="h-[450px] w-[80%] mx-auto">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${trailerKey}`}
        width="100%"
        height="100%"
        controls
      />
    </div>
  );
};

export default MovieTrailer;
