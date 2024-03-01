import Container from "./container";
import Image from "next/image";
export function CallToAction() {
    return (
       <Container>
       
        <section className="bg-center">
            <Image
                alt="3d form"
                src="/assets/home/3d-lines.jpg"
                fill
                quality="100"
                sizes="100vw"
                style={{
                    objectFit: "cover",
                }}


            />
            
    <h1 className="text-8xl mt-[100px] font-bold">Alteca</h1>
    <h2 className="font-bold text-5xl mb-[50px]">Explore Programming Tutorials, Reviews, and How-to-Guides</h2>
    <div className="flex justify-center align-center">
    <a href="/blog"className="mx-3 bg-black border-[1px] border-solid border-[white] rounded-2xl hover:bg-white hover:-translate-y-2 hover:text-black text-white font-bold py-3 px-12 lg:px-8 duration-500 transition mb-6 lg:mb-0 " 
            >
            
              Start Reading
            </a>
            </div>
            </section>
    </Container>

);
    }
