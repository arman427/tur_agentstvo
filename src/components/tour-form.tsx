"use client";

import { Tour } from "@/generated/prisma/client";
import { DatePicker } from "./date-picker";
import { Input } from "./ui/input";
import { useState } from "react";

interface Props {
   className?: string
   item: Tour;
}

export function TourForm({ className, item }: Props) {
   const [date, setDate] = useState<Date>();
   const [open, setOpen] = useState(false);

   const handleSelectDate = (selectedDate: Date | undefined) => {
      setDate(selectedDate);
      if (selectedDate) {
         setOpen(false);
      }
   }


   return (
      <form action="" className="border border-black/10 w-full rounded-xl px-6 py-4">
         <h4 className="mb-2">Стоимость</h4>
         <p><span className="text-4xl text-accent font-bold">{item.price} ₽</span> / чел.</p>
         <div className="grid gap-5 mt-5">
            <div className="grid">
               <label htmlFor="" className="text-[14px]">Дата поездки</label>
               <DatePicker
                  date={date}
                  open={open}
                  onOpenChange={setOpen}
                  handleSelect={handleSelectDate}
               />
            </div>
            <div>
               <label htmlFor="" className="text-[14px]">Кол-во</label>
               <Input className="h-10" />
            </div>
         </div>
         <button className="mx-auto bg-accent w-full py-3 mt-8 text-background active:translate-y-0.5 rounded-full mb-5" type="submit">В корзину</button>

         <p className="text-center text-gray-500 text-[15px]">Бесплатная отмена за 30 дней</p>
      </form>
   );
}