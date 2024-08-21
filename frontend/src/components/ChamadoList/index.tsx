import { useContext } from "react"
import { ChamadoContext } from "../../contexts/ChamadoContext"
import { ChamadoCard } from "../ChamadoCard"
import { IChamado } from "../ChamadoCard"

export const ChamadoList = () => {
    const { chamadoList } = useContext(ChamadoContext)
    return(
        <ul>
            {
                chamadoList?.map((chamado: IChamado) => {
                    return(
                        <ChamadoCard key={chamado.nr_chamado} chamado={chamado} />
                    )
                })
            }
        </ul>
    )
}