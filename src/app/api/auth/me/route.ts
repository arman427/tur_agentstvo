import { verifyToken } from "@/lib/jwt";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
   const token = (await cookies()).get("token")?.value;

   if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
   }

   try {
      const payload = await verifyToken(token);
      return NextResponse.json(payload);
   } catch (error) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
   }
}