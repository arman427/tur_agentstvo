import { Basket, BasketItem, Tour } from "@/generated/prisma/client";

export type IBasketItem = BasketItem & {
   tour: Tour
}

export interface IBasket extends Basket {
   items: IBasketItem[];
}

export interface CreateBasketItemValues {
   tourId?: number;
   quantity: number;
}