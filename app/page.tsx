import { authOptions } from "@/src/auth/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/signin");
  }
  return (
    <div className="w-full h-screen grid place-content-center text-2xl text-center text-cyan-800">
      Home Page. <br />
      Only authenticated users can see this page.
    </div>
  );
}
