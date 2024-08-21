import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { ListaChamadoPage } from "../pages/ListaChamadoPage";
import { MapaChamadoPage } from "../pages/MapaChamadoPage";
import { RegistroChamadoPage } from "../pages/RegistroChamadoPage";
import { ProtectedRoutes } from "../components/ProtectedRoutes";

export const RoutesMain = () => {
   return (
      <Routes>
         <Route path="/" element={<LoginPage />} />
         <Route path="/lista-chamados" element={<ProtectedRoutes />}>
            <Route index element={<ListaChamadoPage />} />
         </Route>
         <Route path="/registro-chamados" element={<ProtectedRoutes />}>
            <Route index element={<RegistroChamadoPage />} />
         </Route>
         <Route path="/mapa-chamados" element={<ProtectedRoutes />}>
            <Route index element={<MapaChamadoPage />} />
         </Route>
      </Routes>
   );
};