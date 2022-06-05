import type { NextPage } from "next";
import { createClient } from "contentful";
import { GetStaticProps } from "next";
import { InferGetStaticPropsType } from "next";
import Header from "../../components/Common/Header";
import BlogPost from "../../components/Cards/BlogPost";
import BlogCardGallery from "../../components/Cards/BlogCardGallery";




export const getStaticProps: GetStaticProps = async () => {
  interface blog {
    title: {};
    post: {};
    fields: {};
    youTubeVideoLink: {};
  }

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE!,
    accessToken: process.env.CONTENTFUL_KEY!,
  });

  const blogRes = await client.getEntries<blog>({ content_type: "blogPost" });
  const latestPost = blogRes.items[0];
  const otherPosts = blogRes.items.slice(1, 3);
  
  return {
    props: {
      latestPost,
      otherPosts,
    },
  };
};

const Blog: NextPage = ({
  latestPost,
  otherPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  

  return (
    <div>
      <Header />
      <BlogPost blogPostProps={latestPost} />
      <h2 className="text-primary-brand py-[5.9375rem] text-center">
        Other  Articles
      </h2>
      <BlogCardGallery postArray={otherPosts} />
      <div className="py-[5.9375rem] text-center">
      <a>
        See all articles
      </a>
      </div>
      </div>
  );
};

export default Blog;
