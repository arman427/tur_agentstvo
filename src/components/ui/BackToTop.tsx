'use client'
import { useShowButton } from "@/hooks/ShowButton";
import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
   const { showButton } = useShowButton({ threshold: 400 });

   const handleClick = () => {
      window.scrollTo({
         top: 0, behavior: "smooth"
      })
   }

   return (
      <button
         className={cn(
            "fixed z-50 right-10 bottom-10 bg-foreground text-background p-3 shadow-lg hover:bg-accent border border-white/30 duration-300",
            showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
         )}
         onClick={handleClick}
         aria-label="Вернуться наверх"
      >
         <ChevronUp size={30} />
      </button>
   )
}