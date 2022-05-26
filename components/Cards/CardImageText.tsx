import Image from "next/image";
import { FunctionComponent } from "react";

// Define your component props
type CardImageTextProps = {
  cardDict: {
    fields: {
      title: string
      body: string
      cardImage : {
        fields: {
          description: string
          file: {url: string}
        }
      }
    };
  };
};

// Add props
const CardImageText: FunctionComponent<CardImageTextProps> = ({ cardDict }) => {
  return (
    
      <div className="h-card-image-text bg-tertiary-brand grid grid-rows-2 items-center">
        <Image alt={cardDict.fields.cardImage.fields.description} src={`https:${cardDict.fields.cardImage.fields.file.url}`} width='548px' height='420px' layout="intrinsic" objectFit="cover" />
        <div className="text-center px-card-image-text-horizontal py-card-vertical grid grid-rows-2 gap-y-card-text-image-vertical items-center">
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
