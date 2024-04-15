"use client";
import Image from "next/image";
import { Typewriter } from 'react-simple-typewriter';


export function CallToAction() {

    const handleType = (count: number) => {
        // access word count number
        console.log(count)
    }


    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }
    return (

        <section className="bg-transparent lg:mb-[300px] mb-[500px]">
            <script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.78/build/spline-viewer.js"></script>
            <spline-viewer url="https://prod.spline.design/VKbdTRdTcIJMg19J/scene.splinecode"></spline-viewer>
            <div className="  ml-[0] mr-[0] mt-[0px] lg:mt-[-200px] max-w-[600px] bg-transparent">


                <h1 className=" bg-transparent lg:text-7xl text-5xl mt-[100px] mr-[-100px]  flex font-bold flex">  <div className="text-transparent bg-clip-text bg-gradient-to-r selection:text-white wrap from-pink-500 to-blue-600 mr-[14px]" >Unleash</div> <div className="mr-[14px]"> your </div><Typewriter
                    words={['Creativity', 'Design', 'Code']}
                    loop={3}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    onLoopDone={handleDone}
                    onType={handleType}
                    className="text-transparent bg-clip-text bg-gradient-to-r selection:text-white from-pink-500 to-blue-600"
                /></h1>
                <h2 className="font-600 bg-transparent lg:text-3xl text-2xl  mb-[50px] ">
                    Dive into the world of fullstack web development and build amazing projects with me.
                </h2>
                <div className=" bg-transparent flex align-center">
                    <a
                        href="/blog"
                        className="mx-3 border-[1px] border-solid bg-white text-[black] border-[white] rounded-2xl hover:bg-white font-bold py-3 px-12 lg:px-8 duration-500 transition mb-[200px] lg:mb-0 "
                    >
                        Start Reading
                    </a>
                </div>
            </div>
            <div className="mb-[200px] bg-transparent"></div>
        </section>
    );
}
