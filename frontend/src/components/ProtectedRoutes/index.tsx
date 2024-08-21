import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes = () => {
    const token = localStorage.getItem("@senneLiquorTOKEN");
    const tokenExpiration = localStorage.getItem("@senneLiquorTokenExpiration");
    const currentTime = new Date();

    if (token && tokenExpiration) {
        const expirationDate = new Date(tokenExpiration);
        if (currentTime < expirationDate) {
            return <Outlet />;
        }
    }

    localStorage.removeItem("@senneLiquorTOKEN");
    localStorage.removeItem("@senneLiquorTokenExpiration");
    return <Navigate to="/" />;
}