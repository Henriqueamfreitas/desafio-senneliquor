import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import 'react-toastify/dist/ReactToastify.css';
import { AxiosError } from "axios";
import { TLoginFormValues } from "../components/LoginForm/loginFormSchema";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface IChamadoContext {
    chamadoList: any
}

export const ChamadoContext = createContext({} as IChamadoContext);

interface ChamadoProviderProps {
    children: React.ReactNode
}

interface IChamado {
    email: string,
    name: string,
    id: number,
}

export const ChamadoProvider = ({ children }: ChamadoProviderProps) => {
    const [chamadoList, setChamadoList] = useState<any[]>([])
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

