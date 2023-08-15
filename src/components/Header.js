import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import SproutLogo from "../images/sproutlogo.png";

const Header = () => {
  return (
    <Navbar light color="light" sticky="top" expand="md">
      <NavbarBrand href="/">
        <img
          src={SproutLogo}
          style={{ width: "100px", heigh: "100px" }}
          alt="sprout logo"
        />
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
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
    </Navbar>
  );
};

export default Header;
