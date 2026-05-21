"use client";

import { Tour } from "@/generated/prisma/client";
import { DatePicker } from "./date-picker";
import { useState } from "react";
import { SelectQuantity } from "./select-quantity";
import { Controller, useForm } from "react-hook-form";
import { tourFormSchema, TourFormSchema } from "@/constants/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
   className?: string
   item: Tour;
}

export function TourForm({ className, item }: Props) {
   const [open, setOpen] = useState(false);

   const form = useForm<TourFormSchema>({
      resolver: zodResolver(tourFormSchema),
      defaultValues: {
         date: undefined,
         quantity: ""
      }
   });
   const { control } = form;

   const onSubmit = (data: TourFormSchema) => {
      console.log({
         date: data.date,
         quantity: data.quantity
      });
   }

   return (
      <form action="" className="border border-black/10 w-full rounded-xl px-6 py-4" onSubmit={form.handleSubmit(onSubmit)}>
         <h4 className="mb-2">Стоимость</h4>
         <p><span className="text-4xl text-accent font-bold">{item.price} ₽</span> / чел.</p>
         <div className="grid mt-5">
            <div className="grid">
               <label htmlFor="" className="text-[14px]">Дата поездки</label>
               <Controller
                  control={control}
                  name="date"
                  render={({ field }) => (
                     <DatePicker
                        date={field.value}
                        open={open}
                        onOpenChange={setOpen}
                        handleSelect={(date) => {
                           field.onChange(date);
                           if (date) setOpen(false);
                        }}
                     />
                  )}
               />
               <p className="text-red-400 text-sm mt-1 min-h-[20px]">{form.formState.errors.date?.message}</p>
            </div>
            <div className="grid">
               <label htmlFor="" className="text-[14px]">Кол-во</label>
               <Controller
                  control={control}
                  name="quantity"
                  render={({ field }) => (
                     <SelectQuantity
                        value={field.value}
                        onValueChange={(q) => field.onChange(q)}
                     />
                  )}
               />
               <p className="text-red-400 text-sm mt-1 min-h-[20px]">{form.formState.errors.quantity?.message}</p>
            </div>
         </div>
         <button className="mx-auto bg-accent w-full py-3 mt-8 text-background active:translate-y-0.5 rounded-full mb-5" type="submit">В корзину</button>

         <p className="text-center text-gray-500 text-[15px]">Бесплатная отмена за 30 дней</p>
      </form>
   );
}