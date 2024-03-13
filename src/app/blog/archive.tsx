import Container from "@/app/_components/container";
import { HeroPost } from "../_components/hero-post";
import { MoreStories } from "../_components/more-stories";
import { getAllPosts } from "../../lib/api";
import { NavBar } from "@/app/_components/navbar"

export default function Archive() {
    const allPosts = getAllPosts();
    return (
    <Container>
        <section className="bg-[black]">
            <NavBar></NavBar>
        <h1 className="text-8xl mt-[100px] font-bold text-center">Archive</h1>
        <MoreStories posts={allPosts}></MoreStories>
        </section>
    </Container>
    )
}