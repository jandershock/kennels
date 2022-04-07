import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { deleteEmployee, getAllEmployees } from "../../modules/EmployeeManager"
import { EmployeeCard } from "./EmployeeCard"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    const navigate = useNavigate();

    const getEmployees = () => {
        return getAllEmployees()
            .then(employees => {
                console.log(employees);
                setEmployees(employees);
            })
    }

    const deleteEmployeeFunction = (employeeId) => {
        return deleteEmployee(employeeId)
            .then(() => {
                getEmployees();
            })
    }

    useEffect(() => {
        getEmployees()
    }, [])

    return (
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { navigate("/employees/create") }}>
                    New Employee
                </button>
            </section>
            {employees.map(employee => <EmployeeCard
                key={employee.id}
                employeeObj={employee}
                deleteEmployeeFunction={deleteEmployeeFunction}
            />)}
        </>
    )
}