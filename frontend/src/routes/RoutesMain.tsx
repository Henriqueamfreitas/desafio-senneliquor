import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { DashBoardPage } from "../pages/DashboardPage";

export const RoutesMain = () => {
   return (
      <Routes>
         <Route path="/" element={<LoginPage />} />
         <Route path="/dashboard" element={<DashBoardPage />} />
      </Routes>
   );
};