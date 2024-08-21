import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { DashBoardPage } from "../pages/DashboardPage";
import { ProtectedRoutes } from "../components/ProtectedRoutes";

export const RoutesMain = () => {
   return (
      <Routes>
         <Route path="/" element={<LoginPage />} />
         <Route path="/dashboard" element={<ProtectedRoutes />}>
            <Route index element={<DashBoardPage />} />
         </Route>
      </Routes>
   );
};