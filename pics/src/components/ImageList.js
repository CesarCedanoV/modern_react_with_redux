import React from 'react';

const ImageList = (props) => {
  const images = props.images.map(({id, description, urls,}) => {
    return <img key={id} alt={description} src={urls.thumb} />
  });

  return <div>ImageList {images}</div>;
};

export default ImageList