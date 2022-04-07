import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllAnimals, getAnimalById, deleteAnimal } from '../../modules/AnimalManager';
import { AnimalCard } from './AnimalCard';

export const AnimalList = () => {
    const [animals, setAnimals] = useState([]);

    const navigate = useNavigate();

    const getAnimals = () => {
        return getAllAnimals().then(animalsFromAPI => {
            // We'll do something more interesting with this data soon.
            console.log(animalsFromAPI);
            setAnimals(animalsFromAPI)
        });
    };

    const deleteAnimalFunction = (animalId) => {
        return deleteAnimal(animalId)
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
                    deleteAnimalFunction={deleteAnimalFunction}
                />)}
            </div>
        </>
    );
};
