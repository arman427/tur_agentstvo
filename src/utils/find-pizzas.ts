import { prisma } from "@/lib/prisma";

export interface GetSearchParams {
   sort?: string;
}

export const findPizzas = async (params: GetSearchParams) => {
   const filters = params.sort ?? "";

   const orderBy = (() => {
      switch (filters) {
         case "price_asc": return { price: "asc" as const };
         case "price_desc": return { price: "desc" as const };
         case "rating_asc": return { rating: "asc" as const };
         case "rating_desc": return { rating: "desc" as const };
         default: return { id: "asc" as const };
      }
   })();

   const tours = await prisma.tour.findMany({ orderBy });

   return tours;
}