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
  CardImgOverlay,
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

      <Col
        style={{
          width: "500px",
          margin: "1rem auto",
        }}
      >
        {filteredPlants.map((plant) => (
          <Card inverse className="square bg-light rounded mb-2">
            <CardImg src={plant.img} style={{ height: 270 }} />
            <CardImgOverlay>
              <CardTitle
                key={plant.id}
                style={{ fontSize: "2rem", backdropFilter: "blur(20px)" }}
              >
                {plant.nameOfPlant}
              </CardTitle>
              <Link to={`/plantdetails/${plant.Id}`}>
                <button className="btn btn-light ms-1 mt-2">More Info</button>
              </Link>
            </CardImgOverlay>
          </Card>
        ))}
      </Col>
    </Container>
  );
};

export default PlantSearch;
