import { Container, Col, Row } from "reactstrap";
import { Twitter, Facebook, Instagram } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs="6" sm="3" className="text-start">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="m-2"
            >
              <Instagram color="white" size={20} className="ml-4" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="m-2"
            >
              <Facebook color="white" size={20} className="ml-4" />
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="m-2"
            >
              <Twitter color="white" size={20} />
            </a>
          </Col>

          <p className="text-center text-white mt-3">© 2023 Sprout Company</p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
