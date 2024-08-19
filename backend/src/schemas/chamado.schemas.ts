import { z } from "zod";
import hospitalSchemas from "./hospital.schemas";
import medicoSchemas from "./medico.schemas";

const chamadoSchema = z.object({
  nr_chamado: z.number().positive().int(),
  hospital: z.number().positive().int(),
  ie_tipo_chamado: z.string(),
  nm_paciente: z.string().min(1),
  ie_sexo: z.string(),
  ie_status_chamado: z.string(),
  medico: z.number().positive().int().optional(),
});

const chamadoReturnSchema = z.object({
    nr_chamado: z.number().positive().int(),
    hospital: hospitalSchemas.hospitalSchema,
    ie_tipo_chamado: z.string(),
    nm_paciente: z.string().min(1),
    ie_sexo: z.string(),
    ie_status_chamado: z.string(),
    medico: medicoSchemas.medicoSchema.optional().nullable(),
  });
  
const chamadoCreateSchema = chamadoSchema.omit({
  nr_chamado: true,
});

const chamadoReadSchema = chamadoReturnSchema.array();

export default {
  chamadoSchema,
  chamadoCreateSchema,
  chamadoReturnSchema,
  chamadoReadSchema,
};

