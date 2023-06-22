import { SignOutForm } from "@/src/components/auth/SignOutForm";

export default async function Logout() {
  return (
    <div className="min-h-screen grid place-content-center pb-40">
      <h1 className="text-center text-2xl">Logging out...</h1>
      <SignOutForm />
    </div>
  );
}
