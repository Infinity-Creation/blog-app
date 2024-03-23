import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { NavBar } from "@/app/_components/navbar"

export default function Archive() {
    const allPosts = getAllPosts();
    return (
    <Container>
        <section className="bg-[black] text-white">
            <NavBar></NavBar>
        <h1 className="text-7xl mt-[100px] font-bold text-center mb-[50px]">Archive</h1>
        <MoreStories posts={allPosts}></MoreStories>
        </section>
    </Container>
    )
}