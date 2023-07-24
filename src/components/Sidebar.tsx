"use client";
import { MainNav } from "./sidebar/MainNav";
import { UserNav } from "./sidebar/UserNav";

export const Sidebar = () => {
  return (
    <nav
      className={`w-[var(--sidebar-width)] h-full dark:bg-brand-400 bg-brand-100 text-brand-900  
    px-2 flex lg:flex-col lg:border-r border-b lg:border-b-0 border-slate-500 shadow py-1 lg:py-6`}
    >
      <MainNav />
      <UserNav />
    </nav>
  );
};
