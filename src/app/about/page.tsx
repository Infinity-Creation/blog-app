import Container from "@/app/_components/container";

import { NavBar } from "@/app/_components/navbar";

export default function About() {
  return (
    <section className="bg-neutral-950 text-white selection:bg-blue-600">
      <Container>
        <NavBar></NavBar>
        <h1 className="text-8xl mt-[100px] font-bold text-center">About Me</h1>
        <div className="mr-[200px] ml-[200px]">
          <p className="text-center text-xl mt-[20px]">Hey there! I'm a teenager with a huge passion for web development and design. The process of turning ideas into functional and visually appealing websites is what excites me the most. This fascination led me to dive deep into the world of code and design principles.</p>
          <p className="text-center text-xl mt-[20px]">I created this blog with the intention of sharing my journey and experiences with others. Whether you're a fellow teen just starting out, or someone curious about the world of web development, this blog is for you! Here, I'll be talking about the various tools and technologies I use to bring websites to life.</p>
          <p className="text-center text-xl mt-[20px]">Some of the key areas I'll be focusing on include JavaScript (JS), a programming language that adds interactivity to web pages.  I'll also delve into Tailwind CSS, a utility-first framework that makes styling websites a breeze.  Of course, the fundamentals like HTML and CSS, the building blocks of websites, won't be left behind.  And for those interested in building complex user interfaces, I'll be exploring TypeScript (TS) and React, powerful tools for front-end development.</p>
          <p className="text-center text-xl mt-[20px]">So, buckle up and get ready to explore the exciting world of web development with me! I'll be sharing tips, tricks, and my own learning experiences to help you navigate this ever-evolving field. Let's build something awesome together!</p>
          <h2 className="text-7xl mt-[100px] font-bold text-center">My Story</h2>
          <p className="text-center text-xl mt-[20px]">My first introduction to programming was Scratch, a programming language made for kids to understand the basics of coding. From the very second I started doing Scratch I developed a passion for it and was well ahead of everyone else in the coding class. 3 years later I rediscovered programming for myself as I started coding in Scratch. 6 months later I became a Scratch addict, but got rid of my addiction in the most elaborate way. I decided to start learning HTML and eventually CSS, for a year my knowledge of JavaScript was very limited and I was trying to make the most of what I knew already sofar. Then I was finally introduced to DOM and started harnessing the full power of web development.</p>
          
      </div>
    </Container>
    </section >
  );
}
