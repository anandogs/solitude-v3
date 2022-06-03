import type { NextPage } from "next";
import { createClient } from "contentful";
import { GetStaticProps } from "next";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import Header from "../components/Common/Header";
import TextField from "../components/Cards/TextField";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

export const getStaticProps: GetStaticProps = async () => {
  interface blog {
    items: [
      fields: {
        post: {};
      }
    ];
  }

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE!,
    accessToken: process.env.CONTENTFUL_KEY!,
  });

  const blogRes = await client.getEntry<blog>("2mJFHOIYqIjcNA5adMNbZM");
  const blogTitle = blogRes.fields.testInline;

  // console.log(post)
  return {
    props: {
      blogTitle,
    },
  };
};

// 24-05-2022:2 infer get static props
const Blog: NextPage = ({
  blogTitle,
}: //   post,
InferGetStaticPropsType<typeof getStaticProps>) => {
  const displayOptions = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => {
        console.log(node);
        return (
          <div>
            <h1 className="text-primary-brand">{children}</h1>
          </div>
        );
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        console.log(node.content[0]);
        return (
          <div>
            <p>{children}</p>
          </div>
        );
      },
    },
  };
  // console.log(blogTitle)
  const inlineOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        console.log(node.data.target.fields.file.url);
        return (
          <div>
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
        // if (node.data.target.sys.contentType.sys.id === "textCard") {
        //     console.log(node.data.target.fields.title.content[1].content[0])
        //     const headingRender = documentToReactComponents(node.data.target.fields.title, displayOptions)
        //     const bodyRender = documentToReactComponents(node.data.target.fields.body, displayOptions)
        //     return (
        //         <div>
        //         {headingRender}
        //         {bodyRender}
        //         </div>

        //     //   <h1>Hello World</h1>

        //   );
        // }
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        if (node.data.target.sys.contentType.sys.id === "twoImages") {
          console.log(node.data.target.fields.image1);
          return (
            <div className="grid grid-cols-2 gap-x-[2.375rem] h-[38.75rem]">
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

  const post = documentToReactComponents(blogTitle, inlineOptions);

  return (
    <div>
      <Header />

      <div className="px-[4.5rem]">{post}</div>
    </div>
  );
};

export default Blog;
