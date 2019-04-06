import React from 'react';

const VideoDetail = ({video}) => {
  if (!video){
    return <div></div>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`; 

  return (
    <div className="ui segment">
      <div className="ui embed">
        <iframe title="video player" src={videoSrc}></iframe>
      </div>
      <h4 className="ui header">{video.snippet.title}</h4>
      <p>{video.snippet.title}</p>
    </div>
  );
}

export default VideoDetail;