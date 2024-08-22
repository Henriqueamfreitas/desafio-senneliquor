import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginFormValues, loginFormSchema } from "./loginFormSchema";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ToastContainer } from 'react-toastify'
import { InputDiv } from "../InputDiv";
import { StyledLoginForm } from "./style";

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TLoginFormValues>({
        resolver: zodResolver(loginFormSchema),
    })

    const { loginUser } = useContext(UserContext);

    const submit = (formData: TLoginFormValues) => {
        loginUser(formData)
    }
    return (
        <StyledLoginForm onSubmit={handleSubmit(submit)}>
            <h2>LOGIN</h2>

            <InputDiv
                is_select={false}
                label="Username"
                type="text"
                placeholder="Username"
                {...register("username")}
                error={
                    errors.username ?
                        <p>{errors.username.message}</p>
                        : null
                }
            />

            <InputDiv
                is_select={false}
                label="Senha"
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
        </StyledLoginForm>
    )
}