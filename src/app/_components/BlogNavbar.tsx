import { Container } from "./container";
import Link from 'next/link';

export function BlogNavBar() {
    return (
        <Container>
            <section>
                <nav className=" p-4">
                    <div className="flex justify-between items-center hover:underline">
                        <div>
                            <Link href="/" className="text-white mr-4 hover:underline">
                                Home
                            </Link>
                            <Link href="/blog" className="text-white mr-4 hover:underline">
                                Blog
                            </Link>
                            <Link href="/projects" className="text-white mr-4 hover:underline">
                                Projects
                            </Link>
                            <Link href="/about" className="text-white mr-4 hover:underline">
                                About
                            </Link>
                            <Link href="/contact" className="text-white mr-4 hover:underline">
                                Contact
                            </Link>
                        </div>
                    </div>
                </nav></section>
        </Container>
    )
}