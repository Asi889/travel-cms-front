import { Queriers } from "@/lib/consts";
import { Redefine } from "@/types/utils";
import { useQuery } from "@tanstack/react-query";
import { getAuthHeader } from "../auth/auth";

type ApiTour = {
  id: string;
  createdAt: Date;
  lastUpdatedAt: Date;
  title: string;
  content: string;
  published: boolean;
  userId: string;
};
export type Tour = Redefine<
  ApiTour,
  {
    createdAt: Date;
    lastUpdatedAt: Date;
  }
>;

const hydrateTour = (tour: ApiTour): Tour => {
  return {
    ...tour,
    createdAt: new Date(tour.createdAt),
    lastUpdatedAt: new Date(tour.lastUpdatedAt),
  };
};
export const useTours = () => {
  return useQuery({
    queryKey: [Queriers.tours],
    queryFn: async () => {
      const tours = await TourService.allTours();
      return tours.map(hydrateTour);
    },
  });
};

const BACKEND_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api` as const;

export const TourService = {
  allTours: async (): Promise<ApiTour[]> => {
    const { headers } = getAuthHeader();

    try {
      const res = await fetch(`${BACKEND_URL}/tour`, {
        method: "GET",
        headers: {
          ...headers,
        },
      });
      if (!res.ok) {
        throw new Error("Could not fetch tours");
      }
      const data = res.json() as Promise<ApiTour[]>;
      return data;
    } catch (error) {
      throw new Error("Could not fetch tours");
    }
  },
};
