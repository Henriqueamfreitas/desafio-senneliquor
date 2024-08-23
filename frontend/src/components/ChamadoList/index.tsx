import { useContext } from "react"
import { ChamadoContext } from "../../contexts/ChamadoContext"
import { ChamadoCard } from "../ChamadoCard"
import { IChamado } from "../../interfaces/ChamadoInterfaces"
import { StyledChamadoList } from "./style"

export const ChamadoList = () => {
    const { chamadoList } = useContext(ChamadoContext)
    return(
        <StyledChamadoList>
            {
                chamadoList?.map((chamado: IChamado) => {
                    return(
                        <ChamadoCard key={chamado.nr_chamado} chamado={chamado} />
                    )
                })
            }
        </StyledChamadoList>
    )
}