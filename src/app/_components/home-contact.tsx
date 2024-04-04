import Container from "./container";
export function Contactform() {
    return (
        <Container>
            <section>
                <h2 className="font-bold text-7xl text-center mb-[50px] mt-[100px]">Contact</h2>
                <p>I will be pleased to hear from you</p>
                <a 
              href="/blog"
              className=" mx-3 bg-black border-[1px] border-solid border-[white] rounded-2xl hover:bg-white hover:-translate-y-2 hover:text-black text-white font-bold py-3 px-12 lg:px-8 duration-500 transition mb-6 lg:mb-0"
            >
              Write me an Email
            </a>
            </section>
        </Container>
    )
}