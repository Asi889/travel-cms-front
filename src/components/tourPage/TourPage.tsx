import { useSelectedTour } from "@/src/services/tour.service";
import { FC } from "react";
  
  interface  TourPageProps {
    id: TourId;
  };

  type TourId = {
    id: string;
  };
  
  const TourPage: FC<TourPageProps> = ({id}) => {
  const { status, data, isLoading, isError } = useSelectedTour(id);

    return (
        <div>tour page</div>
    )
}
export default TourPage;