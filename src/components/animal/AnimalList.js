import React, { useEffect, useState } from 'react';
import { getAllAnimals, getAnimalById, deleteAnimal } from '../../modules/AnimalManager';
import { AnimalCard } from './AnimalCard';

export const AnimalList = () => {
    const [animals, setAnimals] = useState([]);

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
        <div className="container-cards">
            {animals.map(animal => <AnimalCard
                key={animal.id}
                animalObj={animal}
                deleteAnimalFunction={deleteAnimalFunction}
            />)}
        </div>
    );
};
