import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateEmployee, getEmployeeById } from "../../modules/EmployeeManager"
import { getAllLocations } from "../../modules/LocationManager";
import "./EmployeeForm.css"


export const EmployeeEditForm = () => {
    const [employee, setEmployee] = useState({ name: "", address: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [locations, setLocations] = useState([]);

    const { employeeId } = useParams();
    const navigate = useNavigate();

    const handleFieldChange = evt => {
        const stateToChange = { ...employee };
        stateToChange[evt.target.id] = evt.target.value;
        setEmployee(stateToChange);
    };

    const updateExistingEmployee = evt => {
        evt.preventDefault()
        setIsLoading(true);

        // default values for locationId and customerId
        // if you already have these components/modules in place, you will need to include the correct information
        const editedEmployee = {
            id: employeeId,
            name: employee.name,
            address: employee.address,
            locationId: employee.locationId,
        };

        //pass the edited employee object to the database
        updateEmployee(editedEmployee)
            .then(() => navigate("/employees")
            )
    }

    // Load specific employee
    useEffect(() => {
        getEmployeeById(employeeId)
            .then(employee => {
                setEmployee(employee);
                setIsLoading(false);
            });
    }, []);

    // Load locations
    useEffect(() => {
        getAllLocations()
            .then(response => {
                setLocations(response);
                setIsLoading(false);
            })
    }, []);

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="name"
                            value={employee.name}
                        />
                        <label htmlFor="name">Employee name</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="address"
                            value={employee.address}
                        />
                        <label htmlFor="address">Address</label>

                        {/* Locations */}
                        <select required className="form-control" onChange={handleFieldChange} id="locationId" value={employee.locationId}>
                            {locations.map(location => (
                                <option value={location.id}>{location.name}</option>
                            ))}
                        </select>
                        <label htmlFor="locationId">Location</label>
                    </div>
                    {/* Be sure to include location and customer */}
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingEmployee}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}
