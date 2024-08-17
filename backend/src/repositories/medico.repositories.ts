import { AppDataSource } from "../database";
import { Medico } from "../entities";
    
export default AppDataSource.getRepository(Medico);