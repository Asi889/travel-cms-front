"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useTours } from "../services/tour.service";
import { TourLink } from "./TourLink";
import AddNewCard from "../components/AddNewCard";

export const AllTours = () => {
  const { status, data, isLoading, isError } = useTours();

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }
  const tours = [...data].reverse();
  return (
    <div className="mt-10">
      <ul className="grid lg:grid-cols-3 gap-6 lg:gap-10">
        {tours.map((tour) => (
          <li key={tour.id}>
            <TourLink tour={tour} />
          </li>
        ))}
          <li className="grid">
            <AddNewCard />
          </li>
      </ul>
    </div>
  );
};
