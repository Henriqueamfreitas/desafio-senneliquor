import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import 'react-toastify/dist/ReactToastify.css';
import { AxiosError } from "axios";
import { TLoginFormValues } from "../components/LoginForm/loginFormSchema";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface IUserContext {
    loginUser: (loginData: TLoginFormValues) => Promise<void>,
    logoutUser:() => void,
}

export const UserContext = createContext({} as IUserContext);

interface UserProviderProps {
    children: React.ReactNode
}

interface IUser {
    email: string,
    name: string,
    id: number,
}

export const UserProvider = ({ children }: UserProviderProps) => {
    const navigate = useNavigate()
    const token = localStorage.getItem("@senneLiquorTOKEN")

    const loginUser = async (loginData: TLoginFormValues) => {
        try {
            const response = await api.post("/login", loginData)
            const token = (response.data.token)
            localStorage.setItem("@senneLiquorTOKEN", token)
            setTimeout(() => {
                navigate("/dashboard")
            },
                3500
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

