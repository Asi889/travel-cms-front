import React, { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { compareDates, formatDate } from "../utils/date";
import { limitString } from "../services/limitString";
import QuickEditPopover from "./QuickEditPopover";
import { ApiTour } from "@/types/TourType";
import Link from "next/link";

export const TourLink = ({ tour }: { tour: ApiTour }) => {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const clickedInsidePopover =
      popoverRef.current && popoverRef.current.contains(event.target as Node);
    const clickedOutsideCard =
      cardRef.current && !cardRef.current.contains(event.target as Node);

    if (clickedInsidePopover) {
      return;
    }
    if (clickedOutsideCard) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive]);

  return (
    <div className="relative h-full w-full" ref={cardRef}>
      <Link href={`admin/tour/${tour.id}`}>
        <Card className="p-3 md:p-6 w-full h-full hover:bg-gray-200 hover:border-[2px] hover:border-gray-300 grid content-start relative z-10 transition-transform delay-1000">
          <QuickEditPopover
            tour={tour}
            handleMenuClick={handleMenuClick}
            popoverRef={popoverRef}
            setIsActive={setIsActive}
          />
          <div
            className={`w-full h-full max-h- ${
              isActive ? "blur-sm" : " blur-none"
            }`}
          >
            <h3 className="text-base md:text-lg font-bold">
              {limitString(tour.title, 100)}
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
      </Link>
    </div>
  );
};
