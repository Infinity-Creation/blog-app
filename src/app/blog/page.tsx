import Container from "@/app/_components/container";

import { NavBar } from "@/app/_components/navbar";

export default function Blog() {
  return (
    <section className="bg-neutral-950 text-white">
      <Container>
        <NavBar></NavBar>
        <div>Blog Page</div>
      </Container>
    </section>
  );
}