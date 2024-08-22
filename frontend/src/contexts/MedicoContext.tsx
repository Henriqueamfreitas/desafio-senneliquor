import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { IMedico, IMedicoContext, IMedicoProviderProps } from "../interfaces/MedicoInterfaces";
import { ChamadoContext } from "./ChamadoContext";

export const MedicoContext = createContext({} as IMedicoContext);

export const MedicoProvider = ({ children }: IMedicoProviderProps) => {
    const [medicoList, setMedicoList] = useState<IMedico[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { chamadoList } = useContext(ChamadoContext)
    useEffect(() => {
        const token = localStorage.getItem("@senneLiquorTOKEN")
        const getMedico = async () => {
            try {
                setIsLoading(true)
                const response = await api.get("/medicos", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setMedicoList(response.data)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        getMedico()
    }, [])


    const medicoPorChamado: Record<number, number> = medicoList.reduce((acc, medico) => {
        acc[medico.cd_medico] = 0; 
        return acc;
    }, {} as Record<number, number>);

    chamadoList.forEach(chamado => {
        if (chamado.medico)
        if (medicoPorChamado.hasOwnProperty(chamado.medico.cd_medico)) {
            medicoPorChamado[chamado.medico.cd_medico] += 1;
        }
    });
    return (
        <MedicoContext.Provider
            value={{ medicoList, isModalOpen, setIsModalOpen, medicoPorChamado }}
        >
            {children}
        </MedicoContext.Provider>
    )
}

