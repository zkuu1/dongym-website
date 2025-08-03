import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import Credentials from "next-auth/providers/credentials"

import { SignInSchema } from "./lib/zod"
import { compare, compareSync } from "bcrypt-ts"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {strategy: "jwt"},
    pages: {
      signIn: '/login',
    },
    
 providers: [
  Credentials({
    credentials: {
      email: { label: "Email", type: "text" },
      password: { label: "Password", type: "password" },
    },
    authorize: async (credentials) => {
      const validateFields = SignInSchema.safeParse(credentials);

      if (!validateFields.success) {
        return null;
      }

      const { email, password } = validateFields.data;
      const user = await prisma.user.findUnique({ where: { email } });

      if (!user) {
        throw new Error("No user found");
      }

      if (!user.password) {
        throw new Error("User has no password set");
      }

      const passwordMatch = compareSync(password, user.password);
      if (!passwordMatch) {
        throw new Error("Invalid password");
      }

      return {
        id: user.id,
        name: user.name,
        email: user.email,
      };
    },
  }),
],

})