import { AppDataSource } from "../database";
import { Medico } from "../entities/Medico.entity";

export default AppDataSource.getRepository(Medico);