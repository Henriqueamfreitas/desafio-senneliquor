import { LoginForm } from "../../components/LoginForm"
import { StyledLoginPage } from "./style"
import logo from "../../assets/logo_senne.png"
export const LoginPage = () => {

    return (
        <StyledLoginPage>
            <header>
                <img src={logo} alt="" />
            </header>
            <LoginForm />
        </StyledLoginPage>
    )
}