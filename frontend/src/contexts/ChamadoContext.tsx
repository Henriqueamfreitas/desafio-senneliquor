import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import 'react-toastify/dist/ReactToastify.css';
import { IChamado, IChamadoContext, IChamadoProviderProps } from "../interfaces/ChamadoInterfaces";

export const ChamadoContext = createContext({} as IChamadoContext);

export const ChamadoProvider = ({ children }: IChamadoProviderProps) => {
    const [chamadoList, setChamadoList] = useState<IChamado[]>([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const token = localStorage.getItem("@senneLiquorTOKEN")
        const getChamado = async () => {
            try {
                setIsLoading(true)
                const response = await api.get("/chamados", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setChamadoList(response.data)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        if (token){
            getChamado()
        }
    }, [])


    return (
        <ChamadoContext.Provider
            value={{ chamadoList }}
        >
            {children}
        </ChamadoContext.Provider>
    )
}

