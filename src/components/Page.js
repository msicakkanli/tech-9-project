import React from 'react';
import { withRouter } from 'react-router-dom';

import PhotoList from './PhotoList';
import Navigation from './Navigation';
import SearchForm from './SearchForm';

const Page = ({title, pageName, getPhotos, changePageName, history, photos, fetchPhotos}) => {

  if((title !== pageName) && title !== "Search") {
    getPhotos(pageName, title);
    changePageName(title);
  }

  return(
    <div className="container">
      <SearchForm history={history} onSearch={term => fetchPhotos(term)}/>
      <Navigation/>
      <div className="photo-container">
        { title !== "Search" && <h2>{title}</h2>}
        <PhotoList photos={photos} />
      </div>
    </div>
  );
}

export default withRouter(Page);
