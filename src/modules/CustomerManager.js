const remoteURL = "http://localhost:8088"

export const getCustomerById = (customerId) => {
    return fetch(`${remoteURL}/customers/${customerId}`)
        .then(response => response.json())
}

export const getAllCustomers = () => {
    return fetch(`${remoteURL}/customers`)
        .then(response => response.json())
}

export const deleteCustomer = customerId => {
    return fetch(`${remoteURL}/customers/${customerId}`, {
        method: "DELETE"
    })
        .then(response => response.json())
}