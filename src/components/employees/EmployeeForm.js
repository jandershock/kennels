import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../../modules/EmployeeManager";

export const EmployeeForm = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [employee, setEmployee] = useState({
        name: "",
        address: ""
    })

    const handleControlledInputChange = (event) => {
        let newEmployee = { ...employee };

        newEmployee[event.target.id] = event.target.value;
        setEmployee(newEmployee);
    }

    const handleClickSaveEmployee = () => {
        setIsLoading(true);
        addEmployee(employee)
            .then(() => {
                navigate("/employees");
            })
    }

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
                <button type="button" disabled={isLoading} className="btn btn-primary"
                    onClick={handleClickSaveEmployee}>
                    Save Employee
                </button>
            </form>
        </>
    )
}