import { handleError } from "./handleError.middlewares";
import { validateBody } from "./validateBody.middlewares";
import { verifyToken } from "./verifyToken.middlewares";
import { uniqueMedico } from "./uniqueMedico.middlewares";

export default{ 
    validateBody,
    handleError,
    verifyToken,
    uniqueMedico
}