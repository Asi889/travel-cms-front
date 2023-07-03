"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useTours } from "../services/tour.service";
import { json } from "stream/consumers";
import { TourLink } from "./TourLink";

export const AllTours = () => {
  const { status, data, isLoading, isError } = useTours();

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }
  return (
    <div className="mt-10">
      <ul className="grid lg:grid-cols-3 gap-6 lg:gap-10">
        {data.map((tour) => (
          <li key={tour.id}>
            <TourLink tour={tour} />
          </li>
        ))}
      </ul>
    </div>
  );
};
