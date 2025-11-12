"use client"
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground";

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      <ParticlesHero />
      <div className="relative z-10 flex flex-col items-center">
        <Image className="rounded-full border-8 border-[#0c0c48aa]" src="/images/s1.jpg" alt="hero image" width={150} height={150} />
        <h2 className="text-2xl ms:text-4xl md:text-5xl lg:text-6xl font-bold mt-6 text-center tracking-wider">
          用代码实现创意，<br />
          用专业
          <span className="text-cyan-200">交付价值。</span>
        </h2>
        <h3 className="mt-5 px-2 text-center text-lg ms:text-2xl md:text-3xl lg:text-4xl font-medium flex items-center">
          Hi! 我是李觊 - 擅长
          <span className="text-cyan-200 font-bold">
            <Typewriter
              options={{
                strings: ["Next.js", "React", "Vue", "TypeScript", "Node.js"],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-2",
              }}
            />
          </span>
        </h3>
        <button className="mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium text-white ">
          <span>查看我的案例</span>
          <BsArrowRight className="w-5 h-5 inline-block ml-2" />
        </button>
      </div>
    </div>
  );
}

export default Hero;