import { FILTERS } from "@/constants";
import { Checkbox } from "./ui/checkbox";

export function CatalogFilters() {
   return (
      <div className="flex flex-col gap-3 pt-40">
         <h1 className="text-[20px] font-bold">Сортировка по:</h1>
         {
            FILTERS.map((item, index) => (
               <div className="flex items-center gap-2" key={item.id}>
                  <Checkbox
                     key={index}
                     value={item.value}
                     className="border-none bg-gray-100 w-5 h-5 !rounded-md"
                     id={`checkbox-${String(item.id)}-${String(item.value)}`}
                  />
                  <label
                     className="cursor-pointer"
                     htmlFor={`checkbox-${String(item.id)}-${String(item.value)}`}
                  >
                     {item.label}
                  </label>
               </div>
            ))
         }
      </div>
   )
}