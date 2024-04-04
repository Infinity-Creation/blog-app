import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white border-t-[1px] border-t-solid border-t-[white] rounded-[50px_50px_0_0] mt-[200px]">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Alteca.xyz
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a 
              href="/blog"
              className=" mx-3 bg-black border-[1px] border-solid border-[white] rounded-2xl hover:bg-white hover:-translate-y-2 hover:text-black text-white font-bold py-3 px-12 lg:px-8 duration-500 transition mb-6 lg:mb-0"
            >
              Start Reading
            </a>
          </div>

        </div>


        <div className="justify-center flex gap-[20px] mb-[20px]">
          <a href="https://x.com/alteca_xyz" className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">X</a>
          <a href="https://dev.to/alteca" className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">DEV Community</a>
          <a href="https://alteca.hashnode.dev" className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">Hashnode</a>
          <a href="https://scratch.mit.edu/" className=" relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">Scratch</a>
          <a href="https://github.com/Infinity-Creation" className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">Github</a>
        </div>
        <div className=" justify-center flex mb-[20px]">
          <p> Copyright &copy; 2024. All rights reserved</p>

        </div>
      </Container>
    </footer>
  );
}

export default Footer;
