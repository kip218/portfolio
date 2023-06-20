import Image from 'next/image'
import { Socials, TechStack } from './clientComponents.tsx'

export default function Home() {
  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <div className="hero flex-col">
        <div className="hero-content flex-col md:flex-row-reverse">
          <Image src="/profile.png" width={1200} height={1200} className="max-w-sm rounded-full border-2 border-black shadow-2xl w-64 md:w-80 transition-all duration-1000"/>
          <div>
            <h1 className="text-3xl md:text-5xl font-bold transition-all duration-1000">Back-End Developer 👋</h1>
            <p className="py-6">Hi, I'm Kang-In Park. A back-end developer based in New York.</p>
            <Socials/>
          </div>
        </div>
      </div>
      <TechStack/>
    </main>
  )
}
