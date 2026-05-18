import { prisma } from "@/lib/prisma";

export interface GetSearchParams {
   filters?: string;
}

export const findPizzas = async (params: GetSearchParams) => {
   const filters = await params.filters?.split(",") ?? [];

   const tours = await prisma.tour.findMany({
      orderBy: filters.includes("createdAt")
         ? { createdAt: "desc" }
         : filters.includes("price")
            ? { price: "asc" }
            : { id: "asc" },
   });

   return tours;
}