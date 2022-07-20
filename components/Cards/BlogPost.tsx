import Image from "next/image";
import { FunctionComponent } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import TextField from "./TextField";
import YoutubeVideo from "./YoutubeVideo";


// Define your component props
type BlogPostTypes = {
  blogPostProps: {
    fields: {
      title: {
        fields: { textCardTitle: string; title: any; body: any; titleColour: string; }; 
      }
      post: any
      youTubeVideoLink: {
        fields: { youtubeLink: string; };
      }
    };
  };
};

// Add props
const BlogPost: FunctionComponent<BlogPostTypes> = ({ blogPostProps }) => {
  
    const blogTitle = blogPostProps.fields.title
    const blogContent = blogPostProps.fields.post
    const youTubeLink = blogPostProps.fields.youTubeVideoLink;


    const inlineOptions = {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
            return (
              <div className=''>
                <Image
                  alt={node.data.target.fields.description}
                  src={`https:${node.data.target.fields.file.url}`}
                  width="1136px"
                  height="676px"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            );
          },
          [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
            if (node.data.target.sys.contentType.sys.id === "twoImages") {
              return (
                <div className="grid grid-cols-1 gap-y-[26px] lg:grid-cols-2 lg:gap-x-[2.375rem] lg:h-[38.75rem] lg:pt-[38px]">
                  <Image
                    alt={node.data.target.fields.image1.fields.description}
                    src={`https:${node.data.target.fields.image1.fields.file.url}`}
                    width="549px"
                    height="620px"
                    layout="responsive"
                    objectFit="cover"
                  />
                            <Image
                    alt={node.data.target.fields.image2.fields.description}
                    src={`https:${node.data.target.fields.image2.fields.file.url}`}
                    width="549px"
                    height="620px"
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
              );
            }
          },
        },
      };
    
      const blogPost = documentToReactComponents(blogContent, inlineOptions);
    return (
        <div className="bg-tertiary-brand">
        <TextField textFieldDict={blogTitle}/>
        <div className="lg:px-[4.5rem] grid">
        <div className="flex justify-center">
        <div className="w-full">
        {youTubeLink ? 
       <YoutubeVideo youtubeDetails={youTubeLink}/> : 
       <></>
       }
       </div>
       </div>
       <div className="blog-post">
         {blogPost}
         </div>
         </div>
         </div>

  );
};

export default BlogPost;
