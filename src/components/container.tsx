import { cn } from "@/lib/utils"

interface Props {
   children: React.ReactNode
   className?: string
}

export function Container({ className, children }: Props) {
   return (
      <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
         {children}
      </div>
   )
}