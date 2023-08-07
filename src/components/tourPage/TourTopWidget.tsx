"use client";
import { Input } from "@/components/ui/input";
import { useTour, useUpdateTour } from "@/src/services/tour.service";
import { TourId } from "@/types/TourType";
import { BaseSyntheticEvent, useEffect, useState, useRef } from "react";
import {debounce} from "../../services/debounce";
import  EditIcon  from "../svg/EditIcon";
import TogglePublish from "./TogglePublish";
import { Separator } from "@/components/ui/separator";

export const TourTopWidget = (props: TourId | any) => {

  const { id: tourId } = props;
  const { status, data } = useTour(tourId);
  const [input, setInput] = useState<string>("");
  const updateTourMutation = useUpdateTour();

  useEffect(() => {
    if (data) {
      setInput(data?.title);
    }
  }, [data]);

  const debouncedUpdate = useRef(debounce(async (value: string) => {
    
    const updatedTour = {
      tourData: { title: value },
      id: tourId,
    };
    
    await updateTourMutation.mutateAsync(updatedTour);
  }, 1000));

  const handleChange = async (e: BaseSyntheticEvent) => {
    
    setInput(e.target.value);
    if (e.target.value.trim() === '') {      
      return;
    }
    debouncedUpdate.current(e.target.value);
    
  };
  
  if (status === "loading") {
    return (
      <section className="py-6 flex justify-between border-b border-brand-200 mb-2">
        <p>Loading....</p>;
      </section>
    );
  }

  return (
    <section className="py-6 flex justify-between border-b border-brand-200 mb-2">
      <div>
        <h2 className="text-base dark:text-slate-400 text-slate-600">
          Welcome to your tour dashboard. Here you can manage & edit your tour.
        </h2>
      <div className="flex gap-x-2">
        <Input
          className={`text-2xl leading-tight font-bold dark:text-white text-slate-800 px-1 pl-2 ${input.length === 0 ? "border-red-400 bg-red-200 border-2" : "border-b-2 border-black"} `}
          value={input}
          type="text"
          onChange={handleChange}
        />
        <div className="self-end py-3">
        < EditIcon />
        </div>
      </div>
      <Separator className={`mt-2 ${input.length === 0 ? " bg-red-600 " : "bg-black"}`} />
      </div>
      <TogglePublish published={data?.published} input={input} tourId={tourId}  />
      
    </section>
  );
};
