import React, { useState, useEffect } from 'react';
import { updateAnimal, getAnimalById } from '../../modules/AnimalManager';
import './AnimalDetail.css';
import { useParams, useNavigate } from "react-router-dom"

export const AnimalDetail = () => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(true);

  const {animalId} = useParams();
  console.log(animalId);
  const navigate = useNavigate();

  const handleUpdate = () => {
    setIsLoading(true);
    return updateAnimal(animal.id)
      .then(() => {
        navigate("/animals");
      })
  }

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", animalId)
    getAnimalById(animalId)
      .then(animal => {
        setAnimal(animal);
        setIsLoading(false);
      });
  }, [animalId]);


  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">Breed: {animal.breed}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div>
      {!animal.isDischarged && <button type="button" disabled={isLoading} onClick={handleUpdate}>Discharge</button>}
      {animal.isDischarged && <>
      <div className="animal__admittedDate">Admitted date: {animal.admittedDate}</div>
      <div className="animal__dischargeDate">Discharge date: {animal.dischargeDate}</div>
      </>}
    </section>
  );
}

