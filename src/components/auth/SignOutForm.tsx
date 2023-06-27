"use client"; // This is a client component 👈🏽
import { ButtonOld } from "@/components/ButtonOld";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const SignOutForm = () => {
  const { push } = useRouter();

  return (
    <div className="flex justify-center mt-10 gap-x-10">
      <ButtonOld
        onClick={async () => {
          const status = await signOut({
            redirect: false,
            callbackUrl: "/",
          });
          push("/");
        }}
      >
        Log me out
      </ButtonOld>
      <Link href={"/admin/dashboard"}>
        <ButtonOld>Go to Dashboard</ButtonOld>
      </Link>
    </div>
  );
};
