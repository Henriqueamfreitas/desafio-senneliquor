import { z } from "zod";
import { chamadoSchemas } from "../schemas";

type ChamadoCreate = z.infer<typeof chamadoSchemas.chamadoCreateSchema>;
type ChamadoReturn = z.infer<typeof chamadoSchemas.chamadoReturnSchema>;
type ChamadoRead = z.infer<typeof chamadoSchemas.chamadoReadSchema>;

export { ChamadoCreate, ChamadoReturn, ChamadoRead };
