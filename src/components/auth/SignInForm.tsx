"use client"; // This is a client component 👈🏽
import { LoadingButton } from "@/components/LoadingButton";
import { TextField } from "@/components/TextField";
import useForm from "@/src/hooks/useForm";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

export const SignInForm = () => {
  const [loginError, setLoginError] = useState("");
  const [isLoader, setIsLoader] = useState(false);
  const router = useRouter();

  const { inputs, handleChange } = useForm({
    email: "admin@travel.com",
    password: "Admin123$",
  });
  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (isLoader) return;
    const res = await signIn("credentials", {
      email: inputs.email,
      password: inputs.password,
      redirect: false,
    });
    if (!res || res?.error) {
      setLoginError(res?.error || "Something went wrong");
      setIsLoader(false);
      setTimeout(() => {
        setLoginError("");
      }, 2500);
      return;
    }
    router.push("/admin/dashboard");
  };

  return (
    <form
      action=""
      method="post"
      onSubmit={handleLogin}
      className="space-y-4 justify-center items-center"
    >
      <label>
        <span className="text-gray-700">Email</span>
        <TextField
          value={inputs.email}
          onChange={handleChange}
          type="email"
          name="email"
          id="email"
        />
      </label>
      <label>
        <span className="text-gray-700">Password</span>
        <TextField
          type="password"
          onChange={handleChange}
          value={inputs.password}
          name="password"
          id="password"
        />
      </label>
      <div className="text-red-700 text-center animate-bounce">
        {loginError}
      </div>
      <LoadingButton
        loading={isLoader}
        type="submit"
        className="border border-l-slate-900 px-8 py-2 "
      >
        Login
      </LoadingButton>
    </form>
  );
};
