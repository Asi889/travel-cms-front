
import { TourTopWidget } from "./TourTopWidget";
import { TourId } from "@/types/TourType";
   
  const TourPage = ({id}: TourId) => {

    return (
        <div className="container">
          <TourTopWidget id={id} />
        </div>
    )
}
export default TourPage;