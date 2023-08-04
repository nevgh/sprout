import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
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
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="../pages/About.js">ABOUT</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">
              GitHub
            </NavLink>
          </NavItem>
        </Nav>
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
