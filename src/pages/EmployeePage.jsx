import { useParams } from "react-router-dom"
import Header from "../components/Header"

function EmployeePage() {

    const { id } = useParams()

    return (
        <div>
            <Header title='Employee' />
            <div>Employee Id: {id}</div>
        </div>
    )
}

export default EmployeePage