
import React from 'react';
import PropTypes from 'prop-types';

import NotFound from './NotFound';
import Photo from './Photo';


const SubContainer = props => (

  <div className="photo-container">
    <h2>{props.searchedTerm}</h2>

    <ul>
      {
         (props.searchItems.length <= 0)
         ? <NotFound />
         :
        props.searchItems
        .map((item) =>
          <Photo
            // Set key to items unique photo id
            key = {item.id}

            // Format for flickr url calls:
            // https://farm{farm}.staticflickr.com/{server}/{id}_{secret}_{size}.jpg
            photoURL = {"https://farm" +
                        item.farm +
                        ".staticflickr.com/" +
                        item.server +
                        "/" +
                        item.id +
                        "_" +
                        item.secret +
                        "_m.jpg"}
           />
        )
      }

    </ul>
  </div>
)

SubContainer.propTypes = {
  searchItems : PropTypes.array.isRequired,
  searchedTerm : PropTypes.string.isRequired,
  isLoading : PropTypes.bool
}

export default SubContainer;
