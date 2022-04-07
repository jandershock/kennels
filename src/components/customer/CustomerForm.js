import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { addCustomer } from "../../modules/CustomerManager";

export const CustomerForm = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [owner, setOwner] = useState({})

    const handleUpdate = (event) => {
        const newOwner = { ...owner };
        newOwner[event.target.id] = event.target.value;
        setOwner(newOwner);
    }

    const createNewOwner = () => {
        setIsLoading(true);
        addCustomer(owner)
            .then(() => {
                navigate("/customers");
            })
    }

    return (
        <>
            <form>
                <h2 className="customerForm__title">New Owner</h2>
                <fieldset>
                    <label htmlFor="customerForm__name">Name:</label>
                    <input onChange={handleUpdate} id="name" className="customerForm__name" required placeholder="Name"></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="customerForm__address">Address:</label>
                    <input onChange={handleUpdate} id="address" className="customerForm__name" required placeholder="Address"></input>
                </fieldset>
                <button type="button" disabled={isLoading} onClick={createNewOwner}>Create New Owner</button>
            </form>
        </>
    )
}