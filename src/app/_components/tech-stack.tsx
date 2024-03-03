import Image from "next/image";

// viewBox="0 0 128 128"

export function TechStack() {
  return (
    <section>
      <h2>My Tech Stack</h2>
      <div className="flex justify-center gap-[50px]">
        <div>
          <p>
            I am very fluent in HTML 5 and CSS 3 as well as in JavaScript. I
            also am starting to master Node.js and other more advanced JS and TS
            frameworks like React, I hope to one day become a master of web
            development technologies, but right now that is far from reality.
          </p>
          <p>
            {" "}
            This blog is made using TypeScript React Node.js Next.js and
            TailwindCSS.
          </p>
        </div>
        <div className="flex grid-cols-3 grid-rows-4">
          <div>
            <Image
              priority={true}
              src="/assets/devicons/javascript-original.svg"
              height={96}
              width={96}
              alt="JavaScript"
            />
          </div>
          <div>
          <Image
              priority={true}
              src="/assets/devicons/html5-original.svg"
              height={96}
              width={96}
              alt="HTML5"
            />
          </div>
          <div>
          <Image
              priority={true}
              src="/assets/devicons/css3-original.svg"
              height={96}
              width={96}
              alt="CSS3"
            />
          </div>
          <div>
          <Image
              priority={true}
              src="/assets/devicons/chrome-original.svg"
              height={96}
              width={96}
              alt="Chrome"
            />
          </div>
          <div>
          <Image
              priority={true}
              src="/assets/devicons/opera-original.svg"
              height={96}
              width={96}
              alt="Opera"
            />
          </div>
          <div>
          <Image
              priority={true}
              src="/assets/devicons/firefox-original.svg"
              height={96}
              width={96}
              alt="Firefox"
            />
          </div>
          <div>
          <Image
              priority={true}
              src="/assets/devicons/figma-original.svg"
              height={96}
              width={96}
              alt="Figma"
            />
          </div>
          <div>
          <Image
              priority={true}
              src="/assets/devicons/git-original.svg"
              height={96}
              width={96}
              alt="Git"
            />
          </div>
          <div>
          <Image
              priority={true}
              src="/assets/devicons/nodejs-original.svg"
              height={96}
              width={96}
              alt="Nodejs"
            />
          </div>
          <div>
          <Image
              priority={true}
              src="/assets/devicons/react-original.svg"
              height={96}
              width={96}
              alt="React"
            />
          </div>
          <div>
          <Image
              priority={true}
              src="/assets/devicons/typescript-original.svg"
              height={96}
              width={96}
              alt="TypeScript"
            />
          </div>
          <div>
          <Image
              priority={true}
              src="/assets/devicons/vscode-original.svg"
              height={96}
              width={96}
              alt="VSCode"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
