//import NextAuth from "next-auth";
//import { User } from "@prisma/client";
//import { JWT } from "next-auth/jwt";

export type User = {
//export interface User {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
  role: string | null;
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: UserId
    role: string | null
  }
}

declare module 'next-auth' {
  interface Session {
    user: User & {
      id: UserId
      role: string | null
    } & DefaultSession["user"]
  }
}