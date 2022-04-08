import React from "react"
import { Link } from "react-router-dom"
import "./Location.css"

export const LocationCard = ({ locationObj, deleteLocationFunction }) => (
    <section className="location">
        <h3 className="location__name">{locationObj.name}</h3>
        <h3 className="location__address">{locationObj.address}</h3>
        <Link to={`/locations/details/${locationObj.id}`}>
            <button type="button">Details</button>
        </Link>
        <Link to={`/locations/${locationObj.id}/edit`}>
            <button type="button">Edit</button>
        </Link>
        <button type="button" onClick={() => deleteLocationFunction(locationObj.id)}>Close Location</button>
    </section>
)