import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import 'react-toastify/dist/ReactToastify.css';
import { IChamado, IChamadoContext, IChamadoProviderProps, ICreateChamado } from "../interfaces/ChamadoInterfaces";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

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
        getChamado()
    }, [])

    const createChamado = async (newChamado: ICreateChamado) => {
        const token = localStorage.getItem("@senneLiquorTOKEN")
        try {
            await api.post("/chamados", newChamado, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success("Chamado criado com sucesso", {
                autoClose: 2000
            })

        } catch (error) {
            const currentError = error as AxiosError<string>
            console.log(currentError)
            toast.error(currentError.response?.data.message, {
                autoClose: 2000
            })
        }
    }

    return (
        <ChamadoContext.Provider
            value={{ chamadoList, createChamado }}
        >
            {children}
        </ChamadoContext.Provider>
    )
}

