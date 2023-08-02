"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";

export const TopWidget = () => {
  const { status, data } = useSession();

  if (status === "loading") {
    return (
      <section className="py-6 flex justify-between border-b border-brand-200 mb-2">
        <p>Loading....</p>;
      </section>
    );
  }
  if (status === "unauthenticated" || !data) {
    return <p>Unauthenticated</p>;
  }

  return (
    <section className="py-6 flex justify-between border-b border-brand-200 mb-2">
      <div>
        <h1 className="text-2xl leading-tight font-bold dark:text-white text-slate-800">
          Hey there, {data.user?.name}!
        </h1>
        <h2 className="text-base dark:text-slate-400 text-slate-600">
          Welcome to your travel CMS dashboard. Here you can manage your tours
        </h2>
      </div>

      <div className="mt-6">
        <Button className="px-10">
          <Link href="/admin/tours">
            <span>Edit Last Tour</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};
