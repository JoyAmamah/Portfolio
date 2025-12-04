import { motion } from "framer-motion";
import Technologies from "../components/Technologies";
import profileImage from "../assets/profileImg.jpeg"; 

const About = () => {
  return (
    <section className="pt-20 md:pt-32 px-6 md:px-12 mx-auto bg-slate-900 min-h-screen">
      {/* About Me Section */}
      <motion.div
        className="flex flex-col px-16 md:flex-row items-center gap-10 md:gap-16 mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
        viewport={{ once: true, amount: 0.3 }} 
      >
        {/* Text Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              About Me
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-2">
              Joy Amamah
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-amber-400 rounded-full"></div>
          </div>

          <div className="space-y-6">
            <p className="text-slate-300 leading-relaxed text-lg bg-slate-800/50 p-6 rounded-xl border-l-4 border-blue-400 shadow-lg backdrop-blur-sm">
              I am a creative and detail-oriented Frontend Developer with strong experience in
              building responsive, user-focused web and mobile applications. I specialize in React,
              Next.js, and React Native, combining clean UI implementation with solid frontend
              architecture to deliver products that are fast, accessible, and intuitive.
            </p>

            <p className="text-slate-300 leading-relaxed text-lg bg-slate-800/50 p-6 rounded-xl border-l-4 border-emerald-400 shadow-lg backdrop-blur-sm">
              With hands-on expertise in JavaScript, HTML, CSS, Tailwind CSS, Material UI, and REST
              API integration, I enjoy transforming ideas into well-structured digital experiences. I
              also bring a solid understanding of UI/UX design principles, leveraging tools like Figma
              to collaborate effectively with designers and bring polished interfaces to life.
            </p>

            <p className="text-slate-300 leading-relaxed text-lg bg-slate-800/50 p-6 rounded-xl border-l-4 border-amber-400 shadow-lg backdrop-blur-sm">
              My professional journey includes developing production-level applications at Gheli
              Technology Solutions, building real-world projects during the Uptick Talent Fellowship,
              and working across Agile teams to ship features, optimize performance, and solve
              complex frontend challenges.
            </p>

            <p className="text-slate-300 leading-relaxed text-lg bg-slate-800/50 p-6 rounded-xl border-l-4 border-blue-400 shadow-lg backdrop-blur-sm">
              I'm passionate about continuous learning, building scalable user interfaces, and
              crafting solutions that balance functionality with beautiful design. My goal is to
              contribute to impactful products while growing into a more advanced frontend and
              full-stack engineer.
            </p>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="w-full md:w-96 h-72 md:h-96 relative flex-shrink-0 group"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/10 to-blue-400/10 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
          <img
            src={profileImage}
            alt="Joy Amamah - Frontend Developer"
            className="w-full h-full object-cover rounded-2xl relative z-10 shadow-2xl group-hover:shadow-3xl transition-all duration-300 border-2 border-slate-700"
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-400/10 rounded-full blur-xl z-0 group-hover:bg-emerald-400/10 transition-all duration-300"></div>
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-amber-400/10 rounded-full blur-xl z-0 group-hover:bg-blue-400/10 transition-all duration-300"></div>
        </motion.div>
      </motion.div>

      {/* Technologies Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-2xl"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
            Technologies I Use
          </h1>
          <h2 className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Here are some technologies I'm currently using or have used recently to build amazing digital experiences
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-amber-400 rounded-full mx-auto mt-4"></div>
        </div>
        
        <div className="mt-8">
          <Technologies />
        </div>
      </motion.div>
    </section>
  );
};

export default About;