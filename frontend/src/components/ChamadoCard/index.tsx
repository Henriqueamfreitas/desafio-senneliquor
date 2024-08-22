import { useContext } from "react"
import { IChamadoCardProps } from "../../interfaces/ChamadoInterfaces"
import { MedicoContext } from "../../contexts/MedicoContext"

export const ChamadoCard = ({ chamado }: IChamadoCardProps) => {
    const { setIsModalOpen } = useContext(MedicoContext)
    const status = () => {
        if(chamado.ie_status_chamado === "A"){
            return "Aberto"
        }
        if(chamado.ie_status_chamado === "E"){
            return "Encerrado"
        }
        if(chamado.ie_status_chamado === "C"){
            return "Cancelado"
        }
    }
    const sexo = () => {
        if(chamado.ie_sexo === "M"){
            return "Masculino"
        }
        if(chamado.ie_sexo === "F"){
            return "Feminino"
        }
        if(chamado.ie_sexo === "N"){
            return "Não informado"
        }
    }
    const atendimento = () => {
        if(chamado.ie_tipo_chamado === "1"){
            return "Pronto Socorro"
        }
        if(chamado.ie_tipo_chamado === "2"){
            return "Internado"
        }
    }   

        
    const openModal = () => {
        setIsModalOpen(true)
        localStorage.setItem("@senneLiquorNR_CHAMADO", JSON.stringify(chamado.nr_chamado))
    }
        
    
    return (
        <li>
            <h2>{chamado.nr_chamado} - {chamado.nm_paciente}</h2>
            <p><b>Tipo de Atendimento:</b> {atendimento()}</p>
            <p><b>Sexo biológico do paciente:</b> {sexo()}</p>
            <p><b>Status do chamado:</b> {status()}</p>
            <p><b>Hospital:</b> {chamado.hospital.nm_hospital}</p>
            <p><b>Médico:</b> {chamado.medico ? chamado.medico.nm_medico : "Sem médico"}</p>
            <button onClick={openModal}>
                {chamado.medico ? 
                <span>Trocar médico</span> : 
                <span>Atribuir médico</span>}
            </button>
       </li>
    )
}