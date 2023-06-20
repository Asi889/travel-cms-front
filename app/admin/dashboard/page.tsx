import { authOptions } from "@/src/auth/auth";
import { TopWidget } from "@/src/dashboard/TopWidget";
import { getServerSession } from "next-auth";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <TopWidget />
      <code>{JSON.stringify(session, null, 2)}</code>
    </div>
  );
}
