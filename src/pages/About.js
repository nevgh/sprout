import { Col, Row, Container, Card, CardBody } from "reactstrap";

const About = () => {
  return (
    <Container>
      <Row className="row-content">
        <Col sm="6">
          <h3>Our Mission</h3>
          <p>
            Welcome to our Plants Directory, a haven for plant enthusiasts and
            gardening aficionados! Our mission is to be your ultimate resource
            for all things green and growing. Whether you're a seasoned botanist
            or just starting your journey into the world of plants, we're here
            to provide you with comprehensive information about a vast array of
            plant species. Our website is designed to be a one-stop destination
            for plant lovers seeking knowledge about various plants, their
            characteristics, care guides, and cultivation tips. We believe that
            understanding plants goes beyond just their aesthetics; it's about
            nurturing and fostering a connection with the natural world. Our
            mission is to empower you with the tools and information needed to
            create thriving green spaces, both indoors and outdoors. Explore our
            extensive plant database to discover detailed profiles of different
            plant species, including their origins, growth patterns, sunlight
            and water requirements, and unique features. Our care guides are
            crafted to assist you in every step of your plant parenting journey,
            from selecting the perfect plant for your space to ensuring it
            flourishes through proper care techniques. We're committed to
            fostering a community of plant enthusiasts who can share their
            experiences, tips, and advice. Our platform encourages interactions
            through forums, discussions, and user-generated content, allowing
            you to learn from others who share your passion for plants. At the
            heart of it all, our mission is to help you cultivate not only
            beautiful gardens and lush indoor jungles but also a deeper
            appreciation for the wonders of the botanical world. Join us in
            exploring the fascinating realm of plants, where every leaf tells a
            story and every bloom brings joy.
          </p>
        </Col>
        <Col sm="6">
          <Card>
            <img alt="plants" />
          </Card>
        </Col>
        <Col>
          <Card className="bg-light mt-3">
            <CardBody>
              <blockquote className="blockquote">
                <p>
                  "Sprout: Where Green Dreams Blossom. A digital oasis for plant
                  aficionados, Sprout isn't just a website – it's a verdant
                  escape into the world of botanical wonders. With its vast
                  plant directory, insightful care guides, and thriving
                  community, Sprout is redefining the way we nurture and connect
                  with nature. Whether you're a seasoned gardener or a budding
                  enthusiast, Sprout's mission is to empower you to turn your
                  plant dreams into flourishing realities."
                </p>
                <footer className="blockquote-footer">
                  Larry Daa,
                  <cite title="Source Title">
                    "Green Life Magazine" - Sprout, 2023
                  </cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
