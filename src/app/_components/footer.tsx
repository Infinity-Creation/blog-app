import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-950 border-white text-white">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Alteca.xyz
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts" target={"_blank"}
              className="mx-3 bg-blue-600 rounded-xl hover:bg-white hover:-translate-y-10 hover:size() hover:text-black text-white font-bold py-3 px-12 lg:px-8 duration-1000 transition mb-6 lg:mb-0"
            >
              Start Reading
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
