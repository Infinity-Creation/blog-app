import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
 
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  
  date,
  excerpt,
  author,
  slug,
}: Props) {
  //console.log("post-preview:" + date);
  return (
    <div className="border-solid border-white border-[1px] px-8 py-7 rounded-3xl">
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-2xl mb-3 ">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4 flex">
      <div className="mr-[14px]"> min read</div>
      <div className="">
       <i> <DateFormatter dateString={date} /></i>
      </div>
      </div>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">{excerpt}</p>
      
    </div>
  );
}
