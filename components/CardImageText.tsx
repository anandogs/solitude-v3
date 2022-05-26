import Image from "next/image";
import { FunctionComponent } from "react";

// Define your component props
type CardImageTextProps = {
  cardDict: {
    fields: {
      title: String
      body: String
      cardImage : {
        fields: {
          description: String
          file: {url: String}
        }
      }
    };
  };
};

// Add props
const CardImageText: FunctionComponent<CardImageTextProps> = ({ cardDict }) => {
  return (
    
      <div className="h-card bg-tertiary-brand grid grid-rows-2 justify-center">
        <Image alt="demo" src={`https:${cardDict.fields.cardImage.fields.file.url}`} width='548px' height='420px' layout="intrinsic" objectFit="cover"/>
        <div className="text-center px-card-horizontal py-card-vertical grid grid-rows-2 gap-y-card-vertical">
          <h1 className="font-open-sans tracking-header2 leading-header2 text-header2 font-bold text-primary-brand">
            {cardDict.fields.title}
          </h1>
          <p className="font-medium font-montserrat leading-body1 text-body1 text-secondary-brand">
          {cardDict.fields.body}
          </p>
        </div>
      </div>
  );
};

export default CardImageText;
