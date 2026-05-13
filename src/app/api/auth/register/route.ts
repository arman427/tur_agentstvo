import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { signToken } from "@/lib/jwt";

export async function POST(req: Request) {
   try {
      const { fullName, email, phone, password } = await req.json();
      if (!fullName || !email || !phone || !password) {
         return null;
      }

      const findUser = await prisma.users.findFirst({
         where: {
            email
         }
      });

      if (findUser) {
         return NextResponse.json({ error: "Пользователь с таким email уже существует" }, { status: 400 });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await prisma.users.create({
         data: {
            fullName,
            email,
            phone,
            password: hashedPassword
         }
      });

      const token = await signToken({ id: user.id, email: user.email });
      const response = NextResponse.json({ message: "OK" }, { status: 201 });
      response.cookies.set("token", token, {
         httpOnly: true,
         secure: process.env.NODE_ENV === "production",
         sameSite: "strict",
         maxAge: 60 * 60 * 24 * 7
      });
      return response;
   } catch (error) {
      console.error(error);
      return NextResponse.json({ error: "[REGISTER] Ошибка сервера" }, { status: 500 });
   }
}