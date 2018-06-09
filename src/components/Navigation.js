import React from 'react';
import NavItem from './NavItem';


const Navigation = (props) => (
  <nav className="main-nav">
    <ul>
      <NavItem url="/cats" name="cats"/>
      <NavItem url="/dogs" name="dogs"/>
      <NavItem url="/computers" name="computers" />
    </ul>
  </nav>
);

export default Navigation;
