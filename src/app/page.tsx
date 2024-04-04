import Container from "@/app/_components/container";
import { NavBar } from "@/app/_components/navbar";
import { HeroPost } from "@/app/_components/hero-post";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "../lib/api";
import { CallToAction } from "./_components/cta";
import { AboutHome } from "./_components/about-home";
import { TechStack } from "./_components/tech-stack";
import { HomeProjects } from "./_components/HomeProjects";
import { Contactform } from "./_components/home-contact";


export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main className=" text-white selection:bg-blue-600">
      <Container>
        <NavBar />
        <CallToAction></CallToAction>
        <div className="mt-[100px] bg-transparent">
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
        <TechStack></TechStack>
        <HomeProjects></HomeProjects>
        <Contactform></Contactform>
      </Container>
    </main>
  );
}
