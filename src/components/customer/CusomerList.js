import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllCustomers, deleteCustomer } from "../../modules/CustomerManager"
import { CustomerCard } from "./CustomerCard"

export const CustomerList = () => {
    const navigate = useNavigate();
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
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { navigate("/customers/create") }}>
                    New Owner
                </button>
            </section>
            {customers.map(customer => <CustomerCard
                key={customer.id}
                customerObj={customer}
                deleteCustomerFunction = {deleteCustomerFunction}
            />)}
        </>
    )
}