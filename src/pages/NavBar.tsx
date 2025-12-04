import { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaBars, FaFileDownload, FaTimes } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "opacity-95 md:backdrop-blur-md shadow-lg bg-slate-900/95 border-b border-slate-700"
          : "bg-gradient-to-r from-slate-900 to-slate-800 shadow-md border-b border-slate-700/50"
      }`}
    >
      <div className="container mx-auto px-4 md:px-10 lg:px-20 flex justify-between items-center h-16">
        <div className="flex items-center gap-2">
          <span className="font-bold flex items-center gap-2 text-white text-xl">
            <FaReact className="text-blue-400" size={24}/>
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              JOY
            </span>
          </span>
        </div>

        <div className="hidden md:flex gap-4 lg:gap-6 text-slate-200 text-base lg:text-lg">
          <Link
            to="/"
            className="px-2 py-2 border-b-2 border-transparent hover:border-blue-400 hover:text-white transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="px-2 py-2 border-b-2 border-transparent hover:border-emerald-400 hover:text-white transition-all duration-300"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="px-2 py-2 border-b-2 border-transparent hover:border-amber-400 hover:text-white transition-all duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="px-2 py-2 border-b-2 border-transparent hover:border-blue-400 hover:text-white transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>

        <button className="hidden md:flex items-center gap-2 ml-4 md:ml-6 px-4 md:px-5 py-2 md:py-2.5 text-sm md:text-base rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 text-slate-900 hover:from-blue-300 hover:to-emerald-300 transition-all duration-300 font-semibold shadow-lg hover:shadow-blue-400/25 hover:scale-105">
          <FaFileDownload size={16} />
          <a
            href="https://drive.google.com/file/d/1a464xlwa96iIQtTO_xfMxRXXWPspH215/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </button>

        <div className="md:hidden text-slate-200">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="p-2 hover:text-white transition-colors duration-300"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden flex flex-col items-center gap-4 py-6 text-slate-200 border-t border-slate-700 text-base bg-slate-800/95 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to="/"
            className="hover:text-blue-400 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-slate-700/50 w-32 text-center"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="hover:text-emerald-400 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-slate-700/50 w-32 text-center"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="hover:text-amber-400 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-slate-700/50 w-32 text-center"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-400 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-slate-700/50 w-32 text-center"
            onClick={() => setIsOpen(false)}
          >
            Contact Me
          </Link>
          <button className="flex items-center gap-2 mt-2 px-5 py-2.5 text-base rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 text-slate-900 hover:from-blue-300 hover:to-emerald-300 transition-all duration-300 font-semibold shadow-lg">
            <FaFileDownload size={16} />
            <a 
              href="/Joy_Amamah_Frontend_CV.pdf" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;