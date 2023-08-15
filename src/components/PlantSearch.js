import { useState } from "react";
import { Plants } from "../../src/Plants";
import { Link } from "react-router-dom";

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
    <div
      className="container mx-auto"
      style={{ width: "700px", marginTop: "10rem" }}
    >
      <div className="row text-center mb-2">
        <h3>explore your plant!</h3>
      </div>
      <div className="row justify-content-center">
        <input
          type="text"
          id="searchInput"
          defaultValue=""
          value={searchedPlant}
          className="col form-control"
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

        <button
          onClick={handlesClearAll}
          id="clearBtn"
          className="col col-2 btn btn-light ms-1"
        >
          Clear Result
        </button>
      </div>
      <div>
        {filteredPlants.map((plant) => (
          <ul>
            <li key={plant.id}>{plant.nameOfPlant}</li>
            <Link to={`/plantdetails/${plant.Id}`}>
              <button className="col col-2 btn btn-light ms-1">
                More Info
              </button>
            </Link>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default PlantSearch;
