import z from "zod";
import { isValidPhoneNumber } from 'libphonenumber-js';
export const passwordSchema = z.string().min(4, "Минимум 4 символа");

export const formLoginSchema = z.object({
   email: z.email("Некорректный email").min(5, "Минимум 5 символов"),
   password: passwordSchema,
});

export const formRegisterSchema = formLoginSchema.extend({
   fullName: z.string().min(3, "Минимум 3 символа"),
   phone: z.string().refine((val) => isValidPhoneNumber(val, 'RU'), { message: 'Некорректный номер телефона' }),
})

export type TFormLoginValues = z.infer<typeof formLoginSchema>;
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;