import { useEffect, useState } from "react"
import { getAllLocations, deleteLocation } from "../../modules/LocationManager"
import { LocationCard } from "../location/LocationCard"

export const LocationList = () => {
    const [locations, setLocations] = useState([])

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
            {locations.map(location => <LocationCard
                key={location.id}
                locationObj={location}
                deleteLocationFunction={deleteLocationFunction}
            />)}
        </>
    )
}