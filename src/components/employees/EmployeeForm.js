import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../../modules/EmployeeManager";
import { getAllLocations } from "../../modules/LocationManager";

export const EmployeeForm = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [locations, setLocations] = useState([]);
    const [employee, setEmployee] = useState({
        name: "",
        address: "",
        locationId: 0
    })

    const handleControlledInputChange = (event) => {
        let newEmployee = { ...employee };

        newEmployee[event.target.id] = event.target.value;
        setEmployee(newEmployee);
    }

    const handleClickSaveEmployee = () => {
        setIsLoading(true);
        const locationId = employee.locationId

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addEmployee(employee)
                .then(() => {
                    navigate("/employees");
                })
        }
        setIsLoading(false);
    }

    useEffect(() => {
        setIsLoading(true);
        getAllLocations()
            .then(response => {
                setLocations(response);
                setIsLoading(false);
            })
    }, [])

    return (
        <>
            <form className="employeeForm">
                <h2 className="employeeForm__title">New Employee</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Employee name:</label>
                        <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="name">Employee address:</label>
                        <input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee address" value={employee.address} />
                    </div>
                </fieldset>
                <fieldset>
                    <label htmlFor="locationId">Assign to Location:</label>
                    <select onChange={handleControlledInputChange} required id="locationId">
                        <option value={0}>Select a Location</option>
                        {locations.map(location => (
                            <option key={location.id} value={location.id}>{location.name}</option>
                        ))}
                    </select>
                </fieldset>
                <button type="button" disabled={isLoading} className="btn btn-primary"
                    onClick={handleClickSaveEmployee}>
                    Save Employee
                </button>
            </form>
        </>
    )
}