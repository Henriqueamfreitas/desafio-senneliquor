import { TLoginFormValues } from "../../components/LoginForm/loginFormSchema";

export interface UserProviderProps {
    children: React.ReactNode
}

export interface IUser {
    email: string,
    name: string,
    id: number,
}

export interface IUserContext {
    loginUser: (loginData: TLoginFormValues) => Promise<void>,
    logoutUser:() => void,
}
