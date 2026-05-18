import bcrypt from 'bcrypt';
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { signToken } from '@/lib/jwt';

export async function POST(req: Request) {
   const { email, password } = await req.json();
   if (!email || !password) {
      return NextResponse.json({ error: "Некорректные данные" }, { status: 400 });
   }

   const user = await prisma.users.findFirst({
      where: {
         email
      }
   });

   if (!user) {
      return NextResponse.json({ error: "Такого пользователя не существует" }, { status: 400 });
   }

   const isPasswordValid = await bcrypt.compare(password, user.password);

   if (!isPasswordValid) {
      return NextResponse.json({ error: "Неверный пароль" }, { status: 401 });
   }

   const token = await signToken({ id: user.id, email: user.email });

   const response = NextResponse.json({
      message: "Успешный вход",
      user: { id: user.id, email: user.email, }
   });

   response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7
   });

   return response;
}