import React from "react";
import "./Employee.css"

export const EmployeeCard = ({employeeObj, deleteEmployeeFunction}) => {
    
    return (
    <section className="employee">
        <h3 className="employee__name">{employeeObj.name}</h3>
        <div className="employee__address">{employeeObj.address}</div>
        <button type="button" onClick={() => deleteEmployeeFunction(employeeObj.id)}>Terminate Employee</button>
    </section>
)}