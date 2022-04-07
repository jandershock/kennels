import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { deleteLocation, getLocationById } from "../../modules/LocationManager";

export const LocationDetail = () => {
    const [location, setLocation] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const {locationId} = useParams();
    const navigate = useNavigate();

    const handleDelete = () => {
        setIsLoading(true)
        deleteLocation(location.id)
            .then(() => {
                navigate("/locations");
            })
    }

    const getLocation = () => {
        return getLocationById(locationId)
            .then(setLocation)
    }

    useEffect(() => {
        getLocation(locationId)
            .then(() => {
                setIsLoading(false);
            })
    }, [locationId])


    return (
        <>
            <h3 className="location__name">Location: {location.name}</h3>
            <div className="location__address">Address: {location.address}</div>
            <button type="button" disabled={isLoading} onClick={handleDelete}>Close Location</button>
        </>
    )
}