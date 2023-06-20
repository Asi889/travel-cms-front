type User = {
  // TODO: should come from the backend API types
  id: string;
  name: string;
  email: string;
  accessToken: string;
  refreshToken: string;
};
const FRONT_URL = process.env.NEXT_PUBLIC_FRONT_URL;
interface CreateUserDto {
  name: string;
  password: string;
  email: string;
}

export const UserService = {
  register: async (feature: CreateUserDto): Promise<User> => {
    const res = await fetch(`${FRONT_URL}/auth/register`, {
      method: "POST",
      body: JSON.stringify(feature),
      headers: { "Content-Type": "application/json" },
    });
    const data = res.json();
    return data;
  },
};
