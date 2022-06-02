import Image from "next/image";
import { FunctionComponent } from "react";

// Define your component props
type SaturdayFarmTourType = {
  saturdayDict: {
    fields: {
      image: {}
      title: string
      body: string
    };
  };
};

// Add prosp
const SaturdayFarmTour: FunctionComponent<SaturdayFarmTourType> = ({ saturdayDict }) => {
  return (
    
      <div >
          Hello World
      </div>
  );
};


export default SaturdayFarmTour;
