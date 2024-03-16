import Container from "./container"

export function AboutHome() {
    return (
        <Container>
            <h2 className="font-bold text-7xl text-center">About</h2>

            <section className="flex justify-center mt-[100px] mb-[100px] gap-[30px]">
                <section className="border-[1px] border-solid border-[white]  rounded-3xl p-[30px] text-center" >
                    <h3 className=" font-bold text-5xl">Who am I</h3>
                    <p>I am a teen who loves Web Development technologies such as JS TS and React. I really look forward to sharing my knowledge in coding with others via this blog and giving you a bit of my personal experience with Web Development.</p>
                </section>
                <section className="border-[1px] border-solid rounded-3xl  border-[white] p-[30px] text-center">
                    <h3 className=" font-bold text-5xl">Why I blog</h3>
                    <p> I started blogging because I find it fun putting my programming knowledge into words and helping others with difficult problems. Although my experience isn't that big, feel free to <a href="">contact</a> me if you're struggling with a problem related to Web Development</p>

                </section>
                <section className="border-[1px] border-solid rounded-3xl border-[white] p-[30px] text-center">
                    <h3 className=" font-bold text-5xl">What I Write About</h3>
                    <p>I find it fun writing about JavaScript, HTML and CSS projects, soon enough React and TypeScript will also be on this list. I also do many software reviews of free software tools that I like or dislike.</p>
                </section>
            </section>
        </Container>

    );
}