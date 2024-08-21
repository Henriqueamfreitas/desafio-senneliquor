import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes = () => {
    const token = localStorage.getItem("@senneLiquorTOKEN")

    return token ? <Outlet /> : <Navigate to="/" />
}