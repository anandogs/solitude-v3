import Image from "next/image";
import { FunctionComponent } from "react";

// Define your component props
type SaturdayFarmTourType = {
  saturdayDict: {
    fields: {
      title: string;
      body: string;
      button: string;
      image: {
        fields: {
          title: string;
          description: string;
          file: {
            url: string;
          };
        };
      };
    };
  };
};

// Add prosp
const SaturdayFarmTour: FunctionComponent<SaturdayFarmTourType> = ({
  saturdayDict,
}) => {
  const {title, image, body, button} = saturdayDict.fields;
  return (
    <div>
      <Image
        alt={image.fields.description}
        src={`https:${image.fields.file.url}`}
        width="1280px"
        height="556px"
        layout="responsive"
        objectFit="cover"
      />
      <div className="bg-primary-brand text-center w-screen px-[7.8125rem] py-[3.75rem] grid gap-y-[2.0625rem] justify-items-center">
        <h1 className="text-white">{title}</h1>
        <h3 className="text-white">{body}</h3>
        <button className="button-tertiary">{button}</button>
      </div>
    </div>
  );
};

export default SaturdayFarmTour;
