//import { PrismaAdapter } from "@next-auth/prisma-adapter";
//import prisma from "@/lib/prisma";
import GoogleProvider from "next-auth/providers/google";
import NextAuth, { NextAuthOptions } from "next-auth";
import { AuthOptions } from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "@/utils/axios";
import { User } from "@/lib/types";

const authOptions: AuthOptions = {
    session: {
      strategy: "jwt",
    },
    //adapter: PrismaAdapter(prisma), 
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        profile(profile) {
          return {
            id: profile.sub,
            name: `${profile.given_name} ${profile.family_name}`,
            email: profile.email,
            image: profile.picture,
            role: profile.role ? profile.role : "user",
          };
        },
      }),
      CredentialsProvider({
        name: "Credentials",
        credentials: {
            username: { label: "Username", type: "text" },
            password: { label: "Password", type: "password" }
          },
        async authorize(credentials) {
            try {
              const res = await axios.post(process.env.NEXT_PUBLIC_TOKEN as string, {
                username: credentials?.username,
                password: credentials?.password,                
              }, {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
              });
    
              const user = res.data;
              if (user) {
                return user;               
              } else {
                return null;
              }
            } catch (error) {
              console.error("Error logging in", error);
              return null;
            }
          },
      }),
    ],
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.user = user;
        }
        return { ...token, ...user };
      },
      async session({ session, token }) {
        session.user = token.user;
        return session;
      },
    },
    secret: process.env.SECRET,
  };

  export default authOptions;