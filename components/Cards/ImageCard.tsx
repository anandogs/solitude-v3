import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


type latestPostType = {
    latestPostDict: {
      fields: {
        slug: string;
        title: any;
        cardImage: {
          fields: {
            description: string;
            file: {
              url: string;
            };
          };
        };
      };
    };
  };


const ImageCard: FunctionComponent<latestPostType> = ({ latestPostDict }) => {
    const richTextTitleOptions = {
      renderNode: {
        [BLOCKS.HEADING_1]: (node: any, children: any) => {
          return <h2 className="text-white text-center">{children}</h2>;
        },
      },
    };
  
    const richTextSubtitleOptions = {
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
          return <h3 className="text-white text-center">{children}</h3>;
        },
      },
    };
  
    const richTextTitle = documentToReactComponents(
      latestPostDict.fields.title.fields.title,
      richTextTitleOptions
    );
  
    const richTextSubtitle = documentToReactComponents(
      latestPostDict.fields.title.fields.body,
      richTextSubtitleOptions
    );
    return (
      <div className="grid lg:flex lg:h-[42.25rem]">
        {/* <div className="flex-1 flex w-[100%] h-[100%]"> */}
        <div className="relative w-[360px] lg:w-[636px] h-[360px] lg:h-[676px]">
          <Image
            alt={latestPostDict.fields.cardImage.fields.description}
            src={`https:${latestPostDict.fields.cardImage.fields.file.url}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="bg-secondary-brand flex-1 py-[34px] lg:py-[7.625rem] px-[25px] lg:px-[5.6875rem] gap-[34px] grid">
          <h5 className="text-primary-brand uppercase text-center">
            Featured Today
          </h5>
          {richTextTitle}
          {richTextSubtitle}
          <Link href={`/${latestPostDict.fields.slug}`}>
            <a className="text-center">
              <p>Read more</p>
            </a>
          </Link>
        </div>
      </div>
    );
  };
  
  export default ImageCard;