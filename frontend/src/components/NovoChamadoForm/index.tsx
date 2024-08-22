import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { NovoChamadoFormSchema, TNovoChamadoFormValues } from "./NovoChamadoFormSchema";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import { InputDiv } from "../InputDiv";
import { ChamadoContext } from "../../contexts/ChamadoContext";
import { HospitalContext } from "../../contexts/HospitalContext";
import { MedicoContext } from "../../contexts/MedicoContext";

export const NovoChamadoForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TNovoChamadoFormValues>({
        resolver: zodResolver(NovoChamadoFormSchema),
    })

    const { createChamado } = useContext(ChamadoContext);
    const { hospitalList } = useContext(HospitalContext);
    const { medicoList } = useContext(MedicoContext);

    const submit = (formData: TNovoChamadoFormValues) => {
        const hospital = hospitalList.filter(hospital => hospital.nm_hospital === formData.nm_hospital)
        let hospital_cd = null
        if (hospital.length > 0) {
            hospital_cd = hospital[0].cd_hospital
        } else {
            const maiorCdHospital = Math.max(...hospitalList.map(hospital => hospital.cd_hospital));
            hospital_cd = maiorCdHospital + 1
        }

        let medico_cd = null
        if (formData.nm_medico !== "") {
            const medico = medicoList.filter(medico => medico.nm_medico === formData.nm_medico)
            if (medico.length > 0) {
                medico_cd = medico[0].cd_medico
            } else {
                const maiorCdMedico = Math.max(...medicoList.map(medico => medico.cd_medico));
                medico_cd = maiorCdMedico + 1
            }
        }

        const data = {
            hospital: hospital_cd,
            ie_tipo_chamado: formData.ie_tipo_chamado,
            nm_paciente: formData.nm_paciente,
            ie_sexo: formData.ie_sexo,
            ie_status_chamado: formData.ie_status_chamado,
            medico: medico_cd
        }
        createChamado(data)
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <h2>Novo Chamado</h2>

            <InputDiv
                type="text"
                label="Nome do Paciente"
                placeholder="Nome do Paciente"
                {...register("nm_paciente")}
                error={
                    errors.nm_paciente ?
                        <p>{errors.nm_paciente.message}</p>
                        : null
                }
                is_select={false}
            />

            <InputDiv
                type="text"
                label="Nome do Hospital"
                placeholder="Nome do Hospital"
                {...register("nm_hospital")}
                error={
                    errors.nm_hospital ?
                        <p>{errors.nm_hospital.message}</p>
                        : null
                }
                is_select={false}
            />

            <InputDiv
                type="text"
                label="Nome do Médico"
                placeholder="Nome do Médico"
                {...register("nm_medico")}
                error={
                    errors.nm_medico ?
                        <p>{errors.nm_medico.message}</p>
                        : null
                }
                is_select={false}
            />

            <InputDiv
                {...register("ie_tipo_chamado")}
                label="Tipo de chamado"
                error={
                    errors.ie_tipo_chamado ?
                        <p>{errors.ie_tipo_chamado.message}</p>
                        : null
                }
                is_select={true}
                options={[
                    { value: "", label: "Selecione o tipo de chamado" },
                    { value: "1", label: "Pronto Socorro (1)" },
                    { value: "2", label: "Internado (2)" }
                ]}
            />

            <InputDiv
                {...register("ie_sexo")}
                label="Sexo"
                error={
                    errors.ie_sexo ?
                        <p>{errors.ie_sexo.message}</p>
                        : null
                }
                is_select={true}
                options={[
                    { value: "", label: "Selecione o sexo" },
                    { value: "M", label: "Masculino (M)" },
                    { value: "F", label: "Feminino (F)" },
                    { value: "N", label: "Prefiro não infomar" }
                ]}
            />

            <InputDiv
                {...register("ie_status_chamado")}
                label="Status do chamado"
                error={
                    errors.ie_status_chamado ?
                        <p>{errors.ie_status_chamado.message}</p>
                        : null
                }
                is_select={true}
                options={[
                    { value: "", label: "Selecione o status do chamado" },
                    { value: "A", label: "Aberto" },
                    { value: "E", label: "Encerrado" },
                    { value: "C", label: "Cancelado" }
                ]}
            />

            <button type="submit">Adicionar</button>
            <ToastContainer />
        </form>
    )
}