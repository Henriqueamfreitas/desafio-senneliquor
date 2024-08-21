import { Link } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"
import { useContext } from "react"

export const Header = () => {
    const { logoutUser } = useContext(UserContext)
    return (
        <header>
            <div>
                <Link to="/lista-chamados">
                    Lista de Chamados
                </Link>
                <Link to="/registro-chamados">
                    Registro de Chamados
                </Link>
                <Link to="/mapa-chamados">
                    Mapa de Chamados
                </Link>
            </div>
            <button onClick={logoutUser}>LogOut</button>
        </header>
    )
}