import { Router } from "express"
import middlewares from "../middlewares"
import { medicoSchemas } from "../schemas"
import { medicoControllers } from "../controllers"

const medicoRouter: Router = Router()

medicoRouter.post("",
    middlewares.verifyToken,
    middlewares.validateBody(medicoSchemas.medicoCreateSchema), 
    middlewares.uniqueMedico,
    medicoControllers.create
)

medicoRouter.get("",
    middlewares.verifyToken,
    medicoControllers.read
)

medicoRouter.get("/:cd_medico", 
    middlewares.verifyToken,
    medicoControllers.retrieve
)

export default {medicoRouter}