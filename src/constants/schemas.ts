import z from "zod";

export const tourFormSchema = z.object({
   date: z.date({ message: "Выберите дату поездки" }),
   quantity: z.string().min(1, { message: "Выберите количество билетов" })
});

export type TourFormSchema = z.infer<typeof tourFormSchema>;