import React from "react";
import { Tour } from "../services/tour.service";
import { Card } from "@/components/ui/card";
import { compareDates, formatDate } from "../utils/date";

export const TourLink = ({ tour }: { tour: Tour }) => {
  return (
    <Card className="px-6 py-8 w-full h-full">
      <h3 className="text-lg font-bold">{tour.title}</h3>
      <p className="text-sm text-gray-500">{formatDate(tour.createdAt)}</p>
      {!compareDates(tour.createdAt, tour.lastUpdatedAt) ? (
        <p className="text-sm text-gray-500">
          Last Edited:{formatDate(tour.lastUpdatedAt)}
        </p>
      ) : null}
    </Card>
  );
};
