import Image from "next/image";



export function CallToAction() {
    return (
        <section>
           <script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.78/build/spline-viewer.js"></script>
<spline-viewer url="https://prod.spline.design/VKbdTRdTcIJMg19J/scene.splinecode"></spline-viewer>
            <div className=" md:ml-[-100px] absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 z-1 bg-transparent">
                
                <h1 className=" bg-transparent text-7xl mt-[100px] font-bold flex"> <div className="text-transparent bg-clip-text bg-gradient-to-r selection:text-white from-pink-500 to-blue-600 mr-[10px]">Unleash </div> Your Code</h1>
                <h2 className="font-600 bg-transparent text-3xl mb-[50px] ">
                Dive into the world of fullstack web development and build amazing projects with me.
                </h2>
                <div className=" bg-transparent flex align-center">
                    <a
                        href="/blog"
                        className="mx-3 border-[1px] border-solid bg-white text-[black] border-[white] rounded-2xl hover:bg-white font-bold py-3 px-12 lg:px-8 duration-500 transition mb-6 lg:mb-0 "
                    >
                        Start Reading
                    </a>
                </div>
            </div>
            <div className="h-[200px] bg-transparent"></div>
        </section>
    );
}
