import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavLink,
  NavbarToggler,
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
        <NavbarBrand className="text-white">React Router</NavbarBrand>
        {/* <NavbarToggler onClick={this.toggle} /> */}
        <Nav className="ml-auto" navBar>
          <UncontrolledDropdown nav inNavBar>
            <DropdownToggle className="text-white" nav caret>
              View All
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavItem>
                  <NavLink href="#">All Todos</NavLink>
                </NavItem>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <NavItem>
                  <NavLink href="#">All Posts</NavLink>
                </NavItem>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
    );
  }
}
