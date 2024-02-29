import Container from "@/app/_components/container";

import { NavBar } from "@/app/_components/navbar";

export default function About() {
  return (
    <section className="bg-neutral-950 text-white">
      <Container>
        <NavBar></NavBar>
        <div>About Page</div>
      </Container>
    </section>
  );
}
