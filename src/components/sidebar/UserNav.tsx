"use client";
import { AddUserIcon } from "@/components/icons/AddUser.icon";
import { LoginIcon } from "@/components/icons/Login.icon";
import { LogoutIcon } from "@/components/icons/Logout.icon";
import { UserIcon } from "@/components/icons/User.icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { User } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const AvatarButton = () => {
  const { data } = useSession();

  const userInitial = data?.user?.name
    ? data.user.name
        .split(" ")
        .map((n) => n[0])
        .join(" ")
    : "";
  return (
    <Avatar>
      <AvatarImage>
        <UserIcon />
      </AvatarImage>
      <AvatarFallback className="uppercase bg-transparent border-brand-900 border">
        {userInitial ? userInitial : <User />}
      </AvatarFallback>
    </Avatar>
  );
};
export const UserNav = () => {
  const { status } = useSession();

  const linkClasses =
    "hover:text-slate-600 block rounded hover:bg-gray-100 p-2";
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="lg:mx-auto lg:mt-auto lg:mb-10 ml-auto"
          type="button"
        >
          <AvatarButton />
        </button>
      </PopoverTrigger>
      <PopoverContent className="lg:translate-x-3 lg:-translate-y-2">
        <ul className="capitalize">
          {status === "unauthenticated" ? (
            <li>
              <Link className={linkClasses} href="/auth/signin">
                <div className="flex gap-x-1">
                  <LoginIcon />
                  <span>login</span>
                </div>
              </Link>
            </li>
          ) : null}
          {status === "authenticated" ? (
            <li>
              <Link className={linkClasses} href="/auth/signout">
                <div className="flex gap-x-1">
                  <LogoutIcon />
                  <span>logout</span>
                </div>
              </Link>
            </li>
          ) : null}
          <li>
            <Link className={linkClasses} href="/auth/register">
              <div className="flex gap-x-1">
                <AddUserIcon />
                <span>register</span>
              </div>
            </Link>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};
