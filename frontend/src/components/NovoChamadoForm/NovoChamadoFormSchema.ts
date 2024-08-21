import { z } from "zod";

export const NovoChamadoFormSchema = z.object({
   nm_paciente: z.string().nonempty("Nome do paciente é obrigatório"),
   nm_hospital: z.string().nonempty("Nome do hospital é obrigatório"),
   nm_medico: z.string().optional().default("null"),
   ie_tipo_chamado: z.string().nonempty("Tipo de chamado é obrigatório"),
   ie_sexo: z.string().nonempty("Sexo é obrigatório"),
   ie_status_chamado: z.string().nonempty("Status do chamado é obrigatório"),
})

export type TNovoChamadoFormValues = z.infer<typeof NovoChamadoFormSchema>