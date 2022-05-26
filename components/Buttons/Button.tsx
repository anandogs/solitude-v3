import { FunctionComponent } from "react";

type buttonProps = {
    text: string
}

const Button: FunctionComponent<buttonProps> = ({ text }) => {
  return (
    
      <button className="w-button h-button rounded-button bg-primary-brand text-tertiary-brand p-button font-open-sans font-bold text-button leading-button tracking-button uppercase">
{text}
      </button>
  );
};

export default Button;
