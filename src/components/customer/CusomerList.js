import { useEffect, useState } from "react"
import { getAllCustomers, deleteCustomer } from "../../modules/CustomerManager"
import { CustomerCard } from "./CustomerCard"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    const getCustomers = () => {
        getAllCustomers()
            .then(customers => {
                console.log(customers);
                setCustomers(customers)
            })
    }

    const deleteCustomerFunction = (customerId) => {
        return deleteCustomer(customerId)
            .then(() => {
                getCustomers();
            })
    }

    useEffect(() => {
        getCustomers()
    }, [])

    return (
        <>
            {customers.map(customer => <CustomerCard
                key={customer.id}
                customerObj={customer}
                deleteCustomerFunction = {deleteCustomerFunction}
            />)}
        </>
    )
}