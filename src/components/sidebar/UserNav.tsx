"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export const UserNav = () => {
  const { status } = useSession();

  return (
    <div className="mt-auto pb-10">
      <ul>
        {status === "unauthenticated" ? (
          <li>
            <Link className="hover:text-slate-600" href="/auth/signin">
              Login
            </Link>
          </li>
        ) : null}
        {status === "authenticated" ? (
          <li>
            <Link className="hover:text-slate-600" href="/auth/signout">
              logout
            </Link>
          </li>
        ) : null}
        <li>
          <Link className="hover:text-slate-600" href="/auth/register">
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
};
