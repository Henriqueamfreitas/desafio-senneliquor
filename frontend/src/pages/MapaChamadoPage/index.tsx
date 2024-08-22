import { useContext } from "react";
import { Header } from "../../components/Header"
import { Mapa } from "../../components/Mapa";
import { HospitalContext } from "../../contexts/HospitalContext";
export const MapaChamadoPage = () => {
    const { hospitalList } = useContext(HospitalContext)

    return (
        <>
            <Header />
            <h1>MapaChamadoPage</h1>
            <Mapa />
        </>
    )
}