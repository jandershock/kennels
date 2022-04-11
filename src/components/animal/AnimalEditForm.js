import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateAnimal, getAnimalById } from "../../modules/AnimalManager"
import { getAllCustomers } from "../../modules/CustomerManager";
import { getAllLocations } from "../../modules/LocationManager";
import "./AnimalForm.css"


export const AnimalEditForm = () => {
    const [animal, setAnimal] = useState({ 
        name: "", 
        breed: "", 
        id: "", 
        locationId: "", 
        customerId: "",
        dateAdmitted: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [customers, setCustomers] = useState([]);
    const [locations, setLocations] = useState([]);

    const { animalId } = useParams();
    const navigate = useNavigate();

    const handleFieldChange = evt => {
        const stateToChange = { ...animal };
        stateToChange[evt.target.id] = evt.target.value;
        setAnimal(stateToChange);
    };

    const updateExistingAnimal = evt => {
        evt.preventDefault()
        setIsLoading(true);

        // default values for locationId and customerId
        // if you already have these components/modules in place, you will need to include the correct information
        const editedAnimal = {
            id: animalId,
            name: animal.name,
            breed: animal.breed,
            locationId: animal.locationId,
            customerId: animal.customerId,
            dateAdmitted: animal.dateAdmitted
        };

        //pass the editedAnimal object to the database
        updateAnimal(editedAnimal)
            .then(() => navigate("/animals")
            )
    }

    useEffect(() => {
        getAnimalById(animalId)
            .then(animal => {
                setAnimal(animal);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        getAllCustomers()
            .then(response => {
                setCustomers(response);
                setIsLoading(false);
            })
    }, [])

    useEffect(() => {
        getAllLocations()
            .then(response => {
                setLocations(response);
                setIsLoading(false);
            })
    }, []);

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="name"
                            value={animal.name}
                        />
                        <label htmlFor="name">Animal name</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="breed"
                            value={animal.breed}
                        />
                        <label htmlFor="breed">Breed</label>

                        {/* Customers */}
                        <select required className="form-control" onChange={handleFieldChange} id="customerId" value={animal.customerId}>
                            {customers.map(customer => (
                                <option key={customer.id} value={customer.id}>{customer.name}</option>
                            ))}
                        </select>
                        <label htmlFor="customerId">Owner</label>

                        {/* Locations */}
                        <select required className="form-control" onChange={handleFieldChange} id="locationId" value={animal.locationId}>
                            {locations.map(location => (
                                <option key={location.id} value={location.id}>{location.name}</option>
                            ))}
                        </select>
                        <label htmlFor="locationId">Location</label>

                        {/* Date */}
                        <input type="date"
                        id="dateAdmitted"
                        className="form-control"
                        onChange={handleFieldChange}
                        value={animal.hasOwnProperty('dateAdmitted') ? animal.dateAdmitted : ""}
                        readOnly={true}></input>
                        <label htmlFor="dateAdmitted">Date Admitted</label>
                        
                    </div>
                    {/* Be sure to include location and customer */}
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingAnimal}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}
