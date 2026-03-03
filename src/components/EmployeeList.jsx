import { useContext } from 'react'
import EmployeeListItem from './EmployeeListItem'
import { EmployeeContext } from '../EmployeeProvider'

export default function EmployeeList({ input }) {

    // Step 3: Consume the context 
    const { employees } = useContext(EmployeeContext) 

    // refactor our filter loop example using the filter array method
    let filteredEmployees = employees.filter((pokemon) => pokemon.name.includes(input))

    const pokemonComponents = filteredEmployees.map((pokemon) => 
        <EmployeeListItem 
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name} 
            title={pokemon.title} 
            img={pokemon.img} 
        />
    ) 

    return (
        <ul>
            {pokemonComponents}
        </ul>
    )
}

