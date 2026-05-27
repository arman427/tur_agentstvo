"use client";

import { SORT_OPTIONS, SortOption } from "@/constants/sort.data";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface Props {
   sort: SortOption;
   setSort: (value: SortOption) => void;
}

export function CatalogFilters({ sort, setSort }: Props) {
   const currentLabel =
      SORT_OPTIONS.find((o) => o.value === sort)?.label ?? "по умолчанию";
   const [open, setOpen] = useState(false);

   return (
      <div className="mt-50">
         <Popover open={open} onOpenChange={setOpen}>
            <div className="flex items-center gap-2">
               <p>Сортировка:</p>
               <PopoverTrigger asChild>
                  <button className="flex items-center gap-2 rounded-lg text-blue-500 hover:text-accent duration-200 ease-in-out">
                     {currentLabel}
                  </button>
               </PopoverTrigger>
            </div>

            <PopoverContent className="w-60 border-black/10" side="bottom">
               <RadioGroup
                  value={sort}
                  onValueChange={(value) => {
                     setSort(value as SortOption);
                     setOpen(false);
                  }}
               >
                  {SORT_OPTIONS.map(({ value, label }) => (
                     <div
                        key={value}
                        className="flex items-center gap-2 p-2 duration-50 ease hover:bg-accent/5"
                     >
                        <RadioGroupItem value={value} id={value} />
                        <label
                           htmlFor={value}
                           className="cursor-pointer text-sm font-normal"
                        >
                           {label}
                        </label>
                     </div>
                  ))}
               </RadioGroup>
            </PopoverContent>
         </Popover>
      </div>
   );
}
