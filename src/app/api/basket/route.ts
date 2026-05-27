import { prisma } from "@/lib/prisma";
import { CreateBasketItemValues } from "@/services/types/basket-types";
import { findOrCreateBasket } from "@/utils/find-or-create-basket";
import { updateBasketTotalCount } from "@/utils/update-basket-total-count";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
   try {
      const token = req.cookies.get("basket-token")?.value;

      if (!token) {
         return NextResponse.json({ totalCount: 0, items: [] });
      }

      const userBasket = await prisma.basket.findFirst({
         where: { token },
         include: {
            items: {
               orderBy: { createdAt: "desc" },
               include: { tour: true }
            }
         }
      });

      return NextResponse.json(userBasket);
   } catch (error) {
      console.log("[BASKET GET] SERVER ERROR", error);
      return NextResponse.json(
         { message: "Не удалось получить корзину" },
         { status: 500 },
      );
   }
}

export async function POST(req: NextRequest) {
   try {
      let token = req.cookies.get("basket-token")?.value;

      if (!token) {
         token = crypto.randomUUID();
      }

      const userBasket = await findOrCreateBasket(token);
      const data = (await req.json()) as CreateBasketItemValues;

      if (!data.tourId) {
         return NextResponse.json(
            { message: "Не указан id тура" },
            { status: 400 }
         )
      }

      const findBasketItem = await prisma.basketItem.findFirst({
         where: {
            basketId: userBasket.id,
            tourId: data.tourId
         }
      });

      if (findBasketItem) {
         await prisma.basketItem.update({
            where: {
               id: findBasketItem.id
            },
            data: {
               quantity: findBasketItem.quantity + data.quantity
            }
         });
      } else {
         await prisma.basketItem.create({
            data: {
               basketId: userBasket.id,
               tourId: data.tourId,
               quantity: data.quantity
            }
         });
      }

      const updatedUserBasket = await updateBasketTotalCount(token);
      const res = NextResponse.json(updatedUserBasket);

      res.cookies.set({
         name: "basket-token",
         value: token,
         httpOnly: true,
         secure: true,
         sameSite: "lax"
      });

      return res;
   } catch (error) {
      console.log("[BASKET POST] SERVER ERROR", error);
      return NextResponse.json(
         { message: "Не удалось создать корзину" },
         { status: 500 }
      )
   }
}