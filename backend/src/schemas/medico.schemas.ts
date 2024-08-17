import { z } from "zod";

const medicoSchema = z.object({
  cd_medico: z.number().positive().int(),
  nm_medico: z.string().min(1),
});

const medicoCreateSchema = medicoSchema.omit({
  cd_medico: true,
});

const medicoReturnSchema = medicoSchema;
const medicoReadSchema = medicoSchema.array();

export default {
  medicoSchema,
  medicoCreateSchema,
  medicoReturnSchema,
  medicoReadSchema
};
