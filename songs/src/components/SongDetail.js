import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <div><h2>Select a Song</h2></div>
  }
  return (
    <div>
      <h2>Song Detail</h2>
      <p><strong>Title:</strong> {song.title}</p>
      <p><strong>Duration:</strong> {song.duration}</p>
    </div>
    
  );
};


const mapStateToProps = (state) => {
  return { song: state.selectedSong }
};

export default connect(mapStateToProps) (SongDetail);