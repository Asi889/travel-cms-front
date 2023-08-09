import { Button } from "@/components/ui/button";
import { useUpdateTour } from "@/src/services/tour.service";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

type props = {
  published: boolean | any;
  tourId: string;
  input: string;
};

const TogglePublish = (props: props) => {
  const { published, tourId, input } = props;
  const updateTourMutation = useUpdateTour();
  const { toast } = useToast();

  const toggle = () => {
    if (!published && input === "") {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Cannot publish tour without a title",
      });
    }
    const updatedTour = {
      tourData: { published: !published },
      id: tourId,
    };
     updateTourMutation.mutate(updatedTour);
  };

  return (
    <div className="relative self-center flex gap-x-2">
    
      <p className="text-xl leading-tight font-semibold dark:text-white text-slate-800">{published ? "publish" : "unpublish"}</p>
      <button
      onClick={toggle}
      className={`cursor-pointer w-11 h-5 transition duration-300 justify-self-center ${
        published ? "bg-blue-300" : "bg-blue-900"
      } rounded-full relative px-1.5 flex items-center $`}
    >
      <div
        className={`roundball w-4 h-4 rounded-full absolute transform duration-200 ease-out bg-white left-0.5 ${
            published ? "translate-x-0" : "translate-x-[35px]"
        }`}
      />
      
    </button>
      
      <div className="absolute">
        <Toaster />
      </div>
    </div>
  );
};
export default TogglePublish;
