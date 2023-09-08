import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { NavLink } from "react-router-dom";

import { useState } from "react";
import SproutLogo from "../images/sproutlogo.png";

const Header = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <Navbar light color="light" sticky="top" expand="md">
      <NavbarBrand className="ms-5" href="/">
        <img src={SproutLogo} alt="sprout logo" className="float-start" />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/">
              HOME
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="about">
              ABOUT
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="contact">
              CONTACT
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
