import { useEffect, useState } from "react"

export const useShowButton = ({ threshold = 400 }) => {
   const [showButton, setShowButton] = useState(false)

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > threshold) {
            setShowButton(true)
         } else {
            setShowButton(false)
         }
      }
      window.addEventListener("scroll", handleScroll)
      return () => {
         window.removeEventListener("scroll", handleScroll)
      }
   }, [threshold]);

   return { showButton }
}