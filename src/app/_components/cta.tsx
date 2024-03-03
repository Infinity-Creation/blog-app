import Image from "next/image";



export function CallToAction() {
    return (
        <section>
            <div className="relative h-screen w-screen overflow-hidden">
                <Image
                    alt="3d Form"
                    src="/assets/home/Abstract-Graphic.jpeg"
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
                <div className=" bg-transparent flex align-center">
                    <a
                        href="/blog"
                        className="mx-3 border-[1px] border-solid border-[white] rounded-2xl hover:bg-white hover:-translate-y-2 hover:text-black text-white font-bold py-3 px-12 lg:px-8 duration-500 transition mb-6 lg:mb-0 "
                    >
                        Start Reading
                    </a>
                </div>
            </div>
        </section>
    );
}
