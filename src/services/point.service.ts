import { Queriers } from "@/lib/consts";
import { Redefine } from "@/types/utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
type ApiTourUpdate = Partial<{
  id: string;
  tourData: Partial<{
    title: string;
    content: string;
    published: boolean;
  }>;
}>;

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
// export const useTour = (id: TourId) => {
//   return useQuery({
//     queryKey: [Queriers.tour, id],
//     queryFn: async () => {
//       const tour = await TourService.selectedTour(id);
//       return hydrateTour(tour);
//     },
//   });
// };
// export const useUpdateTour = ( ) => {
//   const queryClient = useQueryClient()
//   return useMutation({
//     mutationFn: async (tourUpdate: ApiTourUpdate) => {
//        return await TourService.updateTour(tourUpdate);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries([Queriers.tours])
//     },
//   });
// };
// export const useDeleteTour = () => {
//   const queryClient = useQueryClient()
//   return useMutation({
//     mutationFn: async (id: string) => {
//        return await TourService.deleteTour(id);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries([Queriers.tours])
//     },
//   });
// }

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
        throw new Error("Could not fetch tours");
      }
      const data = res.json() as Promise<ApiPoint[]>;
      return data;
    } catch (error) {
      throw new Error("Could not fetch tours");
    }
  },
//   selectedTour: async (id: TourId): Promise<ApiTour> => {
//     const { headers } = getAuthHeader();

//     try {
//       const res = await fetch(`${BACKEND_URL}/tour/${id}`, {
//         method: "GET",
//         headers: {
//           ...headers,
//         },
//       });
//       if (!res.ok) {
//         throw new Error("Could not fetch tour");
//       }
//       const data = res.json() as Promise<ApiTour>;
//       return data;
//     } catch (error) {
//       throw new Error("Could not fetch tour");
//     }
//   },
//   updateTour: async (tour: ApiTourUpdate): Promise<ApiTourUpdate> => {
//     const { headers } = getAuthHeader();
//     try {
//       const res = await fetch(`${BACKEND_URL}/tour/${tour.id}`, {
//         method: "PATCH",
//         headers: { ...headers },
//         body: JSON.stringify(tour.tourData),
//       });
//       if (!res.ok) {
//         throw new Error("Could not update tour99");
//       }
//       const data = res.json() as Promise<ApiTourUpdate>;
//       return data;
//     } catch (error) {
//       throw new Error("Could not update tour33");
//     }
//   },

//   deleteTour: async (id: string): Promise<boolean> => {
//     const { headers } = getAuthHeader();
//     try {
//       const res = await fetch(`${BACKEND_URL}/tour/${id}`, {
//         method: "DELETE",
//         headers: { ...headers },
//       });
//       if (!res.ok) {
//         throw new Error("Could not delete tour");
//       }
//       return true
//     } catch (error) {
//       throw new Error("Could not delete tour");
//     }
//   }
};
