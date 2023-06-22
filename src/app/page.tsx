import Image from "next/image";
import { Socials, TechStack, Experience } from "./clientComponents.tsx";

export default function Home() {
  return (
    <main className="overflow-y-scroll scroll-smooth scrollbar">
      <div
        id="home"
        className="flex flex-col h-full min-h-[650px] items-center justify-center"
      >
        <div className="hero flex-col">
          <div className="hero-content flex-col md:flex-row-reverse">
            <Image
              src="/profile.png"
              width={1200}
              height={1200}
              className="max-w-sm rounded-full border-2 border-black shadow-2xl w-40 sm:w-56 md:w-80 transition-all duration-1000"
              alt=""
            />
            <div>
              <h1 className="text-3xl md:text-5xl font-bold transition-all duration-1000">
                Back-End Developer 👋
              </h1>
              <p className="py-6 text-xl leading-loose">
                Hi, I'm Kang-In Park. A back-end developer based in New York.
                <br />I like building cool things and learning new things.
              </p>
              <Socials />
            </div>
          </div>
        </div>
        <div className="hero flex-col mt-4 md:mt-12 2xl:mt-32 items-center">
          <div className="hero-content flex-col md:flex-row md:divide-x divide-gray-400">
            <p className="md:pr-8 text-xl transition-all duration-1000">
              I enjoy working with
            </p>
            <TechStack />
          </div>
        </div>
      </div>
      <div
        id="experience"
        className="flex flex-col h-full min-h-[650px] items-center justify-center bg-white"
      >
        <div className="hero flex-col">
          <div className="hero-content flex-col p-0 my-12">
            <Experience />
          </div>
        </div>
      </div>
      <footer className="footer footer-center p-4 text-base-content">
        <div>
          <p>Made with Next.JS and TailwindCSS</p>
        </div>
      </footer>
    </main>
  );
}
