import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import 'react-toastify/dist/ReactToastify.css';
import { IChamado, IChamadoContext, IChamadoProviderProps, ICreateChamado, IUpdateChamado } from "../interfaces/ChamadoInterfaces";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const ChamadoContext = createContext({} as IChamadoContext);

export const ChamadoProvider = ({ children }: IChamadoProviderProps) => {
    const [chamadoList, setChamadoList] = useState<IChamado[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("@senneLiquorTOKEN");
        const getChamado = async () => {
            try {
                setIsLoading(true);
                const response = await api.get("/chamados", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setChamadoList(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        getChamado();
    }, []);

    const createChamado = async (newChamado: ICreateChamado) => {
        const token = localStorage.getItem("@senneLiquorTOKEN");
        try {
            await api.post("/chamados", newChamado, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toast.success("Chamado criado com sucesso", {
                autoClose: 2000
            });
        } catch (error) {
            const currentError = error as AxiosError;
            if (currentError.response && typeof currentError.response.data === 'object' && currentError.response.data !== null && 'message' in currentError.response.data) {
                toast.error((currentError.response.data as { message: string }).message, {
                    autoClose: 2000
                });
            } else {
                toast.error("Erro ao criar chamado.", {
                    autoClose: 2000
                });
            }
        }
    };

    const updateChamado = async (newChamado: IUpdateChamado) => {
        const token = localStorage.getItem("@senneLiquorTOKEN");
        try {
            const nr_chamado = localStorage.getItem("@senneLiquorNR_CHAMADO");
            await api.patch(`/chamados/${nr_chamado}`, newChamado, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toast.success("Chamado atualizado com sucesso", {
                autoClose: 1500
            });
            window.location.reload();
        } catch (error) {
            const currentError = error as AxiosError;
            if (currentError.response && typeof currentError.response.data === 'object' && currentError.response.data !== null && 'message' in currentError.response.data) {
                toast.error((currentError.response.data as { message: string }).message, {
                    autoClose: 2000
                });
            } else {
                toast.error("Erro ao atualizar chamado.", {
                    autoClose: 2000
                });
            }
        }
    };

    return (
        <ChamadoContext.Provider value={{ chamadoList, createChamado, isLoading, updateChamado }}>
            {children}
        </ChamadoContext.Provider>
    );
};
