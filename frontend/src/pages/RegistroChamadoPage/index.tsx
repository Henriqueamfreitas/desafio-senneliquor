import { useContext } from "react";
import { Header } from "../../components/Header";
import { NovoChamadoForm } from "../../components/NovoChamadoForm";
import { MedicoContext } from "../../contexts/MedicoContext";
import { HospitalContext } from "../../contexts/HospitalContext";
import { StyledRegistroChamadoPage } from "./style";
export const RegistroChamadoPage = () => {
    const { medicoList, medicoPorChamado } = useContext(MedicoContext)
    const { hospitalList, chamadosPorHospital } = useContext(HospitalContext)
    return (
        <StyledRegistroChamadoPage>
            <Header />
            <h1>Cadastrar Novo Chamado</h1>
            <div>
                <NovoChamadoForm />
                <section>
                    <ul>
                        <h2>Lista de Médicos</h2>
                        {medicoList.map(medico => (
                            <li key={medico.cd_medico}>
                                {medico.nm_medico}: {medicoPorChamado[medico.cd_medico]} chamados
                            </li>
                        ))}
                    </ul>
                    <ul>
                        <h2>Lista de Hospitais</h2>
                        {hospitalList.map(hospital => (
                            <li key={hospital.cd_hospital}>
                                {hospital.nm_hospital}: {chamadosPorHospital[hospital.cd_hospital]} chamados
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </StyledRegistroChamadoPage>
    )
}