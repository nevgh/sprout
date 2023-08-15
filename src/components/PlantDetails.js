import { useParams } from "react-router-dom";
import { Plants } from "../Plants";

const PlantDetails = () => {
  const { plantId } = useParams();

  const plant = Plants.find((plant) => plant.Id === parseInt(plantId));
  return (
    <div>
      <h1>{plant.nameOfPlant}</h1>
      <p> water: {plant.water}</p>
      <p>temperature: {plant.temperature}</p>
      <p>placement: {plant.indoorOutdoor}</p>
    </div>
  );
};

export default PlantDetails;
