import { Queriers } from "@/lib/consts";
import { Redefine } from "@/types/utils";
import { useQuery } from "@tanstack/react-query";
import { getAuthHeader } from "../auth/auth";
import { ApiPoint } from "@/types/PointType";

type PontId = {
  id: string;
};
export type Point = Redefine<
ApiPoint,
  {
    createdAt: Date;
    lastUpdatedAt: Date;
  }
>;

const hydratePoint = (point: ApiPoint): Point => {
  return {
    ...point,
    createdAt: new Date(point.createdAt),
    lastUpdatedAt: new Date(point.lastUpdatedAt),
  };
};
export const usePoints = (id: PontId) => {
  return useQuery({
    queryKey: [Queriers.points],
    queryFn: async () => {
      const points = await PointService.allPoints(id);
      return points.map(hydratePoint);
    },
  });
};


const BACKEND_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api` as const;

export const PointService = {
  allPoints: async (id: PontId): Promise<ApiPoint[]> => {
    const { headers } = getAuthHeader();

    try {
      const res = await fetch(`${BACKEND_URL}/point/all-by-tour/${id}`, {
        method: "GET",
        headers: {
          ...headers,
        },
      });
      if (!res.ok) {
        throw new Error("Could not fetch pointss");
      }
      const data = res.json() as Promise<ApiPoint[]>;
      return data;
    } catch (error) {
      throw new Error("Could not fetch points");
    }
  },

};
