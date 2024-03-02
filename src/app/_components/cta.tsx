import Image from "next/image";
<<<<<<< HEAD
export function CallToAction() {
    return (
       <Container>
       
        <section className="bg-center">
            {/* <Image
                alt="3d form"
                src="/assets/home/3d-lines.jpg"
                fill
                quality="100"
                sizes="100vw"
                style={{
                    objectFit: "cover",
                }}


            /> */}
            
    <h1 className="text-8xl mt-[100px] font-bold">Alteca</h1>
    <h2 className="font-bold text-5xl mb-[50px] mr-[300px]">Explore Programming Tutorials, Reviews, and How-to-Guides</h2>
    <div className="flex align-center">
    <a href="/blog"className="mx-3 bg-black border-[1px] border-solid border-[white] rounded-2xl hover:bg-white hover:-translate-y-2 hover:text-black text-white font-bold py-3 px-12 lg:px-8 duration-500 transition mb-6 lg:mb-0 " 
            >
            
              Start Reading
            </a>
            </div>
            </section>
    </Container>

);
    }
=======

export function CallToAction() {
  return (
      <section>
        <div className="relative h-screen w-screen overflow-hidden">
          <Image
            alt="3d Form"
            src="/assets/home/3d-lines.jpg"
            quality={100}
            fill={true}
            objectFit="cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 z-1 bg-transparent">
          <h1 className="text-8xl mt-[100px] font-bold bg-transparent">Alteca</h1>
          <h2 className="font-bold text-5xl mb-[50px] bg-transparent">
            Explore Programming Tutorials, Reviews, and How-to-Guides
          </h2>
          <a
            href="/blog"
            className="mx-3 border-[1px] border-solid border-[white] rounded-2xl hover:bg-white hover:-translate-y-4 hover:text-black text-white font-bold py-3 px-12 lg:px-8 duration-500 transition mb-6 lg:mb-0 "
          >
            Start Reading
          </a>
        </div>
      </section>
  );
}
>>>>>>> 88a141ede2e18f8aa0242f638a432c0ee70fc620
