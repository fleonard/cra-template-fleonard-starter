import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import  {  StyledNav, NavItem  } from "./StyledNav";


const Nav: React.FC = () => {
  return (
    <Fragment>
      <StyledNav>
        <NavItem component="li">
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem component="li">
          <NavLink to="/about">About</NavLink>
        </NavItem>
      </StyledNav>
    </Fragment>
  );
};

export  default Nav;
