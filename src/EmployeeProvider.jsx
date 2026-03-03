import { createContext, useState, useEffect } from "react"

import { employeeInfo } from "./data.js"

// use the environment variables
const EMPLOYEE_BASE_URL = import.meta.env.VITE_EMPLOYEE_BASE_URL
const POKI_BASE_URL = import.meta.env.VITE_POKI_BASE_URL

// Step 1: Create the context
export const EmployeeContext = createContext(null)

export default function EmployeeProvider({ children }) {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        
        async function getEmployees() {

            const response = await fetch(`${EMPLOYEE_BASE_URL}/users?limit=${employeeInfo.numberOfEmployees}`)
            const data = await response.json()
            
            const employeeData = data.users.map((emp) => ({
                name: null,
                title: emp.company.title,
                img: null,
                altTxt: null,
                id: emp.id
            }))

            for (let employee of employeeData) {
                const pokeResponse = await fetch(`${POKI_BASE_URL}/pokemon/${employee.id * 25}`)
                const pokeData = await pokeResponse.json()
                employee.name = pokeData.name
                employee.img = pokeData.sprites.other["official-artwork"].front_default
                employee.altTxt = `picture of ${pokeData.name}`
            }        

            setEmployees(employeeData)
        }



        getEmployees()

    }, [])

    return (
        <EmployeeContext.Provider value={{ employees, setEmployees }}>
            {children}
        </EmployeeContext.Provider>
    )
}