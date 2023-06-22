import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { UserService } from "../services/user.service";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "myemail@gwalla.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const res = await fetch(
          `${BACKEND_URL}/api/auth/callback/credentials`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          }
        );

        const user = await res.json();
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        }
        throw new Error("Invalid credentials");
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account }) {
      return token;
    },
  },
};
