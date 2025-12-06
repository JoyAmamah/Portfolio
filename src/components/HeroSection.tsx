import { motion } from "framer-motion";
import image from "../assets/profileImg (2).jpeg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center text-slate-200 px-4 py-10 md:px-6 bg-slate-900">
      <motion.div
        className="w-40 h-40 mb-6 md:hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={image}
          alt="Profile"
          className="w-full h-full rounded-full shadow-2xl object-cover border-2 border-amber-400"
        />
      </motion.div>

      <motion.div
        className="flex flex-col justify-center items-center md:items-start text-center md:text-left max-w-xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h1 className="text-3xl md:text-6xl font-bold mb-4">
          JOY{" "}
          <span className="text-amber-400 underline decoration-emerald-400 rounded-full">
            AMAMAH
          </span>
        </h1>

        <motion.h3
          className="text-xl md:text-4xl font-bold mb-4 text-blue-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Code, creativity, and a touch of pixel-perfect magic.
        </motion.h3>

        <motion.p
          className="text-base md:text-xl mb-6 text-slate-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          I am a{" "}
          <span className="text-blue-400 font-semibold">
            Frontend Developer
          </span>{" "}
          that builds modern, interactive, and scalable web experiences.
          Passionate about{" "}
          <span className="text-emerald-400 font-semibold">
            crafting solutions
          </span>{" "}
          that are functional, maintainable, and
          <span className="text-amber-400 font-semibold"> delightful</span> to
          use.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-4 w-full md:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <Link
            to="/projects"
            className="w-full md:w-auto px-6 py-3 bg-blue-400 text-slate-900 font-bold rounded-xl shadow-lg hover:bg-blue-300 transition-all duration-300 transform hover:scale-105 text-center border-2 border-blue-400"
          >
            View Projects
          </Link>
          <a
            href="https://drive.google.com/file/d/1a464xlwa96iIQtTO_xfMxRXXWPspH215/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-3 border-2 border-emerald-400 text-emerald-400 font-bold rounded-xl shadow-lg hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 text-center"
          >
            View Resume
          </a>
          <Link
            to="/about"
            className="w-full md:w-auto px-6 py-3 bg-amber-400 text-slate-900 font-bold rounded-xl shadow-lg hover:bg-amber-300 transition-all duration-300 transform hover:scale-105 text-center border-2 border-amber-400"
          >
            More About Me
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-64 md:w-64 hidden md:flex"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-2xl opacity-20 blur-lg"></div>
          <img
            src={image}
            alt="Profile"
            className="w-full h-96 rounded-2xl shadow-2xl object-cover relative z-10 border-2 border-slate-700"
          />
          <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-amber-400/10 rounded-full blur-xl z-0"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
