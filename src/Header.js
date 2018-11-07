import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavLink,
  NavItem,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from "reactstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="primary" light>
        <NavbarBrand><NavLink className="text-white" href="/">React Router</NavLink></NavbarBrand>
        {/* <NavbarToggler onClick={this.toggle} /> */}
        <Nav className="ml-auto">
          <UncontrolledDropdown>
            <DropdownToggle className="text-white" nav caret>
              View All
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavItem>
                  <NavLink href="/todos">All Todos</NavLink>
                </NavItem>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <NavItem>
                  <NavLink href="/posts">All Posts</NavLink>
                </NavItem>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
    );
  }
}
