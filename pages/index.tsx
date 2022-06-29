import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { InferGetStaticPropsType } from "next";

import dynamic from "next/dynamic";
import { useState } from "react";

import Header from "../components/Common/Header";
import TextField from "../components/Cards/TextField";
import BlogCardGallery from "../components/Cards/BlogCardGallery";
import ImageCard from "../components/Cards/ImageCard";

import { createClient } from "contentful";
import Footer from '../components/Common/Footer';

const BlogCardLazy = dynamic(
  () => import("../components/Cards/BlogCardGallery")
);

const client = createClient({
  space: process.env.CONTENTFUL_SPACE!,
  accessToken: process.env.CONTENTFUL_KEY!,
});


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

  const blogPageRes = await client.getEntry<blogPage>("2VGMHZHhJ5bVT6D1Qe3m5x");
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

