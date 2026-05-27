import { prisma } from "@/lib/prisma";
import { updateBasketTotalCount } from "@/utils/update-basket-total-count";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
   try {
      const { id } = await params;
      const token = req.cookies.get("basket-token")?.value;

      if (!token) {
         return NextResponse.json(
            { message: "Необходима авторизация" },
            { status: 401 }
         );
      }

      const basketItem = await prisma.basketItem.findFirst({
         where: {
            id: Number(id)
         }
      });

      if (!basketItem) {
         return NextResponse.json(
            { message: "Этого тура нет в корзине" },
            { status: 404 }
         );
      }

      await prisma.basketItem.delete({
         where: {
            id: Number(id)
         }
      });

      const updatedUserBasket = await updateBasketTotalCount(token);
      return NextResponse.json(updatedUserBasket);
   } catch (error) {
      console.log("[BASKET DELETE] SERVER ERROR", error);
      return NextResponse.json(
         { message: "Не удалось удалить тур из корзины" },
         { status: 500 }
      );
   }
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
   try {
      const { id } = await params;
      const data = (await req.json()) as { quantity: number };
      const token = req.cookies.get("basket-token")?.value;

      if (!token) {
         return NextResponse.json(
            { message: "Необходима авторизация" },
            { status: 401 }
         );
      }

      const basketItem = await prisma.basketItem.findFirst({
         where: {
            id: Number(id)
         }
      });

      if (!basketItem) {
         return NextResponse.json(
            { message: "Этого тура нет в корзине" },
            { status: 404 }
         );
      }

      await prisma.basketItem.update({
         where: {
            id: Number(id)
         },
         data: {
            quantity: data.quantity
         }
      });

      const updatedUserBasket = await updateBasketTotalCount(token);
      return NextResponse.json(updatedUserBasket);
   } catch (error) {
      console.log("[BASKET PATCH] SERVER ERROR", error);
      return NextResponse.json(
         { message: "Не удалось обновить корзину" },
         { status: 500 }
      )
   }
}