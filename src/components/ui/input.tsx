import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
   return (
      <input
         type={type}
         data-slot="input"
         className={cn(
            "h-9 w-full min-w-0 rounded-md px-3 py-1 shadow-xs transition-all outline-none",
            "border border-black/20 bg-transparent",


            "focus-visible:border-gray-500 focus-visible:ring-[1px] focus-visible:ring-gray-500",

            "disabled:pointer-events-none disabled:opacity-50",
            className
         )}
         {...props}
      />
   )
}

export { Input }
