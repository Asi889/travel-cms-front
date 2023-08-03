import { Card } from "@/components/ui/card";
import useForm from "../hooks/useForm";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CreateApiTour } from "@/types/TourType";
import { useCreateTour } from "../services/tour.service";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/Dialog";

const AddNewCard = () => {
  const { inputs, handleChange, resetForm } = useForm({
    title: "",
    content: "",
  });
  const addNewTour = useCreateTour();

  const handleSubmit = async () => {
    if (!inputs.title || !inputs.content) {
      return;
    }
    const newTour: CreateApiTour = {
      title: inputs.title,
      content: inputs.content,
      published: false,
    };
     addNewTour.mutate(newTour);
    resetForm();
  }

  return (
      <Dialog>
          <Card className="tour-card p-3 md:p-6 w-full self-center max-w-[250px] h-full max-h-[120px] bg-purple-100 hover:bg-gray-200 hover:border-[2px] text-base md:text-lg font-bold hover:border-gray-300  relative z-10 transition-transform delay-1000 ">
        <DialogTrigger  asChild>
            <div className="grid w-full h-full justify-center ">
          <button className="add-tour-btn ">Add tour</button>
          <span className="text-4xl mx-auto add-tour-btn">+</span>
            </div>
        </DialogTrigger>
          <DialogContent className="DialogContent z-[9999999999999999999]">
            <DialogTitle className="DialogTitle">New Tour</DialogTitle>
            <DialogDescription className="DialogDescription">
              Add your new tour here.
            </DialogDescription>
            <fieldset className="">
              <span className="">Title</span>
              <Textarea
                className="border-b-2 rounded-sm mt-1"
                id="title"
                value={inputs.title}
                rows={1}
                cols={50}
                onChange={handleChange}
                name="title"
              ></Textarea>
            </fieldset>
            <fieldset className=" grid">
              <label className="" htmlFor="content">
                Content
              </label>
              <Textarea
                className="rounded-sm mt-1"
                id="content"
                value={inputs.content}
                rows={7}
                cols={30}
                onChange={handleChange}
                name="content"
              ></Textarea>
            </fieldset>
            <div
              style={{
                display: "flex",
                marginTop: 25,
                justifyContent: "flex-end",
              }}
            >
              <DialogClose asChild>
                <Button className="bg-green-200 rounded-xl font-semibold px-4 py-1 hover:bg-green-300" onClick={handleSubmit}>Add New Tour</Button>
              </DialogClose>
            </div>
          </DialogContent>
    </Card>
      </Dialog>
  );
};
export default AddNewCard;
