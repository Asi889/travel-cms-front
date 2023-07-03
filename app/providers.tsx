"use client";

import { setTokenGetter } from "@/src/auth/auth";
import { SessionProvider, useSession } from "next-auth/react";
type Props = {
  children?: React.ReactNode;
  token: string;
};

export const NextAuthProvider = ({ children, token }: Props) => {
  setTokenGetter(() => token);
  return <SessionProvider>{children}</SessionProvider>;
};
