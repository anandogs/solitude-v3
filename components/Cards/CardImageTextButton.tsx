import Image from "next/image";
import { FunctionComponent } from "react";
import Button from "../Buttons/Button";

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
      <div className={cardNumber % 2 == 0 ? 'basis-1/2 order-2' : 'basis-1/2'}>
      <Image
        alt={cardDict.fields.image.fields.description}
        src={`https:${cardDict.fields.image.fields.file.url}`}
        width="640px"
        height="720px"
        layout="responsive"
        objectFit="cover"
        
      />
      </div>
      
        <div className="text-center px-card-image-text-button-horizontal grid gap-y-card-text-image-button-vertical items-center basis-1/2 font-open-sans auto-rows-min content-center">
          <h1 className="tracking-header2 leading-header2 text-header2 font-bold text-primary-brand">
            {cardDict.fields.title}
          </h1>
          <p className="font-bold leading-header3 text-header3 text-secondary-brand ">
            {cardDict.fields.subheading}
          </p>
          <p className="font-medium font-montserrat leading-body1 text-body1 text-secondary-brand">
            {cardDict.fields.body}
          </p>
          <Button text={cardDict.fields.button} />
        </div>
      </div>
    
  );
};

export default CardImageTextButton;
