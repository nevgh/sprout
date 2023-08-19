import { Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";
import leaf from "../images/green-leaf.png";

const About = () => {
  return (
    <div>
      <img
        src={leaf}
        alt="leaf"
        style={{ width: "100px", height: "100px", margin: "30px" }}
      />
      <img
        src={leaf}
        alt="leaf"
        style={{ width: "100px", height: "100px", margin: "30px" }}
      />
      <img
        src={leaf}
        alt="leaf"
        style={{ width: "100px", height: "100px", margin: "30px" }}
      />

      <Card
        className="bg-light mt-3"
        style={{ width: "50%", margin: "0 auto", padding: "2rem" }}
      >
        <CardTitle>Our Mission</CardTitle>
        <CardBody>
          <CardText>
            Welcome to our Plants Directory, a haven for plant enthusiasts and
            gardening aficionados! Our mission is to be your ultimate resource
            for all things green and growing. Whether you're a seasoned botanist
            or just starting your journey into the world of plants, we're here
            to provide you with comprehensive information about a vast array of
            plant species. Our website is designed to be a one-stop destination
            for plant lovers seeking knowledge about various plants, their
            characteristics, care guides, and cultivation tips.
          </CardText>
          <CardText>
            We believe that understanding plants goes beyond just their
            aesthetics; it's about nurturing and fostering a connection with the
            natural world. Our mission is to empower you with the tools and
            information needed to create thriving green spaces, both indoors and
            outdoors. Explore our extensive plant database to discover detailed
            profiles of different plant species, including their origins, growth
            patterns, sunlight and water requirements, and unique features. Our
            care guides are crafted to assist you in every step of your plant
            parenting journey, from selecting the perfect plant for your space
            to ensuring it flourishes through proper care techniques.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default About;
