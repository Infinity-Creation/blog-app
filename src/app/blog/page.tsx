import Container from "@/app/_components/container";
import { HeroPost } from "../_components/hero-post";
import { MoreStories } from "../_components/more-stories";
import { NavBar } from "@/app/_components/navbar";

export default function Blog() {
  return (
    
    <Container>
    <section className="bg-neutral-950 text-white">
    <NavBar></NavBar>
    <h1 className="text-8xl mt-[100px] font-bold">Alteca Blog</h1>
    </section>
  </Container>
    
  );
}