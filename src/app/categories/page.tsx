import Container from "../_components/container";
import { NavBar } from "../_components/navbar";
import Link from "../../../node_modules/next/link";
export default function Categories() {
    return (
        <Container>
            <section className="  bg-black text-white">
                <NavBar></NavBar>
                <h1 className="mb:text-8xl text-7xl mt-[100px] text-center font-bold">Categories</h1>
                <div className="flex grid grid-cols-2 gap-[50px] mt-[50px]">
                    <div className="px-30 py-20 border-white border-[1px] rounded-3xl">
                        <h2 className="text-6xl  font-bold text-center"> <a href="" className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"> Artificial Intelligence</a></h2>
                        <p className="mx-10 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="px-30 py-20 border-white border-[1px] rounded-3xl">
                        <h2 className="text-6xl  font-bold text-center"> <a href="" className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"> Software Reviews </a></h2>
                        <p className="mx-10 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="px-30 py-20 border-white border-[1px] rounded-3xl">
                        <h2 className="text-6xl  font-bold text-center"> <a href="" className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">JavaScript</a></h2>
                        <p className="mx-10 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="px-30 py-20 border-white border-[1px] rounded-3xl">
                        <h2 className="text-6xl  font-bold text-center"> <a href="" className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">JavaScript</a></h2>
                        <p className="mx-10 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="px-30 py-20 border-white border-[1px] rounded-3xl">
                        <h2 className="text-6xl  font-bold text-center"> <a href="" className="relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">JavaScript</a></h2>
                        <p className="mx-10 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="px-30 py-20 border-white border-[1px] rounded-3xl">
                        <h2 className="text-6xl  font-bold text-center relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">  Scratch</h2>
                        <p className="mx-10 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </section>
        </Container>
    )
}
