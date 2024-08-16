import { userServices } from "../services";
import { 
    Request, 
    Response 
} from "express"


const userLogin = async (req: Request, res: Response): Promise<Response> => {
    const token: string = await userServices.userLogin(req.body) 
    
    const usernameLogged = req.body.username
    res.locals = { ...res.locals, usernameLogged }

    return res.status(200).json({ token })
};

export default { userLogin }