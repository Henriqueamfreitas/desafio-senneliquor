import { AppDataSource } from "../database";
import { Hospital } from "../entities";

export default AppDataSource.getRepository(Hospital);