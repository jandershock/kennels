import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllAnimals, getAnimalById, updateAnimal } from '../../modules/AnimalManager';
import { AnimalCard } from './AnimalCard';

export const AnimalList = () => {
    const [animals, setAnimals] = useState([]);

    const navigate = useNavigate();

    const getAnimals = () => {
        return getAllAnimals()
            .then(animalsFromAPI => {
                console.log(animalsFromAPI);
                let tmp = animalsFromAPI.filter(element => { return !element.isDischarged })
                return tmp
            })
            .then(nonDischargedAnimals => {
                setAnimals(nonDischargedAnimals);
            });
    };

    const updateAnimalFunction = (animalObj) => {
        const dateObj = new Date();
        animalObj.isDischarged = true;
        animalObj.dischargeDate = dateObj.toISOString().split('T')[0];
        return updateAnimal(animalObj)
            .then(() => {
                getAnimals();
            })
    }

    useEffect(() => {
        getAnimals();
    }, []);

    return (
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { navigate("/animals/create") }}>
                    Admit Animal
                </button>
            </section>
            <div className="container-cards">
                {animals.map(animal => <AnimalCard
                    key={animal.id}
                    animalObj={animal}
                    updateAnimalFunction={updateAnimalFunction}
                />)}
            </div>
        </>
    );
};
