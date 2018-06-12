import React from 'react';
import NotFound from './NotFound';
import PhotoItem from './PhotoItem';

const PhotoList = ({photos}) => {

  let photoItems = photos.map(photo => {
    const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
    const key = photo.id
    return <PhotoItem url={url} key={key}/>;
  });

  return(
    <ul>
      {
        (photos.length > 0) ? photoItems : <NotFound/>
      }
    </ul>
  );
};


export default PhotoList;
