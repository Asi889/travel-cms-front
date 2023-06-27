import { ButtonOld } from "@/components/ButtonOld";
import { authOptions } from "@/src/auth/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-full h-screen grid place-content-center gap-10">
      <h1 className=" text-2xl text-center text-cyan-800"> Home Page.</h1>
      <h2 className=" text-3xl text-center text-cyan-800">
        {session ? `Welcome ${session?.user?.name}` : "You are not logged in"}
      </h2>
      <div className="flex gap-6">
        {!session ? (
          <ButtonOld>
            <Link href="/auth/signin">Log In</Link>
          </ButtonOld>
        ) : (
          <ButtonOld>
            <Link href="/auth/signout">Log Out</Link>
          </ButtonOld>
        )}
        <ButtonOld>
          <Link href="/auth/register">Register</Link>
        </ButtonOld>
      </div>
    </div>
  );
}
