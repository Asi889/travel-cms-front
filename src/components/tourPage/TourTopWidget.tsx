"use client";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useForm from "@/src/hooks/useForm";
import { useTour } from "@/src/services/tour.service";
import { TourId } from "@/types/TourType";
import Link from "next/link";
import { BaseSyntheticEvent, use, useEffect, useState } from "react";
import { FormState, FieldValues, FieldError, ErrorOption, SubmitHandler, SubmitErrorHandler, FieldArrayPath, FieldArray, FieldErrors, RegisterOptions, UseFormRegisterReturn } from "react-hook-form";



export const TourTopWidget = (props: TourId | any) => {
    const { id } = props;
  const { status, data, isLoading, isError } = useTour(id);
  const [input, setInput] = useState(data?.title);
  

  
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
          // <Form >
          //       <FormItem>
          //         <FormLabel>Title</FormLabel>
          //         <FormControl>
          //           <Input
          //             id="title"
          //             value={inputs.title}
          //             onChange={handleChange}
          //             name="title"
          //             placeholder="Enter the title"
          //             className="text-2xl leading-tight font-bold dark:text-white text-slate-800"
          //           />
          //         </FormControl>
          //       </FormItem>           
          //     </Form>
          
          // const { inputs, handleChange, resetForm } = useForm({
          //   title: "",
          // });