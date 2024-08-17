import { Repository } from "typeorm";
import { userSchemas } from "../schemas";
import { z } from "zod";
import { User } from "../entities/User.entity";

type user = z.infer<typeof userSchemas.userCreateSchema>;
type UserRepo = Repository<User>;

export { user, UserRepo };