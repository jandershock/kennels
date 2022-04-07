import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllLocations, deleteLocation } from "../../modules/LocationManager"
import { LocationCard } from "../location/LocationCard"

export const LocationList = () => {
    const [locations, setLocations] = useState([])
    const navigate = useNavigate()

    const getLocations = () => {
        return getAllLocations()
            .then(locations => {
                setLocations(locations);
            })
    }

    const deleteLocationFunction = (locationId) => {
        return deleteLocation(locationId)
            .then(() => {
                getLocations();
            })
    }

    useEffect(() => {
        getLocations()
    }, []);

    return (
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { navigate("/locations/create") }}>
                    New Location
                </button>
            </section>
            {locations.map(location => <LocationCard
                key={location.id}
                locationObj={location}
                deleteLocationFunction={deleteLocationFunction}
            />)}
        </>
    )
}