import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_3lmm3x8",
          "template_0n4drds",
          form.current,
          "CGIXKo6YgJQ1y2nda"
        )
        .then(
          () => {
            toast.success("Thanks! Your message is on its way 🚀");
            form.current?.reset();
          },
          (error) => {
            toast.error("❌ Failed to send: " + error.text);
          }
        );
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-emerald-400/5 to-amber-400/5"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl"></div>

      <div className="max-w-2xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-slate-300 mb-10 max-w-md mx-auto">
            Let's turn your ideas into reality. Reach out, and let's build something awesome together!
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-slate-700/50"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col text-left">
            <label className="text-sm font-medium text-slate-300 mb-2">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              required
              className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-slate-200 placeholder-slate-400 transition-all duration-300"
            />
          </div>

          <div className="flex flex-col text-left">
            <label className="text-sm font-medium text-slate-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              required
              className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent text-slate-200 placeholder-slate-400 transition-all duration-300"
            />
          </div>

          <div className="flex flex-col text-left">
            <label className="text-sm font-medium text-slate-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Write your message..."
              required
              className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-slate-200 placeholder-slate-400 resize-none transition-all duration-300"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="w-full px-6 py-4 bg-gradient-to-r from-blue-400 to-emerald-400 text-slate-900 font-bold rounded-xl shadow-lg hover:shadow-blue-400/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
            Send Message
          </motion.button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-8 mt-12 text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/JoyAmamah"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-slate-500 transition-all duration-300 hover:scale-110">
              <FaGithub className="h-6 w-6 text-slate-300 group-hover:text-white transition-colors duration-300" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/joy-amamah"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-400 transition-all duration-300 hover:scale-110">
              <FaLinkedin className="h-6 w-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
            </div>
          </a>
          <a
            href="https://twitter.com/AmamahJoy67001"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-sky-400 transition-all duration-300 hover:scale-110">
              <FaTwitter className="h-6 w-6 text-sky-400 group-hover:text-cyan-300 transition-colors duration-300" />
            </div>
          </a>
          <a
            href="https://wa.me/2349039061002?text=Hi%20Joy!%20I%27d%20like%20to%20work%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-emerald-400 transition-all duration-300 hover:scale-110">
              <FaWhatsapp className="h-6 w-6 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;