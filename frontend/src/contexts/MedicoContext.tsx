import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { IMedico, IMedicoContext, IMedicoProviderProps } from "../interfaces/MedicoInterfaces";

export const MedicoContext = createContext({} as IMedicoContext);

export const MedicoProvider = ({ children }: IMedicoProviderProps) => {
    const [medicoList, setMedicoList] = useState<IMedico[]>([])
    const [isLoading, setIsLoading] = useState(true)
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


    return (
        <MedicoContext.Provider
            value={{ medicoList }}
        >
            {children}
        </MedicoContext.Provider>
    )
}

