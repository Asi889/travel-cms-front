import { useEffect, useState } from "react";
import { Cross2Icon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import TrashBin from "../components/svg/TrashBin";
import { useDeleteTour, useUpdateTour } from "../services/tour.service";
import { ApiTour } from "@/types/TourType";
import {
  PopoverTrigger,
  Popover,
  PopoverContent,
  PopoverPortal,
  PopoverClose,
} from "@/components/ui/popover";
type TourProps = {
  tour: ApiTour;
  handleMenuClick?: () => void;
  setIsActive?: React.Dispatch<React.SetStateAction<boolean>>;
};

const QuickEditPopover = (
  props: TourProps & { popoverRef: React.RefObject<HTMLDivElement> }
) => {
  const { tour, handleMenuClick, popoverRef, setIsActive } = props;
  const updateTourMutation = useUpdateTour();
  const deleteTourMutation = useDeleteTour();

  const handleDelete = async () => {
    await deleteTourMutation.mutateAsync(tour.id);
  };
  const menuClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (handleMenuClick) {
      handleMenuClick();
    }
  };

  const togglePublish = async () => {
    const updatedTour = {
      tourData: { published: !tour.published },
      id: tour.id,
    };
    await updateTourMutation.mutateAsync(updatedTour);
    if (setIsActive) {
      setIsActive(false);
    }
  };

  return (
    <div className="z-40 ab w-fit justify-self-end">
      <Popover>
        <div className="p-2 grid justify-end w-fit" onClick={menuClick}>
          <PopoverTrigger asChild>
            <button
              className="IconButton  font-[inherit] rounded-full h-8 w-8 inline-flex items-center justify-center bg-white hover:bg-violet-200"
              aria-label="Update dimensions"
            >
              <MixerHorizontalIcon />
            </button>
          </PopoverTrigger>
          <div
            className="text-gray-500"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <PopoverPortal className="z-50">
              <PopoverContent
                ref={popoverRef}
                className={`
                popover-content z-10  absolute right-0 p-2 lg-p-4 grid gap-y-2 rounded-md
                bg-white shadow-md animate duration-400 ease-in-out transform opacity will-change-transform 
                will-change-opacity focus:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-700`}
                sideOffset={15}
              >
                <PopoverClose
                  onClick={handleMenuClick}
                  className="font-inherit rounded-full inline-flex items-center justify-center text-violet-900 hover:bg-violet-300  relative justify-self-end"
                  aria-label="Close"
                >
                  <Cross2Icon />
                </PopoverClose>
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
                  <PopoverClose
                    className="active:shadow-[inset_0_-3px_0_rgba(0,0,0,0.15)] hover:text-gray-600 rounded-sm "
                    onClick={togglePublish}
                  >
                    {tour.published ? "unpublish" : "publish"}
                  </PopoverClose>
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
              </PopoverContent>
            </PopoverPortal>
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default QuickEditPopover;
