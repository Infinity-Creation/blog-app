import Container from "@/app/_components/container";

import { NavBar } from "@/app/_components/navbar";

export default function Contact() {
  return (
    <section className="bg-neutral-950 text-white">
      <Container>
        <NavBar></NavBar>
        <h1 className="text-8xl mt-[100px] font-bold text-center">Contact</h1>
        
          <div className="flex  justify-center">
            <a 
              href="mailto:#"
              className=" mx-3 bg-black border-[1px] border-solid border-[white] rounded-2xl hover:bg-white hover:-translate-y-2 hover:text-black text-white font-bold py-3 px-12 lg:px-8 duration-500 transition mb-6 lg:mb-0"
            >
              Contact Me
            </a>
            </div>

      </Container>
    </section>
  );
}