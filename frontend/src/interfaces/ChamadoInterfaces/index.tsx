import { IHospital } from "../HospitalInterfaces"
import { IMedico } from "../MedicoInterfaces"

export interface IChamado {
    hospital: IHospital, 
    ie_sexo: string,
    ie_status_chamado: string,
    ie_tipo_chamado: string,
    medico?: IMedico,
    nm_paciente: string,
    nr_chamado: number,
}

export interface IChamadoProviderProps {
    children: React.ReactNode
}


export interface IChamadoContext {
    chamadoList: IChamado[]
}


export interface IChamadoCardProps {
    chamado: IChamado
}
