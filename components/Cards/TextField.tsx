import { FunctionComponent } from "react";
import {documentToReactComponents } from '@contentful/rich-text-react-renderer';

// Define your component props
type textFieldProps = {
  TextFieldDict: {
    fields: {
      textCardTitle: string
      title: {}
      body: {}
      titleColour: string
    };
  };
};

// Add props
const TextField: FunctionComponent<TextFieldProps> = ({textFieldDict }) => {

console.log(textFieldDict)

const richTextTitle = documentToReactComponents(textFieldDict.fields.title)
const richTextBody = documentToReactComponents(textFieldDict.fields.body)
const titleColour = textFieldDict.fields.titleColour

  return (
    
      <div>
	  <div>
	  Hello
	  {richTextTitle}
	</div>
	  <style jsx>
	  {
	   `div > h2{
	  color: blue;
	  }`
	  }
	  </style>
	  </div>
  )
}
export default TextField
