import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./db";


export const authOptions = {
    adapter: PrismaAdapter(prisma) as any,
    providers: [
        GitHubProvider({
          clientId: process.env.GITHUB_ID as string ,
          clientSecret: process.env.GITHUB_SECRET as string
        })
      ],
      secret: process.env.NEXTAUTH_SECRET
} satisfies NextAuthOptions;