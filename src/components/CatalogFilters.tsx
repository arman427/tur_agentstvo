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
   const currentLabel = SORT_OPTIONS.find(o => o.value === sort)?.label ?? "Сортировка";
   const [open, setOpen] = useState(false);

   return (
      <div className="mt-50">
         <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
               <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm hover:bg-accent/10 transition-colors w-50">
                  {currentLabel}
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
               </button>
            </PopoverTrigger>

            <PopoverContent className="w-56 border-black/10" side="bottom">
               <RadioGroup
                  value={sort}
                  onValueChange={(value) => {
                     setSort(value as SortOption);
                     setOpen(false);
                  }}
               >
                  {SORT_OPTIONS.map(({ value, label }) => (
                     <div key={value} className="flex items-center gap-2 p-2 duration-100 ease hover:bg-accent/10 rounded-xl">
                        <RadioGroupItem value={value} id={value} />
                        <label htmlFor={value} className="cursor-pointer text-sm font-normal">
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