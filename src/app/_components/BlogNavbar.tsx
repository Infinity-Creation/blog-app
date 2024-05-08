import { Container } from "./container";
import Link from 'next/link';

export function BlogNavBar() {
    return (
        <Container>
            <section>
                <nav className=" p-4">
                    <div className="flex justify-between items-center  border-b-[1px] border-b-solid border-b-[white] fixed">
                        <div>
                            <Link href="/" className="text-white mr-4 ">
                                Home
                            </Link>
                            <Link href="/blog" className="text-white mr-4 ">
                                Blog
                            </Link>
                            <Link href="/projects" className="text-white mr-4 ">
                                Projects
                            </Link>
                            <Link href="/categories" className="text-white mr-4">
                                Categories
                            </Link>
                            <Link href="/about" className="text-white mr-4 ">
                                About
                            </Link>
                            <Link href="/contact" className="text-white mr-4">
                                Contact
                            </Link>
                        </div>
                    </div>
                </nav></section>
        </Container>
    )
}