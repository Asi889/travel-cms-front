import { MainNav } from "./sidebar/MainNav";
import { UserNav } from "./sidebar/UserNav";

export const Sidebar = () => {
  return (
    <nav className="w-[var(--sidebar-width)] h-full bg-slate-200  px-2 flex lg:flex-col">
      <MainNav />
      <UserNav />
    </nav>
  );
};
