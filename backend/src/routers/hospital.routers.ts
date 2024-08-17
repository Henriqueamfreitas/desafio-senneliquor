import { Router } from "express"
import middlewares from "../middlewares"
import { hospitalSchemas } from "../schemas"
import { hospitalControllers } from "../controllers"

const hospitalRouter: Router = Router()

hospitalRouter.post("",
    middlewares.verifyToken,
    middlewares.validateBody(hospitalSchemas.hospitalCreateSchema), 
    middlewares.uniqueHospital,
    hospitalControllers.create
)

hospitalRouter.get("",
    middlewares.verifyToken,
    hospitalControllers.read
)

hospitalRouter.get("/:cd_hospital", 
    middlewares.verifyToken,
    hospitalControllers.retrieve
)

export default {hospitalRouter}