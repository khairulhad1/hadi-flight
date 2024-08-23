import { z } from "zod";

export const formSchema = z.object({
  email: z
    .string({ required_error: "email harus di isi" })
    .email({ message: "email tidak valid" }),
  password: z
    .string({ required_error: "password harus di isi" })
    .min(5, { message: "pasword harus lebih dari 5 karakter" }),
});
