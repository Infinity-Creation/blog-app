import Container from "@/app/_components/container";

import { NavBar } from "@/app/_components/navbar";

export default function Contact() {
  return (
    <section className="bg-neutral-950 text-white">
      <Container>
        <NavBar></NavBar>
        <h1 className="text-8xl mt-[100px] font-bold">Contact</h1>
        <h2 className="text-6xl mt-[50px] font-bold" >Social</h2>
        <ul>
          <li><a href="https://dev.to/alteca" className="text-2xl text-blue-600">DEV Community</a></li>
          <li><a href="https://scratch.mit.edu/users/Infinity-creations/" className="text-2xl text-blue-600">Scratch</a></li>
          <li><a href="https://x.com/@Alteca_xyz" className="text-2xl text-blue-600 ">X/Twitter</a></li>
          <li><a href="https://alteca.hashnode.dev" className="text-2xl text-blue-600">Hashnode</a></li>
          </ul>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
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