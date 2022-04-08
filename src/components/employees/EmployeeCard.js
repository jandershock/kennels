import React from "react";
import "./Employee.css"

export const EmployeeCard = ({employeeObj, deleteEmployeeFunction}) => {
    
    return (
    <section className="employee">
        <h3 className="employee__name">Name: {employeeObj?.name}</h3>
        <div className="employee__address">Address: {employeeObj?.address}</div>
        <div className="employee__location">Location: {employeeObj?.location.name}</div>
        <button type="button" onClick={() => deleteEmployeeFunction(employeeObj.id)}>Terminate Employee</button>
    </section>
)}