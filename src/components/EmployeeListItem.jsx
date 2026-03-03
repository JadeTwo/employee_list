import { useNavigate } from "react-router-dom"

export default function EmployeeListItem({ name, title, img, id, altTxt = 'pokemon' }) {
    
    const navigate = useNavigate()
    
    return (
        <li onClick={() => navigate(`/employee/${id}`)}>
            <img src={img} alt={altTxt} />
            <div>
                <p>{name}</p>
                <p>{title}</p>
            </div>
        </li>
    )
}

