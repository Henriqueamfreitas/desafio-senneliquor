import { z } from "zod";

export const loginFormSchema = z.object({
   username: z.string().nonempty("Username is required"),
   password: z
      .string()
      .nonempty("Password is required")
})

export type TLoginFormValues = z.infer<typeof loginFormSchema>