import { useCallback, useState } from "react"

export const useSet = <T>(initialValue = new Set<T>()) => {
   const [set, setSet] = useState(new Set<T>(initialValue));

   const toggle = useCallback((value: T) => {
      setSet(prev => {
         const newSet = new Set(prev);
         if (newSet.has(value)) {
            newSet.delete(value);
         } else {
            newSet.add(value);
         }
         return newSet;
      })
   }, []);

   const has = useCallback((value: T) => {
      return set.has(value);
   }, [set]);

   return [set, { toggle, has }] as const;
}