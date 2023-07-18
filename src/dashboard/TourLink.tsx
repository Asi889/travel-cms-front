import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { compareDates, formatDate } from "../utils/date";
import { limitString } from "../services/limitString";
import QuickEditPopover from "./QuickEditPopover";
import { ApiTour } from "@/types/TourType";


export const TourLink = ({ tour }: { tour: ApiTour }) => {
  const [isActive, setIsActive] = useState(false);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="relative h-full w-full">
      <Card className="p-3 md:p-6 w-full h-full hover:bg-gray-200 hover:border-[2px] hover:border-gray-300 grid content-start relative z-10 transition-transform delay-1000  ">
        <div onClick={handleMenuClick}>
          <QuickEditPopover tour={tour} />
        </div>
        <div className={`w-full h-full max-h- ${isActive ? "blur-sm" : " blur-none"}`}>
          <h3 className="text-base md:text-lg font-bold">
            {limitString(tour.title)}
          </h3>
          <p className="text-sm md:text-base">
            this tour has {tour?.points?.length} stops
          </p>
          {!compareDates(tour.createdAt, tour.lastUpdatedAt) ? (
            <p className="text-sm text-gray-500">
              Last Edited:{formatDate(tour.lastUpdatedAt)}
            </p>
          ) : null}
        </div>
      </Card>
    </div>
  );
};

