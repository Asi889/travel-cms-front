"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTour } from "@/src/services/tour.service";
import { TourId } from "@/types/TourType";
import Link from "next/link";
import { use, useEffect, useState } from "react";



export const TourTopWidget = (props: TourId | any) => {
    const { id } = props;
  const { status, data, isLoading, isError } = useTour(id);
  const [input, setInput] = useState(data?.title);

  useEffect(() => {
    setInput(data?.title)
  },[])

// const router = useRouter();
console.log("routerdata");
  console.log(data);
  


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
        {/* <h2 className="text-base dark:text-slate-400 text-slate-600">
          Welcome to your tour dashboard. Here you can manage your tour
        </h2> */}
        {/* <Input className="text-2xl leading-tight font-bold dark:text-white text-slate-800" value={input} type="text" onChange={(e)=>{setInput(e.target.value)}}/> */}
        {/* <h1 className="text-2xl leading-tight font-bold dark:text-white text-slate-800">{data?.title}</h1> */}
      </div>

     
    </section>
  );
};
