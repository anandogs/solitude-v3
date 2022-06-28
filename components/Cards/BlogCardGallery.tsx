import Image from "next/image";
import Link from 'next/link';
import { FunctionComponent } from "react";


// Define your component props
type BlogCardProps = {
  postDict: {
    sys: {
      updatedAt: string;
    };
    fields: {
      slug: string;
      postTitle: string;
      cardImage: {
        fields: {
          description: string;
          file: { url: string };
        };
      };
    };
  };
};

type PostArrayProps = {
  postArray: [];
};

const BlogCardGallery: FunctionComponent<PostArrayProps> = ({ postArray }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-[7.6875rem] justify-items-center">
      {postArray.map((post: any, index: any) => (
        <div key={index}>
          <BlogCard postDict={post} />
        </div>
      ))}
    </div>
  );
};

const BlogCard: FunctionComponent<BlogCardProps> = ({ postDict }) => {
    return (
      
        <Link href={`/${postDict.fields.slug}`}>
        <a className="w-[550px] max-w-[100vw]flex flex-col bg-tertiary-brand ">
          
        <div className="relative w-[550px] max-w-[100vw] h-[460px]">
          <Image
            alt={postDict.fields.cardImage.fields.description}
            src={`https:${postDict.fields.cardImage.fields.file.url}`}
            layout="fill"
            objectFit="cover"
            className="hover:scale-[105%] ease-in duration-300 h-[100%]"
          />
        </div>
        <div className="text-center py-[2.75rem] grid gap-y-[1.4375rem]">
          <div>
            <h2>{postDict.fields.postTitle}</h2>
          </div>
          <h4 className="text-primary-brand">
            {`${postDict.sys.updatedAt.slice(
              5,
              7
            )}/${postDict.sys.updatedAt.slice(
              8,
              10
            )}/${postDict.sys.updatedAt.slice(0, 4)}`}
          </h4>
        </div>
        
        </a>  
        </Link>
      
    );
  };

  export default BlogCardGallery;
