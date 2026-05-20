"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarDays } from "lucide-react"

import { Calendar } from "@/components/ui/calendar"
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover"
import { ru } from "date-fns/locale"

interface Props {
   date: Date | undefined;
   open: boolean;
   onOpenChange: (open: boolean) => void;
   handleSelect: (selectedDate: Date | undefined) => void;
}

export function DatePicker({ date, open, onOpenChange, handleSelect }: Props) {
   return (
      <Popover open={open} onOpenChange={onOpenChange}>
         <PopoverTrigger asChild>
            <button
               data-empty={!date}
               className="flex h-10 items-center gap-2 w-full min-w-0 rounded-md px-3 py-1 shadow-xs transition-all outline-none border border-black/20 bg-transparent"
            >
               <CalendarDays className="text-black/60" size={22} />
               {date ? format(date, "dd MMMM yyyy", { locale: ru }) : <span>Выберите дату</span>}
            </button>
         </PopoverTrigger>
         <PopoverContent className="w-auto p-0" align="start">
            <Calendar
               mode="single"
               selected={date}
               onSelect={handleSelect}
               defaultMonth={date}
               locale={ru}
            />
         </PopoverContent>
      </Popover>
   )
}
