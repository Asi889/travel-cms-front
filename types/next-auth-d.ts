import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    //found in backeiend in auth.service.ts
    user: {
      name: string;
      email: string;
      id: string;
      accessToken: string;
    };
  }
}
