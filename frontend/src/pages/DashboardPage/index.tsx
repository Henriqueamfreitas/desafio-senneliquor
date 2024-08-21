import { useContext } from "react";
import { ChamadoContext } from "../../contexts/ChamadoContext";
import { ChamadoList } from "../../components/ChamadoList";

export const DashBoardPage = () => {
    const { chamadoList } = useContext(ChamadoContext);
    return (
        <>
            <h1>DashboardPage</h1>
            <ChamadoList />
        </>
    )
}