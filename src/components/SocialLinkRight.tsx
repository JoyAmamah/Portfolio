import { FaJava, FaReact } from "react-icons/fa6";
import { SiJavascript, SiTailwindcss, SiTypescript } from "react-icons/si";

const SocialLinkRight = () => {
  return (
    <div className="flex flex-col fixed right-6 top-1/2 -translate-y-1/2 z-50 gap-5 items-center md:flex">
      {/* Background Container */}
      <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/50 shadow-2xl">
        <div className="flex flex-col gap-5">
          <FaReact className="h-5 w-5 text-blue-400 hover:scale-125 hover:text-cyan-300 transition-all duration-300 cursor-pointer" />
          <FaJava className="h-5 w-5 text-emerald-400 hover:scale-125 hover:text-emerald-300 transition-all duration-300 cursor-pointer" />
          <SiJavascript className="h-5 w-5 text-amber-400 hover:scale-125 hover:text-amber-300 transition-all duration-300 cursor-pointer" />
          <SiTailwindcss className="h-5 w-5 text-sky-400 hover:scale-125 hover:text-cyan-300 transition-all duration-300 cursor-pointer" />
          <SiTypescript className="h-5 w-5 text-blue-500 hover:scale-125 hover:text-blue-300 transition-all duration-300 cursor-pointer" />
        </div>
      </div>
      
      {/* Connecting Line */}
      <div className="h-20 w-0.5 bg-gradient-to-b from-blue-400 to-amber-400 rounded-full opacity-60"></div>
    </div>
  );
};

export default SocialLinkRight;