"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/admin/dashboard", label: "Dashboard" },
];
export const MainNav = () => {
  const { status } = useSession();

  if (status == "loading") {
    return (
      <ul className="flex flex-col bg-slate-500 animate-pulse w-full"></ul>
    );
  }
  if (status === "unauthenticated") {
    return null;
  }
  return (
    <ul className="flex flex-col w-full py-20 gap-2">
      {links.map(({ href, label }) => (
        <li key={href} className="">
          <Link href={href} className="hover:text-slate-700">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
