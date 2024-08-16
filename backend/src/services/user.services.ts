import { compare } from "bcryptjs"
import { AppError } from "../errors/App.error"
import { userRepo } from "../repositories"
import { User } from "../entities/User.entity"
import { sign } from "jsonwebtoken"
import { user } from "../interfaces"

const userLogin = async (payload: user): Promise<string> => {
    const { username, password } = payload
    const user: User | null = await userRepo.findOne({ where: { username } })
    
    if(!user){
        throw new AppError("Invalid credentials", 401)
    }

    const passwordIsValid: boolean = await compare (password, user.password) 
    
    if(!passwordIsValid){
        throw new AppError("Invalid credentials", 401)
    }

    const secretKey: string = process.env.SECRET_KEY || 'default_secret'; 
    const expiresIn: string = process.env.EXPIRES_IN || '1h'; 

    const token = sign({
        username: user.username, id: user.id
    }, String(secretKey), {
        expiresIn: expiresIn, subject: String(user.id)
    })

    return token 
}

export default {userLogin}