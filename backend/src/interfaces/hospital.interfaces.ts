import { z } from "zod";
import { hospitalSchemas } from "../schemas";
import { DeepPartial, Repository } from "typeorm";

type HospitalCreate = z.infer<typeof hospitalSchemas.hospitalCreateSchema>;
type HospitalRead = z.infer<typeof hospitalSchemas.hospitalReadSchema>;
type HospitalReturn = z.infer<typeof hospitalSchemas.hospitalReturnSchema>;

export { HospitalCreate, HospitalReturn, HospitalRead };