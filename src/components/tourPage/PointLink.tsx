import React, { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { compareDates, formatDate } from "../../utils/date";
import { limitString } from "../../services/limitString";
// import QuickEditPopover from "./QuickEditPopover";
import { ApiPoint } from "@/types/PointType";
import Link from "next/link";

export const PointLink = ({ point }: { point: ApiPoint }) => {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  // const popoverRef = useRef<HTMLDivElement>(null);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  // const handleClickOutside = (event: MouseEvent) => {
  //   const clickedInsidePopover =
  //     popoverRef.current && popoverRef.current.contains(event.target as Node);
  //   const clickedOutsideCard =
  //     cardRef.current && !cardRef.current.contains(event.target as Node);

  //   if (clickedInsidePopover) {
  //     return;
  //   }
  //   if (clickedOutsideCard) {
  //     setIsActive(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [isActive]);

  return (
    <div className="relative h-full w-full" ref={cardRef}>
    <Link href={`admin/tour/${point.id}`}>
      <Card className="p-3 md:p-6 w-full h-full hover:bg-gray-200 hover:border-[2px] hover:border-gray-300 grid content-start relative z-10 transition-transform delay-1000">
        <div
          className={`w-full h-full max-h- ${
            isActive ? "blur-sm" : " blur-none"
          }`}
        >
          <h3 className="text-base md:text-lg font-bold">
            {limitString(point.title, 100)}
          </h3>
         
          {!compareDates(point.createdAt, point.lastUpdatedAt) ? (
            <p className="text-sm text-gray-500">
              Last Edited:{formatDate(point.lastUpdatedAt)}
            </p>
          ) : null}
        </div>
      </Card>
    </Link>
  </div>
  );
};
