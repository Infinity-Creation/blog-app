import Container from "@/app/_components/container";
import Link from 'next/link';
import Image from "next/image";

export function NavBar() {
  return (
    <Container>
    <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10 p-4">
      
      <div className="justify-between px-2 mx-auto lg:max-w-7xl md:items-center md:flex md:px-4">
        <div>
          <div className=" flex justify-center items-center">
            <Image  alt="3d Form"
                    src="/assets/home/favincon.jpg"
                    quality={100} 
                    width={75}
                    height={75}
                    priority={true} />
                <div className="text-3xl font-400 ">Alteca</div>
                   
          </div>
        </div>
        <div>
          <Link href="/" className="text-white mr-4 relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
            Home
          </Link>
          <Link href="/blog" className="text-white mr-4 relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
            Blog
          </Link>
          <Link href="/projects" className="text-white mr-4 relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
            Projects
          </Link>
          <Link href="/about" className="text-white mr-4 relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
            About
          </Link>
          <Link href="/contact" className="text-white mr-4 relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
            Contact
          </Link>
        </div>
      </div>
    </nav>
    </Container>
  );
};
