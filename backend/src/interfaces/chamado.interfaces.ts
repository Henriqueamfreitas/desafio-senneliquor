import { z } from "zod";
import { chamadoSchemas } from "../schemas";
import { DeepPartial } from "typeorm";
import { Chamado } from "../entities";

type ChamadoCreate = z.infer<typeof chamadoSchemas.chamadoCreateSchema>;
type ChamadoReturn = z.infer<typeof chamadoSchemas.chamadoReturnSchema>;
type ChamadoRead = z.infer<typeof chamadoSchemas.chamadoReadSchema>;
type ChamadoUpdate = Omit<DeepPartial<Chamado>, "hospital"> & {
    hospital?: number;
};
  
type ChamadoUpdate2 = Omit<DeepPartial<ChamadoUpdate>, "medico"> & {
    medico?: number;
};

export { ChamadoCreate, ChamadoReturn, ChamadoRead, ChamadoUpdate, ChamadoUpdate2 };
