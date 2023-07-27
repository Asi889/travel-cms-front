"use client";

import { DashboardIcon } from "@/components/icons/Dashboard.icon";
import { HomeIcon } from "@/components/icons/Home.icon";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const links = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/admin/dashboard", label: "Dashboard", icon: DashboardIcon },
];
export const MainNav = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <ul className="flex flex-col bg-brand-200 animate-pulse w-full"></ul>
    );
  }
  if (status === "unauthenticated") {
    return null;
  }

  const isLinkActive = (href: string) => {
    return window.location.pathname === href;
  };
  return (
    <ul className="flex lg:flex-col items-center lg:w-full gap-y-4 gap-x-1">
      {links.map(({ href, label, icon: Icon }) => (
        <li
          key={href}
          className={`hover:text-brand-900 text-slate-700 bg-opacity-10 rounded hover:bg-slate-50 p-2 transition w-full ${
            isLinkActive(href) ? "bg-slate-50  text-brand-900" : ""
          }`}
        >
          <Link
            title={label}
            href={href}
            className="flex flex-col justify-center items-center w-full h-full gap-1"
          >
            <Icon />
            <div className="text-xs text-slate-700 text-center hidden lg:block">
              {label}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
