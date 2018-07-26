import React from 'react';

const VideoListItem = (props) => {
    const video = props.video;
    return (
        <li>
            <div>
                <span>Title: {video.snippet.title}</span>
                <br/>
                <p>Go to video: <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>Click here!</a>
                </p>
            </div>
        </li>
    );
}

export default VideoListItem;