const remoteURL = "http://localhost:8088"

export const getEmployeeById = (employeeId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/employees/${employeeId}?_expand=location`)
    .then(res => res.json())
}

export const getAllEmployees = () => {
  return fetch(`${remoteURL}/employees`)
    .then(res => res.json())
}

export const deleteEmployee = (employeeId) => {
  return fetch(`${remoteURL}/employees/${employeeId}`, {
    method: "DELETE"
  })
    .then(response => response.json())
}

export const addEmployee = (employeeObj) => {
  return fetch(`${remoteURL}/employees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(employeeObj)
  })
    .then(response => response.json())
}