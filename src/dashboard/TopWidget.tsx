"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export const TopWidget = () => {
  const { status } = useSession();
  //     {
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/auth/signin");
  //   },
  // }

  if (status === "loading") {
    return <p>Loading....</p>;
  }
  if (status === "unauthenticated") {
    return <p>Unauthenticated</p>;
  }

  return <div>TopWidget</div>;
};
