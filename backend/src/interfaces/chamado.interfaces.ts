import { z } from "zod";
import { chamadoSchemas } from "../schemas";
import { DeepPartial } from "typeorm";
import { Chamado } from "../entities";

type ChamadoCreate = z.infer<typeof chamadoSchemas.chamadoCreateSchema>;
type ChamadoReturn = z.infer<typeof chamadoSchemas.chamadoReturnSchema>;
type ChamadoRead = z.infer<typeof chamadoSchemas.chamadoReadSchema>;
type ChamadoUpdate = DeepPartial<Chamado>;

export { ChamadoCreate, ChamadoReturn, ChamadoRead, ChamadoUpdate };
