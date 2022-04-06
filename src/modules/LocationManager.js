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