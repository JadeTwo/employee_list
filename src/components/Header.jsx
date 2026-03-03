import { useLocation, useNavigate } from "react-router-dom"

export default function Header({ title }) {

    const navigate = useNavigate()
    const { pathname } = useLocation()

    console.log(pathname)

    return (
        <h1 id="header">
            {pathname.includes('employee') && <span id="back-btn" onClick={() => navigate('/')}>{'<'}</span>}
            <span>{ title }</span>
        </h1>
    )
}

