import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavLink } from "reactstrap";

export default class Header extends Component {
  render() {
    return (
      <Navbar color="primary" light className="mb-3">
        <NavLink>All Todos</NavLink>
        <NavLink>All Posts</NavLink>
        <NavbarBrand className="text-white">React Router</NavbarBrand>
      </Navbar>
    )
  }
}