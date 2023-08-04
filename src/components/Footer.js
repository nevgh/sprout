import { NavLink } from "reactstrap";
import { Twitter, Facebook, Instagram } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row d-flex border-bottom">
          <div className="col">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram color="white" size={20} className="ml-4" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook color="white" size={20} className="ml-4" />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
              <Twitter color="white" size={20} className="ml-4" />
            </a>

            <div className="col">
              <ul className="nav list-unstyled justify-content-end">
                <li className="nav-item">
                  <NavLink href="about.html" className="nav-link text-white">
                    ABOUT
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    href="../pages/About.js"
                    className="nav-link text-white"
                  >
                    CONTACT
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-muted mt-3">© 2023 Sprout Company</p>
    </footer>
  );
};

export default Footer;
