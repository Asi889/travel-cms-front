"use client";
import TourPge from "@/src/components/tourPage/TourPage";
import { TourId } from "@/types/TourType";

export default async function Tour({ params }: { params: { id: string } }) {
  return <TourPge id={params.id} />;
}
