
interface IMedico {
    cd_medico: number, 
    nm_medico: string
}

interface IHospital {
    cd_hospital: number, 
    nm_hospital: string, 
    nr_latitude: number, 
    nr_longitude: number
}

export interface IChamado {
    hospital: IHospital, 
    ie_sexo: string,
    ie_status_chamado: string,
    ie_tipo_chamado: string,
    medico?: IMedico,
    nm_paciente: string,
    nr_chamado: number,
}

interface IChamadoCardProps {
    chamado: IChamado
}

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