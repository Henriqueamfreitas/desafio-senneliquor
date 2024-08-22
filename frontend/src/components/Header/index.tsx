import { Link, useLocation } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"
import { useContext, useEffect } from "react"

export const Header = () => {
    const { logoutUser } = useContext(UserContext)
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/mapa-chamados') {
            if (!localStorage.getItem('mapReloaded')) {
                localStorage.setItem('mapReloaded', 'true');
                window.location.reload(); 
            }
        } else {
            localStorage.removeItem('mapReloaded');
        }
    }, [location.pathname]);

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