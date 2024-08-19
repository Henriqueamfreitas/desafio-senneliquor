import { AppDataSource } from "../database";
import { Chamado } from "../entities";

export default AppDataSource.getRepository(Chamado);

