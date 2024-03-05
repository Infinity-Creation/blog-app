import Container from "@/app/_components/container";
import { NavBar } from "@/app/_components/navbar";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="bg-neutral-950 text-white">
      <Container>
        <NavBar></NavBar>
        <h1 className="text-8xl mt-[100px] text-center font-bold">Projects</h1>
        <div className="flex justify-center mt-[50px] mb-[25px] items-center">
          <div className="border-[white] border-solid border-[1px] p-[50px] rounded-3xl">
          <div className="flex justify-center">
          <Image
              priority={true}
              src="/assets/home/animated-search-bar.jpg"
             width="1000"
             height="300"
              alt="HTML5"
              text="center"
              className={("shadow-sm w-full rounded-3xl mb-[30px]")}
            />
          </div>
            <h2 className="text-6xl  font-bold text-center" >Animated Search bar</h2>
            <p className="text-center">This project showcases the power of CSS animations to create a visually engaging search bar experience. Built solely with HTML and CSS, it offers a delightful first impression without requiring any Javascript for functionality.</p>
            <div className="flex justify-center align-center">
              <a
                href="https://infinity-creation.github.io/Animated-Searchbar/" target={"_blank"}
                className="mx-3 bg-black border-[1px] mt-[35px] border-solid border-[white]  rounded-2xl hover:bg-white hover:-translate-y-2 hover:text-black text-white font-bold py-3 px-12 lg:px-8 duration-500 transition mb-6 lg:mb-0"
              >Visit Project</a></div>
          </div>
        </div>

        <div className="flex justify-center mt-[50px] mb-[25px] items-center">
          <div className="border-[white] border-solid border-[1px] p-[50px] rounded-3xl">
          <div className="flex justify-center">
          <Image
              priority={true}
              src="/assets/home/average-calculator.jpg"
             width="1000"
             height="300"
              alt="HTML5"
              text="center"
              className={("shadow-sm w-full rounded-3xl mb-[30px]")}
            />
            </div>
            <h2 className="text-6xl text-center font-bold" >Average Calculator</h2>
            <p className="text-center">This project tackles a practical need: calculating the average of a set of numbers. It leverages the combined strengths of HTML, CSS, and Javascript to create a functional tool, prioritizing usability over flashy visuals.</p>
            <div className="flex justify-center align-center">
              <a
                href="https://infinity-creation.github.io/Average-Age-Calculator/" target={"_blank"}
                className="mx-3 bg-black border-[1px] mt-[35px] border-solid border-[white]  rounded-2xl hover:bg-white hover:-translate-y-2 hover:text-black text-white font-bold py-3 px-12 lg:px-8 duration-500 transition mb-6 lg:mb-0"
              >Visit Project</a></div>
          </div>
        </div>

        <div className="flex justify-center mt-[50px] mb-[25px] items-center">
          <div className="border-[white] border-solid border-[1px] p-[50px] rounded-3xl">
          <div className="flex justify-center">
          <Image
              priority={true}
              src="/assets/home/lorem.jpg"
             width="1000"
             height="300"
              alt="HTML5"
              text="center"
              className={("shadow-sm w-full rounded-3xl mb-[30px]")}
            />
            </div>
            <h2 className="text-6xl text-center font-bold" >Lorem Ipsum Generator</h2>
            <p className="text-center">This project tackles a common need for designers and web developers: generating placeholder text, also known as Lorem Ipsum. Built with HTML, CSS, and Javascript, it offers a user-friendly and efficient solution for everyday use.

            </p>
            <div className="flex justify-center align-center">
              <a
                href="https://infinity-creation.github.io/LoremIpsum.github.io/" target={"_blank"}
                className="mx-3 bg-black border-[1px] mt-[35px] border-solid border-[white]  rounded-2xl hover:bg-white hover:-translate-y-2 hover:text-black text-white font-bold py-3 px-12 lg:px-8 duration-500 transition mb-6 lg:mb-0"
              >Visit Project</a></div>
          </div>
        </div>

      </Container>
    </section>
  );
}