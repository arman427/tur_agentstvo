import { prisma } from "@/lib/prisma"

export const findOrCreateBasket = async (token: string) => {
   let basket = await prisma.basket.findUnique({
      where: { token }
   });

   if (!basket) {
      basket = await prisma.basket.create({
         data: { token }
      });
   }

   return basket;
}