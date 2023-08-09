"use client";

import { Card } from "@/components/ui/card";
import useForm from "../hooks/useForm";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CreateApiTour, ApiTour } from "@/types/TourType";
import { useCreateTour } from "../services/tour.service";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/Dialog";
import { Spinner } from "@/components/Spinner";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';


const AddNewCard = () => {
  const { inputs, handleChange, resetForm } = useForm({
    title: "",
    content: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const addNewTour = useCreateTour();
  
  const router = useRouter();
  const handleSubmit = async () => {
    if (!inputs.title) {
      return;
    }
    setIsSubmitting(true);
    const newTour: CreateApiTour = {
      ...inputs,
      published: false,
    };
     addNewTour.mutateAsync(newTour).then(response => {
       resetForm();
       
       if (response?.id) {
        setIsSubmitting(false);
        router.push(`/admin/tour/${response.id}`);
      }
    })   
  };

  return (
  <>
     {isSubmitting  && (
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center z-40 items-center">
        <Spinner cl size={`20`} />
      </div>
    )}
    <Dialog>
      <Card className="tour-card p-3 md:p-6 w-full self-center max-w-[250px] h-full max-h-[120px] bg-purple-100 hover:bg-gray-200 hover:border-[2px] text-base md:text-lg font-bold hover:border-gray-300  relative z-10 transition-transform delay-1000 ">
        <DialogTrigger asChild>
          <div className="grid w-full h-full justify-center ">
            <button className="add-tour-btn ">Add tour</button>
            <span className="text-4xl mx-auto add-tour-btn">+</span>
          </div>
        </DialogTrigger>
        <DialogContent className="DialogContent z-50">
          <DialogTitle className="DialogTitle">New Tour</DialogTitle>
          <DialogDescription className="DialogDescription">
            Add your new tour here.
          </DialogDescription>
          <Form>
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  id="title"
                  value={inputs.title}
                  onChange={handleChange}
                  name="title"
                  placeholder="Enter the title"
                  required
                />
              </FormControl>
            </FormItem>

            <FormItem>
              <FormLabel htmlFor="content">Content</FormLabel>
              <FormControl>
                <Input
                  id="content"
                  value={inputs.content}
                  onChange={handleChange}
                  name="content"
                  placeholder="Enter the content"
                />
              </FormControl>
            </FormItem>

            <div className="flex justify-end mt-6">
              <DialogClose asChild>
              <Button
                className=""
                onClick={handleSubmit}
                type="submit">Submit</Button>
              </DialogClose>
            </div>
          </Form>
        </DialogContent>
      </Card>
    </Dialog>
    </>
  );
};
export default AddNewCard;

