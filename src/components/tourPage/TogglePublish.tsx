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

  const toggle = async () => {
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
    await updateTourMutation.mutateAsync(updatedTour);
  };

  return (
    <div className="relative self-center">
      <Button onClick={toggle}>
        {published ? "unpublish " : `publish tour`}
      </Button>
      <div className="absolute">
        <Toaster />
      </div>
    </div>
  );
};
export default TogglePublish;
