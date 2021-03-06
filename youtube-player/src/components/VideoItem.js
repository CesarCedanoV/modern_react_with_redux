import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url} 
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
        <div>
          Go to video: <a target="_blank" href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>Click here!</a>
        </div>
      </div>
    </div>
  );
}

export default VideoItem;