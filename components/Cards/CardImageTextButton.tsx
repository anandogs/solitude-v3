import Image from "next/image";
import { FunctionComponent } from "react";

// Define your component props
type CardImageTextButtonProps = {
  cardNumber: number,
  cardDict: {
    fields: {
      title: string;
      body: string;
      subheading: string;
      button: string;
      image: {
        fields: {
          description: string;
          file: { url: string };
        };
      };
    };
  };
};

// Add props
const CardImageTextButton: FunctionComponent<CardImageTextButtonProps> = ({
  cardDict, cardNumber
}) => {
  if (cardNumber % 2 == 0) {
     
  }
  return (
    <div className="h-card bg-tertiary-brand flex">
      <div className={cardNumber % 2 == 0 ? 'basis-1/2 w-1/2':'basis-1/2 order-2 w-1/2' }>
      <Image
        alt={cardDict.fields.image.fields.description}
        src={`https:${cardDict.fields.image.fields.file.url}`}
        width="640px"
        height="720px"
        layout="responsive"
        objectFit="cover"
        
      />
      </div>
      
        <div className="text-center px-card-image-text-button-horizontal grid gap-y-card-text-image-button-vertical items-center basis-1/2 auto-rows-min content-center">
          <h2 className="text-primary-brand text-left">
            {cardDict.fields.title}
          </h2>
          <h3 className="text-left">
            {cardDict.fields.subheading}
          </h3>
          <p className="text-left">
            {cardDict.fields.body}
          </p>
          <button>{cardDict.fields.button}</button>
        </div>
      </div>
    
  );
};

export default CardImageTextButton;
