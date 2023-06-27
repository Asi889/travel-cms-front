import { MainNav } from "./sidebar/MainNav";
import { UserNav } from "./sidebar/UserNav";

export const Sidebar = () => {
  return (
    <nav className="w-[var(--sidebar-width)] h-full bg-brand-100 text-brand-900  px-2 flex lg:flex-col lg:border-r border-b lg:border-b-0 border-slate-800">
      <MainNav />
      <UserNav />
    </nav>
  );
};
