"use client";
import TourPge from "@/src/components/tourPage/TourPage";

type TourId = {
  id: string;
};

export default async function Tour({ params }: { params: { id: TourId } }) {
  return <TourPge id={params.id} />;
}
