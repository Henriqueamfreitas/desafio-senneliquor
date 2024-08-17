import { z } from "zod";

const hospitalSchema = z.object({
  cd_hospital: z.number().positive().int(),
  nm_hospital: z.string().min(1),
  nr_latitude: z.preprocess((val) => parseFloat(val as string), z.number()),
  nr_longitude: z.preprocess((val) => parseFloat(val as string), z.number()),
});

const hospitalCreateSchema = hospitalSchema.omit({
  cd_hospital: true,
});

const hospitalReturnSchema = hospitalSchema;
const hospitalReadSchema = hospitalSchema.array();

export default {
  hospitalSchema,
  hospitalCreateSchema,
  hospitalReturnSchema,
  hospitalReadSchema
};
