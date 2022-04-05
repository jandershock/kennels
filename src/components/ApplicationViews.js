import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from './animal/AnimalCard.js'
import { LocationCard } from './location/LocationCard'
import { CustomerCard } from './customer/CustomerCard'
import { EmployeeCard } from "./employees/EmployeeCard"

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals" element={<AnimalCard />} />

                {/* Locations Route */}
                <Route path="/locations" element={<LocationCard />} />

                {/* Customers Route */}
                <Route path="/customers" element={<CustomerCard />} />

                {/* Employees Route */}
                <Route path="/employees" element={<EmployeeCard />} />
            </Routes>
        </>
    )
}