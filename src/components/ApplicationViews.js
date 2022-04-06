import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeList } from "./employees/EmployeeList"
import { LocationList } from "./location/LocationList"
import { CustomerList } from "./customer/CusomerList"
import { AnimalDetail } from "./animal/AnimalDetail"

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route exact path="/animals" element={<AnimalList />} />
                <Route path="/animals/:animalId" element={<AnimalDetail />} />

                {/* Locations Route */}
                <Route path="/locations" element={<LocationList />} />

                {/* Customers Route */}
                <Route path="/customers" element={<CustomerList />} />

                {/* Employees Route */}
                <Route path="/employees" element={<EmployeeList />} />
            </Routes>
        </>
    )
}