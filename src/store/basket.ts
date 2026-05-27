import { Api } from "@/services/api-client";
import { getBasketDetails, IBasketItem } from "@/utils/get-basket-details";
import { create } from "zustand";

export interface IBasketStoreState {
   items: IBasketItem[];
   loading: boolean;
   error: boolean;
   totalCount: number;

   fetchBasketItems: () => Promise<void>;
   updateBasketItem: (id: number, quantity: number) => Promise<void>;
   deleteBasketItem: (id: number) => Promise<void>;
   addBasketItem: (id: number) => Promise<void>;
}

export const useBasketStore = create<IBasketStoreState>((set, get) => ({
   items: [],
   loading: true,
   error: false,
   totalCount: 0,

   fetchBasketItems: async () => {
      try {
         set({ loading: true, error: false });
         const data = await Api.fetchBasket.getBasket();
         set(getBasketDetails(data));
      } catch (error) {
         console.error(error);
         set({ error: true });
      } finally {
         set({ loading: false });
      }
   },

   updateBasketItem: async (id: number, quantity: number) => {
      try {
         set((state) => ({
            loading: true,
            error: false,
            items: state.items.map((item) => item.id === id ? { ...item, disabled: true } : item)
         }));
         const data = await Api.fetchBasket.updateBasketItem(id, quantity);
         set(getBasketDetails(data));
      } catch (error) {
         console.error(error);
         set({ error: true });
      } finally {
         set((state) => ({
            loading: false,
            items: state.items.map((item) => item.id === id ? { ...item, disabled: false } : item)
         }));
      }
   },

   deleteBasketItem: async () => {

   },

   addBasketItem: async () => {

   }
}))