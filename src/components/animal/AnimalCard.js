import "./Animal.css"
import { Link } from "react-router-dom"

export const AnimalCard = ({ animalObj, updateAnimalFunction }) => {
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
        {animalObj.isDischarged && <>
          <div className="admitInfo">
            <p>Admitted date: {animalObj.dateAdmitted}</p>
            <button>Edit Admit Date</button>
          </div>
          <div className="dischargeInfo">
            <p>Discharge date: {animalObj.dischargeDate}</p>
            <button>Edit Discharge Date</button>
          </div>
        </>}
        <Link to={`/animals/details/${animalObj.id}`}>
          <button>Details</button>
        </Link>
        <Link to={`/animals/${animalObj.id}/edit`}>
          <button>Edit</button>
        </Link>
        {!animalObj.isDischarged && <button type="button" onClick={() => updateAnimalFunction(animalObj)}>Discharge</button>}
      </div>
    </div>
  );
}