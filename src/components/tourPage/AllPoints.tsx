"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { usePoints } from "@/src/services/point.service";
import { FC } from "react";
// import { useTours } from "../services/tour.service";
import { json } from "stream/consumers";
import { PointLink } from "./PointLink";
import { TourId } from "@/types/TourType";
 


export const AllPoints= ( id : TourId)=> {
  // const { status, data, isLoading, isError } = usePoints(id);
  // console.log("data9999");
  // console.log(data);
  

  // if (isLoading) {
  //   return <Skeleton />;
  // }

  // if (isError) {
  //   return <div>Something went wrong</div>;
  // }
  return (
    <div className="mt-10">
      <ul className="grid lg:grid-cols-3 gap-6 lg:gap-10">
        {/* {data.map((point) => (
          <li key={point.id}>
            <PointLink point={point} />
          </li>
        ))} */}
      </ul>
    </div>
  );
};
