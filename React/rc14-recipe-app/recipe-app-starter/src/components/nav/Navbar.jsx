import React from "react";
import { Link } from "react-router-dom";
import Nav, { Brand, Menu, MenuLink, Hamburger } from "./Navbar.style";
import GiHamburgerMenu from "react-icons/gi";

const Navbar = () => {
  return (
    <Nav justify="space-between" wrap="wrap">
      <Brand to="/">
        <i>{"<Clarusway/>"}</i>
        <span>Recipe</span>
      </Brand>
      <Hamburger>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="register">Register</MenuLink>
        <MenuLink to="logout">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
