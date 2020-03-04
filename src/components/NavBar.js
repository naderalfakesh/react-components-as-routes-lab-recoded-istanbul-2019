import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">movies</NavLink>
      <NavLink to="/directors">directors</NavLink>
      <NavLink to="/actors ">actors </NavLink>
    </div>
  );
};

export default NavBar;
