import Container from "@/app/_components/container";
import { HeroPost } from "../_components/hero-post";
import { MoreStories } from "../_components/more-stories";
import { getAllPosts } from "../../lib/api";
import { NavBar } from "@/app/_components/navbar";

export default function Blog() {
  const allPosts = getAllPosts();
  return (
    
    <Container>
    <section className="bg-neutral-950 text-white selection:bg-blue-600">
    <NavBar></NavBar>
    <h1 className="text-8xl mt-[100px] font-bold text-center">Alteca Blog</h1>
    <MoreStories posts={allPosts}></MoreStories>
    <div className="flex justify-center align-center">
                        <a
                            href="blog/Archive"
                            className="mx-3 bg-black border-[1px] mt-[35px] border-solid border-[white]  rounded-2xl hover:bg-white hover:-translate-y-2 hover:text-black text-white font-bold py-3 px-12 lg:px-8 duration-500 transition mb-6 lg:mb-0"
                        >See More Posts</a></div>
    </section>
  </Container>
    
  );
}