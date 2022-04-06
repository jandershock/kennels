import "./Animal.css"
import { Link } from "react-router-dom"

export const AnimalCard = ({ animalObj, deleteAnimalFunction }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
              <img src={'/images/dog.svg'} alt="My Dog" />
            </picture>
          <h3>Name: <span className="card-petname">
            {animalObj.name}
          </span></h3>
          <p>Breed: {animalObj.breed}</p>
          <Link to={`/animals/${animalObj.id}`}>
              <button>Details</button>
          </Link>
          <button type="button" onClick={() => deleteAnimalFunction(animalObj.id)}>Discharge</button>
        </div>
      </div>
    );
  }