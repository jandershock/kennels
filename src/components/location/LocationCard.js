import React from "react"
import "./Location.css"

export const LocationCard = ({locationObj, deleteLocationFunction}) => (
    <section className="location">
        <h3 className="location__name">{locationObj.name}</h3>
        <h3 className="location__address">{locationObj.address}</h3>
        <button type="button" onClick={() => deleteLocationFunction(locationObj.id)}>Close Location</button>
    </section>
)