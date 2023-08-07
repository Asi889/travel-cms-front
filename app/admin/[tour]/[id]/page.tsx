"use client";
import TourPge from "@/src/components/tourPage/TourPage";
// import { TourId } from "@/types/TourType";
export type TourId = {
  id: string;
};

export default async function Tour({ params }: { params: { id: TourId | any } }) {
  return <TourPge id={params.id} />;
}
