import React from "react";
import { Link } from "react-router-dom";
import "./Customer.css"

export const CustomerCard = ({customerObj, deleteCustomerFunction}) => (
    <section className="customer">
        <h3 className="customer__name">{customerObj.name}</h3>
        <div className="customer__address">{customerObj.address}</div>
        <Link to={`/customers/${customerObj.id}/edit`}>
            <button type="button">Edit</button>
        </Link>
        <button type="button" onClick={() => deleteCustomerFunction(customerObj.id)}>Remove Owner</button>
    </section>
)