import { FunctionComponent } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

type textFieldProps = {
  textFieldDict: {
    fields: {
      textCardTitle: string;
      title: any;
      body: any;
      titleColour: string;
    };
  };
};

// Add props
const TextField: FunctionComponent<textFieldProps> = ({ textFieldDict }) => {
  const titleColour = textFieldDict.fields.titleColour;

  const richTextTitleOptions = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node: any, children: any) => {
        return <h1 style={{ color: titleColour }}>{children}</h1>;
      },
      [BLOCKS.HEADING_2]: (node: any, children: any) => {
        return <h2 style={{ color: titleColour }}>{children}</h2>;
      },
    },
  };

  const richTextTitle = documentToReactComponents(
    textFieldDict.fields.title,
    richTextTitleOptions
  );
  const richTextBody = documentToReactComponents(textFieldDict.fields.body);
  return (
    <div className="w-screen px-[4.875rem] py-[3.625rem] grid gap-[1.875rem] text-center">
      <div>{richTextTitle}</div>
      <div className="grid gap-y-[1.875rem]">{richTextBody}</div>
    </div>
  );
};
export default TextField;
