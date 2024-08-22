import { useContext, useEffect, useRef } from "react";
import { InputDiv } from "../InputDiv";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { TUpdateMedicoFormValues, UpdateMedicoSchema } from "./updateMedicoSchema";
import { ChamadoContext } from "../../contexts/ChamadoContext";
import { ToastContainer } from "react-toastify";
import { MedicoContext } from "../../contexts/MedicoContext";
import { IUpdateChamado } from "../../interfaces/ChamadoInterfaces";
import { StyledDiv } from "./style";

export const UpdateMedicoModal = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TUpdateMedicoFormValues>({
        resolver: zodResolver(UpdateMedicoSchema),
    })

    const { updateChamado, chamadoList } = useContext(ChamadoContext);
    const { medicoList, medicoPorChamado, setIsModalOpen } = useContext(MedicoContext)

    const modalRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleOutclick = (event: MouseEvent) => {
            if (!modalRef.current?.contains(event.target as Node)) {
                setIsModalOpen(false);
            }
        }

        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsModalOpen(false);
            }
        }

        window.addEventListener("mousedown", handleOutclick)
        window.addEventListener("keydown", handleEscKey)

        return () => {
            window.removeEventListener("mousedown", handleOutclick);
            window.removeEventListener("keydown", handleEscKey);
        }
    }, [])

    const submit = (formData: TUpdateMedicoFormValues) => {
        let medico_cd
        const nr_chamado = localStorage.getItem("@senneLiquorNR_CHAMADO")
        if (formData.nm_medico !== "") {
            const medico = medicoList.filter(medico => medico.nm_medico === formData.nm_medico)
            if (medico.length > 0) {
                medico_cd = medico[0].cd_medico
            } else {
                const maiorCdMedico = Math.max(...medicoList.map(medico => medico.cd_medico));
                medico_cd = maiorCdMedico + 1
            }
        }
        const chamado = chamadoList.filter(chamado => chamado.nr_chamado === Number(nr_chamado))[0]
        const data: IUpdateChamado = {
            hospital: chamado.hospital.cd_hospital,
            ie_sexo: chamado.ie_sexo,
            ie_status_chamado: chamado.ie_status_chamado,
            ie_tipo_chamado: chamado.ie_tipo_chamado,
            nm_paciente: chamado.nm_paciente,
            medico: medico_cd,
        }
        updateChamado(data)
    }
    return (
        <StyledDiv role="dialog">
            <div ref={modalRef}>
                <button onClick={() => setIsModalOpen(false)}>X</button>
                <form onSubmit={handleSubmit(submit)}>
                    <InputDiv
                        is_select={false}
                        label="Nome do Médico"
                        type="text"
                        placeholder="Nome do Médico"
                        {...register("nm_medico")}
                        error={
                            errors.nm_medico ?
                                <p>{errors.nm_medico.message}</p>
                                : null
                        }
                    />
                    <button type="submit">Atualizar</button>
                    <ToastContainer />
                </form>
                <ul>
                    {medicoList.map(medico => (
                        <li key={medico.cd_medico}>
                            {medico.nm_medico}: {medicoPorChamado[medico.cd_medico]} chamados
                        </li>
                    ))}
                </ul>
            </div>
        </StyledDiv>
    )
}

