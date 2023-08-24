import { Card, CardText, Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import { Plants } from "../Plants";
import {
  DropletFill,
  ThermometerHigh,
  HouseDoorFill,
} from "react-bootstrap-icons";

const PlantDetails = () => {
  const { plantId } = useParams();

  const plant = Plants.find((plant) => plant.Id === parseInt(plantId));
  return (
    <Container>
      <Row>
        <h2 style={{ margin: "5rem auto", color: "white" }}>
          {plant.nameOfPlant}
        </h2>
        <Col>
          <Card
            style={{
              width: "250px",
              height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DropletFill size={50} style={{ color: "#71cb93" }} />
            <CardText style={{ marginTop: "10px" }}>{plant.water}</CardText>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              width: "250px",
              height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ThermometerHigh size={50} style={{ color: "#71cb93" }} />
            <CardText style={{ marginTop: "10px" }}>
              {plant.temperature}
            </CardText>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              width: "250px",
              height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HouseDoorFill size={50} style={{ color: "#71cb93" }} />
            <CardText style={{ marginTop: "10px" }}>
              {plant.indoorOutdoor}
            </CardText>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PlantDetails;
