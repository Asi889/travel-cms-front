import React from "react";
import { Tour } from "../services/tour.service";
import { Card } from "@/components/ui/card";

export const TourLink = ({ tour }: { tour: Tour }) => {
  return (
    <Card className="px-6 py-8 w-full h-full">
      <h3 className="text-lg font-bold">{tour.title}</h3>
      <p className="text-sm text-gray-500">{+tour.createdAt}</p>
    </Card>
  );
};
