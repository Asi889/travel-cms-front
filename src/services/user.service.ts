type User = {
  // TODO: should come from the backend API types
  id: string;
  name: string;
  email: string;
  accessToken: string;
  refreshToken: string;
};
const FRONT_URL = process.env.NEXT_PUBLIC_FRONT_URL;
const BACKEND_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api` as const;
export type CreateUserDto = {
  name: string;
  password: string;
  email: string;
};

export const UserService = {
  register: async (user: CreateUserDto): Promise<User> => {
    try {
      const res = await fetch(`${BACKEND_URL}/auth/register`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        throw new Error("Could not register user");
      }
      const data = res.json();
      return data;
    } catch (error) {
      throw new Error("Could not register user");
    }
  },
  clearUser: async (info: { email: string; jwt: string }): Promise<void> => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/auth/signout`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Bearer ${info.jwt}`,
        }),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error("Could not clear user");
    }
  },
};
