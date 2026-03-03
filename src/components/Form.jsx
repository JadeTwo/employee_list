import { useContext, useState } from "react";
import { EmployeeContext } from "../EmployeeProvider";

import { employeeInfo } from "../data.js";

function Form() {

    // Step 3: Consume the context
    const { setEmployees } = useContext(EmployeeContext)

    const [form, setForm] = useState({ name: '', title: '' })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert('Form Submitted!');
        let newEmployee = { 
            ...form,
            altTxt: null,
            img: null,
            id: ++employeeInfo.numberOfEmployees
        }
        
        try {

            // make a request for a pokemon based off the form.name
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${form.name}`)
            const pokemon = await response.json()

            newEmployee.img = pokemon.sprites.other["official-artwork"].front_default
            // newEmployee.id = newEmployee.name + newEmployee.title + pokemon.id
            newEmployee.altTxt = `picture of ${pokemon.name}`

        } catch(e) {

            let randomNumber = Math.floor(Math.random() * 1025) + 1 

            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
            const pokemon = await response.json()

            newEmployee.name = `${form.name} (${pokemon.name})`
            newEmployee.img = pokemon.sprites.other["official-artwork"].front_default
            // newEmployee.id = pokemon.id
            newEmployee.altTxt = `picture of ${pokemon.name}`
           
        }

        // newEmployee.img = 'https://archives.bulbagarden.net/media/upload/7/79/Dream_Pok%C3%A9_Ball_Sprite.png'
        setEmployees(prevEmployees => [...prevEmployees, newEmployee])  
    }

    return (
        <>
            <h2>Employee Form:</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="emp-name">Name: </label>
                <input 
                    type="text" 
                    id="emp-name" 
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="emp-title">Title: </label>
                <input 
                    type="text" 
                    id="emp-title" 
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    required
                />
                <button>Submit</button>
            </form>
        </>
    )
}

export default Form;