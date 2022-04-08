import React from "react";
import { Link } from "react-router-dom";
import "./Employee.css"

export const EmployeeCard = ({ employeeObj, deleteEmployeeFunction }) => {

    return (
        <section className="employee">
            <h3 className="employee__name">Name: {employeeObj?.name}</h3>
            <div className="employee__address">Address: {employeeObj?.address}</div>
            <div className="employee__location">Location: {employeeObj?.location.name}</div>
            <Link to={`/employees/${employeeObj.id}/edit`}>
                <button type="button">Edit Employee</button>
            </Link>
            <button type="button" onClick={() => deleteEmployeeFunction(employeeObj.id)}>Terminate Employee</button>
        </section>
    )
}