"use client"
import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import { Fade } from "react-awesome-reveal";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
  <Fade cascade damping={1}>
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-20 gap-y-20 md:gap-y-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
    </Fade>
  );
}
