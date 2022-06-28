import type { NextPage } from "next";
import Link from "next/link";
import { createClient } from "contentful";
import { GetStaticProps, GetStaticPaths } from "next";
import { InferGetStaticPropsType } from "next";
import Header from "../components/Common/Header";
import BlogPost from "../components/Cards/BlogPost";
import BlogCardGallery from "../components/Cards/BlogCardGallery";
import Footer from '../components/Common/Footer';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE!,
  accessToken: process.env.CONTENTFUL_KEY!,
});

interface blog {
  slug: string;
  title: {};
  post: {};
  fields: {};
  youTubeVideoLink: {};
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogRes = await client.getEntries<blog>({
    content_type: "blogPost",
    order: "sys.createdAt",
  });
  const paths = blogRes.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allBlogsRes = await client.getEntries<blog>({
    content_type: "blogPost",
  });
  const blogRes = await client.getEntries<blog>({
    content_type: "blogPost",
    "fields.slug": params!.slug,
  });
  const latestPost = blogRes.items[0];
  const allBlogs = allBlogsRes.items;

  let otherPosts = allBlogs.filter(function (item) {
    return item.fields.slug !== params!.slug;
  });

  otherPosts = otherPosts.slice(0, 2);

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
        Other Articles
      </h2>
      <BlogCardGallery postArray={otherPosts} />
      <div className="py-[5.9375rem] text-center">
        <Link href="/blog">
          <a>
            <p>See all articles</p>
          </a>
        </Link>
      </div>
      <Footer/>
    </div>
  );
};

export default Blog;
