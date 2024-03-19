

export function HomeProjects() {
    return (
        <section>
            <h2 className="font-bold text-7xl text-center mb-[40px] mt-[100px]">Projects</h2>
            <section className="mb:flex mb:grid mb:grid-rows-2 grid-cols-2 gap-[50px]">
                <div className="p-[30px] border-[white] border-[1px] border-solid mb-[30px] rounded-2xl">
                    <h3 className="text-center font-bold text-5xl">Average Age Calculator</h3>
                    <p className="text-center">This simple Average Calculator combines HTML, CSS, and Javascript to provide a user-friendly way to calculate averages. The HTML structure defines input fields and an output area, CSS ensures a clean interface, and Javascript handles capturing user input, performing the calculation, and displaying the average. Though lacking a fancy interface, it prioritizes functionality for a quick and efficient user experience.</p>
                    <div className="flex justify-center align-center"> <a
                        href="/blog"
                        className="mx-3 bg-black border-[1px] mt-[35px] border-solid border-[white] rounded-2xl hover:bg-white hover:-translate-y-2 hover:text-black text-white font-bold py-3 px-12 lg:px-8 duration-500 transition mb-6 lg:mb-0"
                    >Visit Project</a></div>
                </div>
                <div className="p-[30px] border-[white] border-[1px] border-solid mb-[30px] rounded-2xl">
                    <h3 className="text-center font-bold text-5xl">Lorem Ipsum Generator</h3>
                    <p className="text-center"> This project offers a simple and elegant solution for generating Lorem Ipsum filler text, utilizing the trifecta of HTML, CSS, and Javascript. The HTML lays the groundwork for the user interface, while CSS ensures a visually pleasing design. Javascript handles the logic behind generating random Lorem Ipsum text, providing users with a convenient tool for their design needs.</p>
                    <div className="flex justify-center align-center"> <a
                        href="/blog"
                        className="mx-3 bg-black border-[1px] mt-[35px] border-solid border-[white] rounded-2xl hover:bg-white hover:-translate-y-2 hover:text-black text-white font-bold py-3 px-12 lg:px-8 duration-500 transition mb-6 lg:mb-0"
                    >Visit Project</a></div>
                </div>
                <div className="p-[30px] border-[white] border-[1px] border-solid mb-[30px] rounded-2xl ">

                    <h3 className="text-center font-bold text-5xl">
                        Animated Search bar
                    </h3>
                    <p className="text-center">
                        This simple search bar utilizes CSS animations to create a visually engaging experience without Javascript. Built with basic HTML and creative CSS, it animates on click, expanding the search field. While not functional for searching, it offers a delightful first impression and showcases the power of CSS animation.</p>
                    <div className="flex justify-center align-center">
                        <a
                            href="/blog"
                            className="mx-3 bg-black border-[1px] mt-[35px] border-solid border-[white]  rounded-2xl hover:bg-white hover:-translate-y-2 hover:text-black text-white font-bold py-3 px-12 lg:px-8 duration-500 transition mb-6 lg:mb-0"
                        >Visit Project</a></div>
                </div>
            </section>
        </section>



    )
}