import { FaReact, FaJava } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiTypescript } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <div className="flex gap-4 justify-center items-center text-purple-700 bg-purple-900 mt-10 rotate-180">
        <FaReact className="h-8 w-8 hover:scale-110 hover:text-purple-400 hover:rotate-6 transition-transform duration-300" />
        <FaJava className="h-8 w-8 hover:scale-110 hover:text-purple-400 hover:rotate-6 transition-transform duration-300" />
        <SiJavascript className="h-8 w-8 hover:scale-110 hover:text-purple-400 hover:rotate-6 transition-transform duration-300" />
        <SiTailwindcss className="h-8 w-8 hover:scale-110 hover:text-purple-400 hover:rotate-6 transition-transform duration-300 " />
        <SiTypescript className="h-8 w-8 hover:scale-110 hover:text-purple-400 hover:rotate-6 transition-transform duration-300" />
      </div>
    </div>
  );
};

export default Footer;
