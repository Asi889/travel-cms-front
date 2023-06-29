import { Queriers } from "@/lib/consts";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export type Tour = {
  id: string;
  createdAt: Date;
  lastUpdatedAt: Date;
  title: string;
  content: string;
  published: boolean;
  userId: string;
  // user: User;
  // point: Point[];
  // images: Image[];
};

export const useTours = () => {
  return useQuery({
    queryKey: [Queriers.tours],
    queryFn: TourService.allTours,
  });
};

const BACKEND_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api` as const;

export const TourService = {
  allTours: async (): Promise<Tour[]> => {
    return Promise.resolve([
      {
        id: "XXXX",
        name: "Tour 1",
        content: "Tour 1 description",
        createdAt: new Date(),
        lastUpdatedAt: new Date(),
        published: true,
        userId: "1",
        title: "Tour 1",
      },
    ]);
    // try {
    //   const res = await fetch(`${BACKEND_URL}/tour`, {
    //     method: "GET",
    //     headers: { "Content-Type": "application/json" },
    //   });
    //   if (!res.ok) {
    //     throw new Error("Could not fetch tours");
    //   }
    //   const data = res.json();
    //   return data;
    // } catch (error) {
    //   throw new Error("Could not fetch tours");
    // }
  },
};
