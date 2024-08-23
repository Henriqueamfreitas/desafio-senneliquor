import { useContext } from "react";
import { ChamadoList } from "../../components/ChamadoList";
import { Header } from "../../components/Header";
import { ChamadoContext } from "../../contexts/ChamadoContext";
import { UpdateMedicoModal } from "../../components/UpdateMedicoModal";
import { MedicoContext } from "../../contexts/MedicoContext";

export const ListaChamadoPage = () => {
    const { isLoading } = useContext(ChamadoContext)
    const { isModalOpen } = useContext(MedicoContext)
    
    return (
        <>
            <Header />
            {
                isModalOpen ? 
                <UpdateMedicoModal />:
                null
            }
            {
                isLoading ?
                <span>Carregando...</span>:
                <ChamadoList />
            }

        </>
    )
}