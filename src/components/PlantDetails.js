import { Card, CardText, Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import { Plants } from "../Plants";

const PlantDetails = () => {
  const { plantId } = useParams();

  const plant = Plants.find((plant) => plant.Id === parseInt(plantId));
  return (
    <Container>
      <Row>
        <h1>{plant.nameOfPlant}</h1>
        <Col>
          <Card>
            <CardText> water: {plant.water}</CardText>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardText>temperature: {plant.temperature}</CardText>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardText>placement: {plant.indoorOutdoor}</CardText>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PlantDetails;
