import { AppDataSource } from "../database"
import { User } from "../entities/User.entity"
import { UserRepo } from "../interfaces"

export default AppDataSource.getRepository(User)