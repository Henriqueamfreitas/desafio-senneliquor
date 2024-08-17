import { handleError } from "./handleError.middlewares";
import { validateBody } from "./validateBody.middlewares";
import { verifyToken } from "./verifyToken.middlewares";
import { uniqueMedico } from "./uniqueMedico.middlewares";
import { uniqueHospital } from "./uniqueHospital.middlewares";

export default{ 
    validateBody,
    handleError,
    verifyToken,
    uniqueMedico,
    uniqueHospital
}