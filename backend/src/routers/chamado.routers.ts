import { Router } from "express";
import middlewares from "../middlewares";
import { chamadoSchemas } from "../schemas";
import { chamadoControllers } from "../controllers";

const chamadoRouter: Router = Router();

chamadoRouter.post("",
    middlewares.verifyToken,
    middlewares.validateBody(chamadoSchemas.chamadoCreateSchema),
    chamadoControllers.create
);

chamadoRouter.get("",
    middlewares.verifyToken,
    chamadoControllers.read
);

chamadoRouter.get("/:nr_chamado",
    middlewares.verifyToken,
    chamadoControllers.retrieve
);

chamadoRouter.patch("/:nr_chamado",
    middlewares.verifyToken,
    chamadoControllers.patch
);

export default { chamadoRouter };
