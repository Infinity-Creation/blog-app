import Container from "@/app/_components/container";

import { NavBar } from "@/app/_components/navbar";

export default function Projects() {
  return (
    <section className="bg-neutral-950 text-white">
      <Container>
        <NavBar></NavBar>
        <h1 className="text-8xl mt-[100px] font-bold">Alteca Blog</h1>
      </Container>
    </section>
  );
}