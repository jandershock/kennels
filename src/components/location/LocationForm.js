import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { addLocation } from "../../modules/LocationManager";

export const LocationForm = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [location, setLocation] = useState({});

    const handleUpdate = (event) => {
        const newLocation = { ...location };
        newLocation[event.target.id] = event.target.value;
        setLocation(newLocation);
    }
    
    const createNewLocation = () => {
        setIsLoading(true)
        addLocation(location)
            .then(() => {
                navigate("/locations")
            })
    }

    return (
        <>
            <form>
                <h2 className="locationForm__title">New Location</h2>
                <fieldset>
                    <label htmlFor="name">Name:</label>
                    <input onChange={handleUpdate} required placeholder="Name" id="name" className="locationForm__name"></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="address">Address:</label>
                    <input onChange={handleUpdate} required placeholder="Address" id="address" className="locationForm__address"></input>
                </fieldset>
                <button type="button" disabled={isLoading} onClick={createNewLocation}>Create New Location</button>
            </form>
        </>
    )
}