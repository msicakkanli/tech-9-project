// base libraries
import React from 'react';
import PropTypes from 'prop-types';



const Photo = props => (
  <li>
    <img src= {props.photoURL} alt="" />
  </li>
)

Photo.propTypes = {
  photoURL : PropTypes.string.isRequired
}

export default Photo;
