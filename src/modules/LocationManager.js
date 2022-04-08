const remoteURL = 'http://localhost:8088';

export const getLocationById = (locationId) => {
    return fetch(`${remoteURL}/locations/${locationId}`)
        .then(response => response.json());
}

export const getAllLocations = () => {
    return fetch(`${remoteURL}/locations`)
        .then(response => response.json());
}

export const deleteLocation = (locationId) => {
    return fetch(`${remoteURL}/locations/${locationId}`, {
        method: "DELETE"
    })
        .then(response => response.json())
}

export const addLocation = (locationObj) => {
    return fetch(`${remoteURL}/locations`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(locationObj)
    })
        .then(response => response.json())
}

export const updateLocation = (locationObj) => {
    return fetch(`${remoteURL}/locations/${locationObj.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(locationObj)
    })
        .then(response => response.json())
}