import { Router } from "express"
import { userControllers } from "../controllers"
import middlewares from "../middlewares"
import { userSchemas } from "../schemas"

const userRouter: Router = Router()

userRouter.post("",
    middlewares.validateBody(userSchemas.userCreateSchema), 
    userControllers.userLogin
)

export default {userRouter}