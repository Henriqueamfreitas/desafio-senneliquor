import { IChamadoCardProps } from "../../interfaces/ChamadoInterfaces"

export const ChamadoCard = ({ chamado }: IChamadoCardProps) => {
    return (
        <li>
            <h2>{chamado.nr_chamado} - {chamado.nm_paciente}</h2>
            <p>{chamado.ie_tipo_chamado}</p>
            <p>{chamado.ie_sexo}</p>
            <p>{chamado.ie_status_chamado}</p>
            <p>{chamado.hospital.nm_hospital}</p>
            <p>{chamado.medico ? chamado.medico.nm_medico : null}</p>
       </li>
    )
}