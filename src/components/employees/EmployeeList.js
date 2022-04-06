import { useEffect, useState } from "react"
import { deleteEmployee, getAllEmployees } from "../../modules/EmployeeManager"
import { EmployeeCard } from "./EmployeeCard"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

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
            {employees.map(employee => <EmployeeCard
                key={employee.id}
                employeeObj={employee}
                deleteEmployeeFunction={deleteEmployeeFunction}
            />)}
        </>
    )
}