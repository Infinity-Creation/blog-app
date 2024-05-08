import Container from "@/app/_components/container";

import { NavBar } from "@/app/_components/navbar";

export default function Contact() {
  return (
    <section className="bg-neutral-950 text-white selection:bg-blue-600">
      <Container>
        <NavBar></NavBar>
        <h1 className="text-7xl mt-[100px] font-bold text-center">Let's Talk</h1>
        
        <h3 className="text-center text-3xl mb-[20px]">You can email me on my Alteca email or DM me on X/Twitter</h3> <h3 className="text-center text-3xl mb-[50px]">Feel Free to reach if you need advice on web development and tech related things. I also am available for backlink exchanges</h3>
          <div className="flex justify-around">
            <a 
              href="mailto:#"
              className=" mx-3 bg-white border-[1px] border-solid border-[white] rounded-2xl hover:bg-black hover:-translate-y-2 hover:text-white text-black font-bold py-3 px-12 lg:px-8 duration-500 transition mb-6 lg:mb-0"
            >
              Email Me
            </a>
            <a 
              href="mailto:#"
              className=" mx-3 bg-black border-[1px] border-solid border-[white] rounded-2xl hover:bg-white hover:-translate-y-2 hover:text-black text-white font-bold py-3 px-12 lg:px-8 duration-500 transition mb-6 lg:mb-0"
            >
              DM Me on X
            </a>
            </div>
           

      </Container>
    </section>
  );
}