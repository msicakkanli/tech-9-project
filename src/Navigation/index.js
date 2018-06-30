// base libraries
import React from 'react';
import { NavLink }  from 'react-router-dom';
import PropTypes from 'prop-types';

const Navigation = props => (
  <nav className="main-nav">
    <ul>
      <li><NavLink  onClick={props.handleNav} to='/cats'>Cats</NavLink></li>
      <li><NavLink  onClick={props.handleNav} to='/dogs'>Dogs</NavLink></li>
      <li><NavLink  onClick={props.handleNav} to='/computer'>Computer</NavLink></li>
    </ul>
  </nav>
)

Navigation.propTypes = {
  handleNav : PropTypes.func.isRequired
}


export default Navigation;
