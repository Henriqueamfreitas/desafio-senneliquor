import { z } from "zod";
import { medicoSchemas } from "../schemas";
import { DeepPartial, Repository } from "typeorm";

type MedicoCreate = z.infer<typeof medicoSchemas.medicoCreateSchema>;
type MedicoRead = z.infer<typeof medicoSchemas.medicoReadSchema>;
type MedicoReturn = z.infer<typeof medicoSchemas.medicoReturnSchema>;

export { MedicoCreate, MedicoReturn, MedicoRead };