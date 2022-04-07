import React from "react"
import { Route, Routes } from "react-router-dom"
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

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route exact path="/animals" element={<AnimalList />} />
                <Route path="/animals/details/:animalId" element={<AnimalDetail />} />
                <Route path="/animals/create" element={<AnimalForm />} />

                {/* Locations Route */}
                <Route path="/locations" element={<LocationList />} />
                <Route path="/locations/details/:locationId" element={<LocationDetail />} />
                <Route path="/locations/create" element={<LocationForm />} />

                {/* Customers Route */}
                <Route path="/customers" element={<CustomerList />} />
                <Route path="/customers/create" element={<CustomerForm />} />

                {/* Employees Route */}
                <Route path="/employees" element={<EmployeeList />} />
                <Route path="/employees/create" element={<EmployeeForm />} />
            </Routes>
        </>
    )
}