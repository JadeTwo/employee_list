import pikachu from './assets/pikachu.jpeg'
import megaCharizard from './assets/mega-charizard.png'
import squirtle from './assets/squirtle.png'
import rayquaza from './assets/rayquaza.png'
import kyogre from './assets/kyogre.png'
import chienPao from './assets/chien-pao.png'

// to help with creating a unique and stable id for each new employee
export const employeeInfo = { numberOfEmployees: 6 }

const pokemonEmployees = [
    {
        name: 'Pikachu',
        title: 'President and Ceo',
        img: pikachu,
        altTxt: 'picture of ',
        id: 1
    },
    {
        name: 'Mega Charizard',
        title: 'VP of Marketing',
        img: megaCharizard,
        altTxt: 'picture of ',
        id: 2
    },
    {
        name: 'Squirtle',
        title: 'CFO',
        img: squirtle,
        altTxt: 'picture of ', 
        id: 3
    },
    {
        name: 'Rayquanza',
        title: 'VP of Engineering',
        img: rayquaza,
        altTxt: 'picture of ',
        id: 4
    },
    {
        name: 'Kyogre',
        title: 'VP of Sales',
        img: kyogre,
        altTxt: 'picture of ',
        id: 5
    },
    {
        name: 'Chien Pao',
        title: 'QA Manager',
        img: chienPao,
        altTxt: 'picture of ',
        id: 6
    }
]

export default pokemonEmployees