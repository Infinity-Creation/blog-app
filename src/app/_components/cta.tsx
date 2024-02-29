import Container from "./container";
export function CallToAction() {
    return (
       <Container>

    <h1 className="text-8xl mt-[100px] font-bold">Alteca</h1>
    <h2 className="font-bold text-5xl mb-[50px]">Explore Programming Tutorials, Reviews, and How-to-Guides</h2>
    <a
              href="https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts" target={"_blank"}
              className="mx-3 bg-black border-[1px] border-solid border-[white] rounded-2xl hover:bg-white hover:-translate-y-4 hover:text-black text-white font-bold py-3 px-12 lg:px-8 duration-500 transition mb-6 lg:mb-0 " 
            >
              Start Reading
            </a>
    </Container>

);
    }
