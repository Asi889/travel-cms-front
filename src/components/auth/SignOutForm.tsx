"use client"; // This is a client component 👈🏽
import { Button } from "@/src/ui/Button";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const SignOutForm = () => {
  const { push } = useRouter();

  return (
    <div className="flex justify-center mt-10 gap-x-10">
      <Button
        onClick={async () => {
          const status = await signOut({
            redirect: false,
            callbackUrl: "/",
          });
          push("/");
        }}
      >
        Log me out
      </Button>
      <Link href={"/admin/dashboard"}>
        <Button>Go to Dashboard</Button>
      </Link>
    </div>
  );
};
