import { prisma } from "@/lib/prisma"
import { calcBasketItemTotalPrice } from "./calc-basket-item-total-price";

export const updateBasketTotalCount = async (token: string) => {
   const userBasket = await prisma.basket.findFirst({
      where: { token },
      include: {
         items: {
            include: { tour: true },
            orderBy: { createdAt: "desc" }
         }
      }
   });

   if (!userBasket) return 0;

   const totalCount = userBasket.items.reduce((acc, item) => {
      return acc + calcBasketItemTotalPrice(item);
   }, 0);

   return await prisma.basket.update({
      where: {
         id: userBasket.id
      },
      data: {
         totalCount
      },
      include: {
         items: {
            orderBy: { createdAt: "desc" },
            include: {
               tour: true
            }
         }
      }
   });
}