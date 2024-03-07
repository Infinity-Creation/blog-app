import Container from "@/app/_components/container";
import { HeroPost } from "../_components/hero-post";
import { MoreStories } from "../_components/more-stories";
import { getAllPosts } from "../../lib/api";
import { NavBar } from "@/app/_components/navbar";

export default function Blog() {
  const allPosts = getAllPosts();
  return (
    
    <Container>
    <section className="bg-neutral-950 text-white">
    <NavBar></NavBar>
    <h1 className="text-8xl mt-[100px] font-bold">Alteca Blog</h1>
    <MoreStories posts={allPosts}></MoreStories>
    </section>
  </Container>
    
  );
}