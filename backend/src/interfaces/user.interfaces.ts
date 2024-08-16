import { userSchemas } from "../schemas";
import { z } from "zod";

type user = z.infer<typeof userSchemas.userCreateSchema>;
type userReturn = { token: string };

export { user, userReturn };