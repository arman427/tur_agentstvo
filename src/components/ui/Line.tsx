import { cn } from "@/lib/utils"

interface LineProps {
   className?: string
}

export function Line({ className }: LineProps) {
   return (
      <div className={cn("bg-accent rounded-full mx-auto", className)}></div>
   )
}