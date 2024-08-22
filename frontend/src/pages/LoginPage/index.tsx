import { LoginForm } from "../../components/LoginForm"
import { StyledLoginPage } from "./style"
import logo_secundario from "../../assets/logo_senne_secundario.png"
export const LoginPage = () => {

    return (
        <StyledLoginPage>
            <header>
                <img src={logo_secundario} alt="logo secundário" />
            </header>
            <LoginForm />
        </StyledLoginPage>
    )
}