import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { InferGetStaticPropsType } from "next";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { FunctionComponent } from "react";

import Header from "../../components/Common/Header";
import TextField from "../../components/Cards/TextField";
import BlogCardGallery from "../../components/Cards/BlogCardGallery";

import { createClient } from "contentful";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Footer from "../test";

const BlogCardLazy = dynamic(
  () => import("../../components/Cards/BlogCardGallery")
);

const client = createClient({
  space: process.env.CONTENTFUL_SPACE!,
  accessToken: process.env.CONTENTFUL_KEY!,
});

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

export const getStaticProps: GetStaticProps = async () => {
  type blogPage = {
    title: string;
    pageHeading: {};
  };

  type blogEntries = {
    fields: {
      title: {};
    };
  };

  const blogPageRes = await client.getEntry<blogPage>("1HVRPX1Qpxag9PnIIeLMin");
  // the - in front of the sys.createdAt is a hack to get the latest post
  const blogEntriesRes = await client.getEntries<blogEntries>({
    content_type: "blogPost",
    order: "-sys.createdAt",
  });

  const blogEntriesList = blogEntriesRes.items;

  const latestPost = blogEntriesList[0];
  const firstNPosts = blogEntriesList.slice(1, 3);
  const balancePosts = blogEntriesList.slice(3);

  const cardsText = blogPageRes.fields.pageHeading;

  return {
    props: {
      cardsText,
      latestPost,
      firstNPosts,
      balancePosts,
    },
  };
};

// 24-05-2022:2 infer get static props
const Blog: NextPage = ({
  cardsText,
  latestPost,
  firstNPosts,
  balancePosts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div>
      <Header />
      <TextField textFieldDict={cardsText} />
      <ImageCard latestPostDict={latestPost} />
      <h1 className="py-[8.3125rem] text-primary-brand text-center">
        All articles
      </h1>
      <div>
        <BlogCardGallery postArray={firstNPosts} />
        {showAll && (
          <div className="py-[7.6875rem]">
            <BlogCardLazy postArray={balancePosts} />
          </div>
        )}
        <a
          onClick={() => setShowAll(true)}
          className={showAll ? "hidden" : "block"}
        >
          <p className="py-[4.375rem] text-center">Read more</p>
        </a>
      </div>
      <Footer/>
    </div>
  );
};

export default Blog;

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
    <div className="flex h-[42.25rem]">
      <div className="flex-1 flex w-[100%] h-[100%]">
        <Image
          alt={latestPostDict.fields.cardImage.fields.description}
          src={`https:${latestPostDict.fields.cardImage.fields.file.url}`}
          width="636px"
          height="676px"
          layout="intrinsic"
          objectFit="cover"
        />
      </div>
      <div className="bg-secondary-brand flex-1 py-[7.625rem] px-[5.6875rem] grid">
        <h5 className="text-primary-brand uppercase text-center">
          Featured Today
        </h5>
        {richTextTitle}
        {richTextSubtitle}
        <Link href={`/blog/${latestPostDict.fields.slug}`}>
          <a className="text-center">
            <p>Read more</p>
          </a>
        </Link>
      </div>
    </div>
  );
};
