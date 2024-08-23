import { createContext } from "react";
import { api } from "../services/api";
import 'react-toastify/dist/ReactToastify.css';
import { AxiosError } from "axios";
import { TLoginFormValues } from "../components/LoginForm/loginFormSchema";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IUserContext, UserProviderProps } from "../interfaces/UserInterfaces";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: UserProviderProps) => {
    const navigate = useNavigate();

    const loginUser = async (loginData: TLoginFormValues) => {
        try {
            const response = await api.post("/login", loginData);
            const token = response.data.token;
            const decodedToken = JSON.parse(atob(token.split('.')[1]));
            const expirationDate = new Date(decodedToken.exp * 1000);
    
            localStorage.setItem("@senneLiquorTokenExpiration", expirationDate.toISOString());
            localStorage.setItem("@senneLiquorTOKEN", token);
            setTimeout(() => {
                navigate("/lista-chamados");
            }, 2500);

            toast.success("Você está sendo redirecionado para a página de Chamados", {
                autoClose: 2000,
            });

        } catch (error) {
            const currentError = error as AxiosError;

            if (currentError.response) {
                let errorMessage = "Ocorreu um erro inesperado.";

                if (typeof currentError.response.data === "string") {
                    errorMessage = currentError.response.data;
                } else if (
                    typeof currentError.response.data === "object" &&
                    currentError.response.data !== null &&
                    "message" in currentError.response.data
                ) {
                    errorMessage = (currentError.response.data as { message: string }).message;
                }

                toast.error(errorMessage, {
                    autoClose: 2000,
                });
            } else {
                toast.error("Ocorreu um erro inesperado.", {
                    autoClose: 2000,
                });
            }
        }
    };

    const logoutUser = () => {
        navigate("/");
        localStorage.removeItem("@senneLiquorTOKEN");
    };

    return (
        <UserContext.Provider value={{ loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};
