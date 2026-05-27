import { API } from "./config";
import { axiosInstanse } from "./instance";
import { CreateBasketItemValues, IBasket } from "./types/basket-types";

export const getBasket = async (): Promise<IBasket> => {
   const { data } = await axiosInstanse.get<IBasket>(API.BASKET);
   return data;
}

export const addBasketItem = async (values: CreateBasketItemValues): Promise<IBasket> => {
   const { data } = await axiosInstanse.post<IBasket>(API.BASKET, values);
   return data;
}

export const updateBasketItem = async (id: number, quantity: number): Promise<IBasket> => {
   const { data } = await axiosInstanse.patch<IBasket>(`${API.BASKET}/${id}`, { quantity });
   return data;
}

export const deleteBasketItem = async (id: number) => {
   const { data } = await axiosInstanse.delete<IBasket>(`${API.BASKET}/${id}`);
   return data;
}