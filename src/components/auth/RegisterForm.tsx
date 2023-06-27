"use client";

import { LoadingButton } from "@/components/LoadingButton";
import { TextField } from "@/components/TextField";
import useForm from "@/src/hooks/useForm";
import { CreateUserDto, UserService } from "@/src/services/user.service";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function RegisterForm() {
  const { push } = useRouter();
  const [isLoader, setIsLoader] = useState(false);
  const { inputs, handleChange } = useForm({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLoader) return;
    setIsLoader(true);
    const createUserDto: CreateUserDto = {
      email: inputs.email,
      password: inputs.password,
      name: inputs.firstName + " " + inputs.lastName,
    };
    try {
      const res = await UserService.register(createUserDto);
      if (!res) {
        throw new Error("Something went wrong");
      }
      await signIn("credentials", {
        email: inputs.email,
        password: inputs.password,
        redirect: false,
      });
      push("/admin/dashboard");
    } catch (error) {
      // TODO handle error
    } finally {
      setIsLoader(false);
    }
  };
  return (
    <div className="mt-10">
      <form action="" method="post" onSubmit={onSubmit}>
        <div className="flex flex-col gap-y-8 max-w-lg">
          <TextField
            value={inputs.email}
            onChange={handleChange}
            type="email"
            name="email"
            label="Email"
            placeholder="peterparker@spiderman.com"
          />
          <TextField
            value={inputs.firstName}
            onChange={handleChange}
            type="text"
            name="firstName"
            label="First Name"
          />
          <TextField
            value={inputs.lastName}
            onChange={handleChange}
            type="text"
            name="lastName"
            label="Last Name"
          />
          <TextField
            value={inputs.password}
            onChange={handleChange}
            type="password"
            name="password"
            label="Password (min 6 characters,  at least one uppercase letter, one lowercase letter and one number or special character)"
          />
          <LoadingButton loading={isLoader} type="submit">
            Register
          </LoadingButton>
        </div>
      </form>
    </div>
  );
}
