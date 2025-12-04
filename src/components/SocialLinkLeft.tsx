import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const SocialLinkLeft = () => {
  return (
    <div className="flex-col gap-5 items-center fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex">
      {/* Background Container */}
      <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/50 shadow-2xl">
        <div className="flex flex-col gap-5">
          <a
            href="https://github.com/JoyAmamah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-5 w-5 text-slate-300 hover:scale-125 hover:text-white transition-all duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/joy-amamah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-5 w-5 text-blue-400 hover:scale-125 hover:text-blue-300 transition-all duration-300" />
          </a>
          <a
            href="https://twitter.com/AmamahJoy67001"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="h-5 w-5 text-sky-400 hover:scale-125 hover:text-cyan-300 transition-all duration-300" />
          </a>
          <a
            href="https://wa.me/2349039061002?text=Hi%20Joy!%20I%27d%20like%20to%20work%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="h-5 w-5 text-emerald-400 hover:scale-125 hover:text-emerald-300 transition-all duration-300" />
          </a>
        </div>
      </div>
      
      {/* Connecting Line */}
      <div className="h-20 w-0.5 bg-gradient-to-b from-slate-300 to-emerald-400 rounded-full opacity-60"></div>
    </div>
  );
};

export default SocialLinkLeft;