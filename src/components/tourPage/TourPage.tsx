import { useTour } from "@/src/services/tour.service";
import { FC } from "react";
  
  type  TourPageProps = {
    id: TourId;
  };

  type TourId = {
    id: string;
  };
  
  const TourPage: FC<TourPageProps> = ({id}) => {
  const { status, data, isLoading, isError } = useTour(id);

    return (
        <div>tour page</div>
    )
}
export default TourPage;