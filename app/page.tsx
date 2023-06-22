import { authOptions } from "@/src/auth/auth";
import { Button } from "@/src/ui/Button";
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
          <Button>
            <Link href="/auth/signin">Log In</Link>
          </Button>
        ) : (
          <Button>
            <Link href="/auth/signout">Log Out</Link>
          </Button>
        )}
        <Button>
          <Link href="/auth/register">Register</Link>
        </Button>
      </div>
    </div>
  );
}
