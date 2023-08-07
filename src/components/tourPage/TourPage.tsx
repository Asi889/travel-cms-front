import { usePoints } from "@/src/services/point.service";
import { FC } from "react";
import { TourTopWidget } from "./TourTopWidget";
import { AllPoints } from "./AllPoints";
import { TourId } from "@/types/TourType";
   
  const TourPage = ({id}: TourId) => {

    return (
        <div className="container">
          <TourTopWidget id={id} />
          <AllPoints id={id} />
        </div>
    )
}
export default TourPage;