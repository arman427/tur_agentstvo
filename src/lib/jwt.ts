import { SignJWT, jwtVerify } from "jose"

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET!);

export interface TokenPayload {
   id: number
   email: string
}

export async function signToken(data: TokenPayload): Promise<string> {
   return await new SignJWT({ id: data.id, email: data.email })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("7d")
      .sign(SECRET);
}


export async function verifyToken(token: string): Promise<TokenPayload | null> {
   try {
      const { payload } = await jwtVerify(token, SECRET);
      return payload as unknown as TokenPayload;
   } catch {
      return null;
   }
}