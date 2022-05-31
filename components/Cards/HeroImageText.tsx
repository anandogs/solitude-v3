import Image from "next/image";
import { FunctionComponent } from "react";

// Define your component props
type HeroImageProps = {
  heroDict: {
    fields: {
      textOverlay: string
      heroImage : {
        fields: {
          description: string
          file: {url: string}
        }
      }
    };
  };
};

// Add props
const HeroImageText: FunctionComponent<HeroImageProps> = ({ heroDict }) => {
  return (
    
      <div className="relative w-screen">
        <Image
        alt={heroDict.fields.heroImage.fields.description}
        src={`https:${heroDict.fields.heroImage.fields.file.url}`} 
        width='1280px' 
        height='720px' 
        layout="responsive" 
        objectFit="fill" />
        <div className='w-screen top-[0px] absolute top-1/2 translate-y-[-50%] text-center '>
      <h2 className='text-white px-[12.5rem] '>
        {heroDict.fields.textOverlay}
      </h2>
      </div>
      </div>
  );
};

export default HeroImageText;
