import { z } from "zod";

export const UpdateMedicoSchema = z.object({
   nm_medico: z.string().optional().default("null"),
})

export type TUpdateMedicoFormValues = z.infer<typeof UpdateMedicoSchema>