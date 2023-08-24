import { Container, Col, Row } from "reactstrap";
import { Twitter, Facebook, Instagram } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="footer d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <Container>
        <Row>
          <Col className="col-md-4 d-flex align-items-center text-white">
            <span>© 2023 Sprout Company</span>
          </Col>
          <Col className="md-4 justify-content-end d-flex">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="ms-3"
            >
              <Instagram color="white" size={20} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="ms-3"
            >
              <Facebook color="white" size={20} />
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="ms-3"
            >
              <Twitter color="white" size={20} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
