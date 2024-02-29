import Container from "@/app/_components/container";
import { NavBar } from "@/app/_components/navbar";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "../lib/api";
import { CallToAction } from "./_components/cta";
import { AboutHome } from "./_components/about-home";



export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main className="bg-neutral-950 text-white">
      <Container>
        <NavBar />
        <CallToAction></CallToAction>
        <div className="mt-[100px]">
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </div>
        <AboutHome></AboutHome>
      </Container>
    </main>
  );
}
