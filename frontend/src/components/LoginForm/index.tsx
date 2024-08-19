import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginFormValues, loginFormSchema } from "./loginFormSchema";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { ToastContainer } from 'react-toastify'
import { InputDiv } from "../InputDiv";

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TLoginFormValues>({
        resolver: zodResolver(loginFormSchema),
    })

    const { loginUser } = useContext(UserContext);

    const navigate = useNavigate()


    const submit = (formData: TLoginFormValues) => {
        loginUser(formData)
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <h2>LOGIN</h2>

            <InputDiv
                type="text"
                placeholder="username"
                {...register("username")}
                error={
                    errors.username ? 
                    <p>{errors.username.message}</p> 
                    : null
                }
            />

            <InputDiv
                type="password"
                placeholder="Password"
                {...register("password")}
                error={
                    errors.password ? 
                    <p>{errors.password.message}</p> 
                    : null
                }
            />

            <button type="submit">Login</button>
            <ToastContainer />
        </form>
    )
}