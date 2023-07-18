import { Button } from "@/components/ui/button";
import { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { Cross2Icon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import TrashBin from "../components/svg/TrashBin";
import { useDeleteTour, useUpdateTour } from "../services/tour.service";
import { ApiTour } from "@/types/TourType";
interface TourProps {
  tour: ApiTour;
}

const QuickEditPopover = (props: TourProps) => {
  const { tour } = props;
  const [isActive, setIsActive] = useState(false);
  const updateTourMutation = useUpdateTour();
  const deleteTourMutation = useDeleteTour();

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  const handleDelete = async () => {
    try {
        await deleteTourMutation.mutateAsync(tour.id);
        // Handle success (e.g., show a success message)
      } catch (error) {
        // Handle error (e.g., show an error message)
      }
  };

  const handleUnpublish = async () => {
    const updatedTour = { tourData: {published: !tour.published}, id: tour.id };
    try {
        await updateTourMutation.mutateAsync(updatedTour);
        // Handle success (e.g., show a success message)
      } catch (error) {
        // Handle error (e.g., show an error message)
      }
  };

  return (
    <div className="z-50 ab">
      <Popover.Root>
        <div className="p-2 grid justify-end">
          <Popover.Trigger asChild>
            <button className="IconButton" aria-label="Update dimensions">
              <MixerHorizontalIcon />
            </button>
          </Popover.Trigger>
          <div className="">
            <Popover.Portal className="">
              <Popover.Content
                className="PopoverContent z-10  absolute right-0 p-2 lg-p-4   grid gap-y-2 "
                sideOffset={15}
              >
                <Popover.Close
                  className="PopoverClose relative justify-self-end"
                  aria-label="Close"
                >
                  <Cross2Icon />
                </Popover.Close>
                <div
                  className={`w-full flex gap-x-1 lg:gap-x-3   z-10 justify-center transition-all delay-300`}
                >
                  <Link
                    href={`admin/tour/${tour.id}`}
                    className="active:shadow-[inset_0_-3px_0_rgba(0,0,0,0.15)] hover:text-gray-600 rounded-sm "
                  >
                    edit
                  </Link>
                  |
                  <button
                    className="active:shadow-[inset_0_-3px_0_rgba(0,0,0,0.15)] hover:text-gray-600 rounded-sm "
                    onClick={handleUnpublish}
                  >
                    {tour.published ? "unpublish" : "publish"}
                  </button>
                  |
                  <button
                    className="flex gap-x-1 items-center"
                    onClick={handleDelete}
                  >
                    <span className="text-red-500 hover:text-red-700 active:shadow-[inset_0_-3px_0_rgba(185,28,28,28)] rounded-sm ">
                      delete
                    </span>
                    <TrashBin />
                  </button>
                </div>
              </Popover.Content>
            </Popover.Portal>
          </div>
        </div>
      </Popover.Root>
    </div>
  );
};

export default QuickEditPopover;
