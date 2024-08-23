import { Header } from "../../components/Header"
import { Mapa } from "../../components/Mapa";
import { StyledMapaChamadoPage } from "./style";

export const MapaChamadoPage = () => {
    return (
        <StyledMapaChamadoPage>
            <Header />
            <h1>Dsitribuição de Hospitais no Mapa</h1>
            <span>Clique no Hospital para saber mais informações dele</span>
            <Mapa />
        </StyledMapaChamadoPage>
    )
}