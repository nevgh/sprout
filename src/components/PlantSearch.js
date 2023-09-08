import { useState } from "react";
import { Plants } from "../../src/Plants";
import { Link } from "react-router-dom";
import {
  Container,
  Col,
  Row,
  Card,
  CardImg,
  CardBody,
  CardTitle,
} from "reactstrap";

const PlantSearch = () => {
  const [searchedPlant, setSearchedPlant] = useState("");
  const [filteredPlants, setFilteredPlants] = useState([]);

  const handleInput = (e) => {
    setSearchedPlant(e.target.value);
  };

  const handleSearchBtn = () => {
    const newFilteredPlants = Plants.filter((plant) =>
      plant.nameOfPlant.toLocaleLowerCase().includes(searchedPlant)
    );
    setFilteredPlants(newFilteredPlants);
  };

  const handlesClearAll = () => {
    setSearchedPlant("");
    setFilteredPlants([]);
  };

  return (
    <Container>
      <Col className="row text-center mb-5 mt-5">
        <h3>explore your plant!</h3>
      </Col>
      <Row className="justify-content-center">
        <input
          type="text"
          id="searchInput"
          defaultValue=""
          value={searchedPlant}
          className="col col-6 border-0"
          placeholder="search your plant.."
          onChange={handleInput}
        />

        <button
          id="searchBtn"
          onClick={handleSearchBtn}
          className="col col-2 btn btn-light ms-1"
          disabled={searchedPlant === "" && true}
        >
          Search
        </button>

        {filteredPlants.length > 0 && (
          <button
            onClick={handlesClearAll}
            id="clearBtn"
            className="col col-2 btn btn-light ms-1"
          >
            Clear Result
          </button>
        )}
      </Row>
      <Col>
        {filteredPlants.map((plant) => (
          <Card className="rounded">
            <div className="d-flex">
              <CardImg src={plant.img} className="w-25" />
              <CardBody className="ml-3">
                <CardTitle key={plant.id}>{plant.nameOfPlant}</CardTitle>
              </CardBody>
            </div>
            <Link to={`/plantdetails/${plant.Id}`}>
              <button className="col col-2 btn btn-light ms-1 mt-2">
                More Info
              </button>
            </Link>
          </Card>
        ))}
      </Col>
    </Container>
  );
};

export default PlantSearch;
