import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import EmployeeList from '../components/EmployeeList'
import Form from '../components/Form'

import { useState } from "react"

import EmployeeProvider from '../EmployeeProvider'

export default function HomePage() {

    const [input, setInput] = useState('')

    return (
        
        <div>
            <Header title="Employee List" />
            <SearchBar input={input} setInput={setInput} />

            {/* Step 2: Provide the context (optional: using a custom Provider)  */}
            <EmployeeProvider>
                <EmployeeList input={input} />
                <Form />
            </EmployeeProvider>
        </div>
    )
}

