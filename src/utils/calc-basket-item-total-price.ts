import { IBasketItem } from "@/services/types/basket-types";

export const calcBasketItemTotalPrice = (item: IBasketItem) => {
   return item.tour.price * item.quantity;
}