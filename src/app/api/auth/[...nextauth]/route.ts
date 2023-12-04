import { mergeAnonymousCartIntoUserCart } from "@/lib/db/cart";
import { prisma } from "@/lib/db/prisma";
import { env } from "@/lib/env";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import bcrypt from "bcrypt"
import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma as PrismaClient) as Adapter,
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    // CredentialsProvider({
    //   name: 'credentials',
    //   credentials: {
    //     email: { label: 'email', type: 'text' },
    //     password: { label: 'password', type: 'password' }
    //   },
    //   async authorize(credentials) {
    //     if (!credentials?.email || !credentials?.password) {
    //       throw new Error('Invalid credentials')
    //     }

    //     const user = await prisma.user.findUnique({
    //       where: {
    //         email: credentials.email
    //       }
    //     });

    //     if (!user || !user?.hashPassword) {
    //       throw new Error('Invalid credentials')
    //     }

    //     const isCorrectPassword = await bcrypt.compare(
    //       credentials.password,
    //       user.hashPassword
    //     );

    //     if (!isCorrectPassword) {
    //       throw new Error('Invalid credentials')
    //     }

    //     return user;
    //   }
    // })
  ],
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },
  events: {
    async signIn({ user }) {
      await mergeAnonymousCartIntoUserCart(user.id);
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
