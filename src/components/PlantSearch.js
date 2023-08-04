const PlantSearch = () => {
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
          value=""
          className="col form-control"
          placeholder="search your plant.."
        />
        <button id="searchBtn" className="col col-2 btn btn-light ms-1">
          Search
        </button>
        <button id="clearBtn" className="col col-2 btn btn-light ms-1">
          Clear Result
        </button>
      </div>
    </div>
  );
};

export default PlantSearch;
