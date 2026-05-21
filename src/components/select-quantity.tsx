import { ListOrdered } from "lucide-react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";

interface Props {
   className?: string
   value?: string
   onValueChange?: (value: string) => void
}

export function SelectQuantity({ className, value, onValueChange }: Props) {
   return (
      <Select value={value} onValueChange={onValueChange}>
         <SelectTrigger className="flex h-10 items-center gap-2 w-full min-w-0 rounded-md px-3 py-1 shadow-xs transition-all outline-none border border-black/20 bg-transparent">
            <ListOrdered className="text-black/60" size={30} />
            <SelectValue placeholder="Выбрать количество" />
         </SelectTrigger>
         <SelectContent className="bg-white w-90 border-black/20">
            <SelectGroup>
               <SelectLabel>Количество билетов</SelectLabel>
               {Array.from({ length: 10 }, (_, i) => (i + 1)).map(value => (
                  <SelectItem key={value} value={value.toString()}>{value}</SelectItem>
               ))}
            </SelectGroup>
         </SelectContent>
      </Select >
   );
}