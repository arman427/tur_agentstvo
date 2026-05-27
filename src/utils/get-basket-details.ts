import { IBasket } from "@/services/types/basket-types";
import { calcBasketItemTotalPrice } from "./calc-basket-item-total-price";

export interface IBasketItem {
   id: number;
   name: string;
   imageUrl: string
   price: number;
   quantity: number;
   disabled: boolean;
}

export interface ReturnProps {
   items: IBasketItem[];
   totalCount: number;
}

export const getBasketDetails = (data: IBasket): ReturnProps => {
   const items = data.items.map((item) => ({
      id: item.id,
      name: item.tour.title,
      quantity: item.quantity,
      imageUrl: item.tour.imageUrl ?? '',
      price: calcBasketItemTotalPrice(item),
      disabled: false,
   }));

   return {
      items,
      totalCount: data.totalCount
   }
}