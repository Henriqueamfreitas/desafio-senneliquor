import { AppDataSource } from "../database"
import { User } from "../entities/User.entity"
// import { UserRepo } from "../interfaces"

const userRepo: any = AppDataSource.getRepository(User)

export default userRepo 