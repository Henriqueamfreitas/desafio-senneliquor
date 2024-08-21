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
    const navigate = useNavigate()

    const loginUser = async (loginData: TLoginFormValues) => {
        try {
            const response = await api.post("/login", loginData)
            const token = (response.data.token)
            const decodedToken = JSON.parse(atob(token.split('.')[1]));
            const expirationDate = new Date(decodedToken.exp * 1000);
    
            localStorage.setItem("@senneLiquorTokenExpiration", expirationDate.toISOString());
            localStorage.setItem("@senneLiquorTOKEN", token)
            setTimeout(() => {
                navigate("/lista-chamados")
            },
                2500
            )
            toast.success("You are being redirected to the home page", {
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

    const logoutUser = () => {
        navigate("/")
        localStorage.removeItem("@senneLiquorTOKEN")
    }

    return (
        <UserContext.Provider
            value={{ loginUser, logoutUser }}
        >
            {children}
        </UserContext.Provider>
    )
}

