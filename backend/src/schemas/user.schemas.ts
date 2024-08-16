import { z } from "zod";

const userSchema = z.object({
  id: z.number().positive(),
  username: z.string().max(150),
  password: z.string().max(150),
});

const userCreateSchema = userSchema.omit({
  id: true,
});

const userReturnSchema = userSchema.omit({ password: true });

export default{
  userSchema,
  userCreateSchema,
  userReturnSchema,
};