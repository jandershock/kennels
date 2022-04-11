import { useEffect, useState } from "react"
import { getAllAnimals } from "../../modules/AnimalManager"
import { AnimalCard } from "./AnimalCard"

export const AnimalDischargedList = () => {
    const [dischargedAnimals, setDischargedAnimals] = useState([])

    useEffect(() => {
        getAllAnimals()
        .then(animals => {
            return animals.filter(element => { return element.isDischarged});
        })
        .then(filterdAnimals => {
            setDischargedAnimals(filterdAnimals);
        })
    }, [])


    return (
        <>
            <div className="container-cards">
                {dischargedAnimals.map(animal => <AnimalCard
                    key={animal.id}
                    animalObj={animal}
                />)}
            </div>
        </>
    )
}