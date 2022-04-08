import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { AnimalForm } from "./animal/AnimalForm"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeForm } from "./employees/EmployeeForm"
import { LocationList } from "./location/LocationList"
import { LocationDetail } from "./location/LocationDetail"
import { LocationForm } from "./location/LocationForm"
import { CustomerList } from "./customer/CusomerList"
import { CustomerForm } from "./customer/CustomerForm"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { AnimalEditForm } from "./animal/AnimalEditForm"
import { EmployeeEditForm } from "./employees/EmployeeEditForm"

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }

    const setAuthUser = (user) => {
        sessionStorage.setItem("kennel_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }

    return (
        <>
            <Routes>
                <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
                <Route exact path="/register" element={<Register />} />

                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route exact path="/animals" element={<PrivateRoute><AnimalList /></PrivateRoute>} />
                <Route path="/animals/details/:animalId" element={<PrivateRoute><AnimalDetail /></PrivateRoute>} />
                <Route path="/animals/create" element={<PrivateRoute><AnimalForm /></PrivateRoute>} />
                <Route path="/animals/:animalId/edit" element={<PrivateRoute><AnimalEditForm /></PrivateRoute>} />

                {/* Locations Route */}
                <Route path="/locations" element={<PrivateRoute><LocationList /></PrivateRoute>} />
                <Route path="/locations/details/:locationId" element={<PrivateRoute><LocationDetail /></PrivateRoute>} />
                <Route path="/locations/create" element={<PrivateRoute><LocationForm /></PrivateRoute>} />

                {/* Customers Route */}
                <Route path="/customers" element={<PrivateRoute><CustomerList /></PrivateRoute>} />
                <Route path="/customers/create" element={<PrivateRoute><CustomerForm /></PrivateRoute>} />

                {/* Employees Route */}
                <Route path="/employees" element={<PrivateRoute><EmployeeList /></PrivateRoute>} />
                <Route path="/employees/create" element={<PrivateRoute><EmployeeForm /></PrivateRoute>} />
                <Route path="/employees/:employeeId/edit" element={<PrivateRoute><EmployeeEditForm /></PrivateRoute>} />
            </Routes>
        </>
    )
}