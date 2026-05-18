"use client";

import { useSet } from "@/hooks/useSet";
import { CatalogFilters } from "./CatalogFilters";
import qs from "qs";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { SortOption } from "@/constants/sort.data";

interface Props {
   className?: string
}

export function CatalogFiltersClient({ className }: Props) {
   const [sort, setSort] = useState<SortOption>("");
   const router = useRouter();
   const pathname = usePathname();

   useEffect(() => {
      if (!sort) {
         router.replace(pathname);
      } else {
         const filters = {
            sort: sort
         }

         const queryString = qs.stringify(filters, { arrayFormat: "comma" });

         const timeOutId = setTimeout(() => {
            router.push(`${pathname}?${queryString}`, { scroll: false });
         }, 200)
         return () => clearTimeout(timeOutId);
      }
   }, [sort]);

   return (
      <CatalogFilters
         sort={sort}
         setSort={setSort}
      />
   );
}