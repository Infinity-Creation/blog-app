import Image from "next/image";

// viewBox="0 0 128 128"

export function TechStack() {
  return (
    <section >
      <h2 className="font-bold text-7xl text-center">My Tech Stack</h2>
      <div className="flex justify-center gap-[50px] mt-[50px]">
      <div className="md:flex justify-center gap-[50px]">
        <div className=" p-[50px] w-45 mb-[30px] border-[1px] border-[white] border-solid rounded-2xl">
          <p className="text-center">
          Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Vitae aliquet nec ullamcorper sit amet risus. Nec ullamcorper sit amet risus nullam. Nisl condimentum id venenatis a condimentum vitae. Purus semper eget duis at tellus at urna condimentum mattis. Nibh tellus molestie nunc non blandit. Nunc mi ipsum faucibus vitae aliquet nec. Nibh praesent tristique magna sit amet purus gravida. Id consectetur purus ut faucibus pulvinar elementum integer. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Convallis a cras semper auctor. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. Faucibus scelerisque eleifend donec pretium vulputate sapien. Est pellentesque elit ullamcorper dignissim cras. Ut porttitor leo a diam sollicitudin tempor id eu. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.
          </p>
          <p className="mt-[20px] text-center">
            {" "}
            This blog is made using TypeScript React Node.js Next.js and
            TailwindCSS.
          </p>
        </div>
        <div className="flex grid grid-cols-4 grid-rows-3 gap-[30px]">
          
          <div>
          <Image
              priority={true}
              src="/assets/devicons/html5-original.svg"
              height={200}
              width={200}
              alt="HTML5"
            />
          </div>
          <div>
          <Image
              priority={true}
              src="/assets/devicons/css3-original.svg"
              height={200}
              width={96}
              alt="CSS3"
            />
          </div>
          <div>
            <Image
              priority={true}
              src="/assets/devicons/javascript-original.svg"
              height={1}
              width={200}
              alt="JavaScript"
            />
          </div>
          <div>
          <Image
              priority={true}
              src="/assets/devicons/typescript-original.svg"
              height={200}
              width={96}
              alt="TypeScript"
            />
          </div>
          <div>
          <Image
              priority={true}
              src="/assets/devicons/figma-original.svg"
              height={200}
              width={96}
              alt="Figma"
            />
          </div>
          <div>
          <Image
              priority={true}
              src="/assets/devicons/chrome-original.svg"
              height={200}
              width={96}
              alt="Chrome"
            />
          </div>
          <div>
          <Image
              priority={true}
              src="/assets/devicons/opera-original.svg"
              height={200}
              width={96}
              alt="Opera"
            />
          </div>
          <div>
          <Image
              priority={true}
              src="/assets/devicons/firefox-original.svg"
              height={200}
              width={96}
              alt="Firefox"
            />
          </div>
          <div>
          <Image
              priority={true}
              src="/assets/devicons/react-original.svg"
              height={200}
              width={96}
              alt="React"
            />
          </div>
          <div>
          <Image
              priority={true}
              src="/assets/devicons/nodejs-original.svg"
              height={200}
              width={96}
              alt="Nodejs"
            />
          </div>
          <div>
          <Image
              priority={true}
              src="/assets/devicons/git-original.svg"
              height={200}
              width={96}
              alt="Git"
            />
          </div>
          
          
          
          <div>
          <Image
              priority={true}
              src="/assets/devicons/vscode-original.svg"
              height={200}
              width={96}
              alt="VSCode"
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
