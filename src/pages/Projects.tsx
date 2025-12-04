import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  featured?: boolean;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Learn Management System Dashboard",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["Next.js", "Node.js", "Typescript", "Tailwind CSS"],
      githubUrl: "https://github.com/upticktalent/uptick-talent-lms-koala",
      liveUrl: "https://uptick-lms-frontend.vercel.app/lms/dashboard",
      image: "/images/LMS.png",
      featured: true
    },
     {
      id: 6,
      title: "Recipe Finder App",
      description: "The BeninClub1931 Member App is the official mobile platform for members of Benin Club 1931, one of Nigeria’s leading social and recreational clubs. It provides easy access to announcements, events, digital wallet payments, and secure member login with biometric support.",
      technologies: ["React Native", "MaterialUI", "Tailwind CSS", "Expo"],
      githubUrl: "",
        liveUrl: "https://play.google.com/store/apps/details?id=com.beninclub1931.app",
      image: "/images/beninclub.jpeg",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      githubUrl: "https://github.com/JoyAmamah/Task_management",
      liveUrl: "https://tasks-trackerapp.netlify.app/",
      image: "/images/taskmanager.png",
    },
    {
      id: 3,
      title: "Food Ordering App",
 description: "A demo food app for ordering meals and table booking with responsive design and intuitive user interface.",      technologies: ["React", "Typescript", "", "Tailwindcss"],
      githubUrl: "https://github.com/JoyAmamah/Food_App",
      liveUrl: "https://ja-foods.netlify.app/",
      image: "/images/foodapp.png"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark theme.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/JoyAmamah/portfolio",
      liveUrl: "https://joyamamah.vercel.app",
      image: "/images/portfolio.png"
    },
   {
  id: 5,
  title: "Digital Marketing Website",
  description: "A modern digital marketing platform built with React and TypeScript, featuring responsive design, interactive components, and optimized user experience for marketing services.",
  technologies: ["React", "TypeScript", "Tailwind CSS"],
  githubUrl: "https://github.com/JoyAmamah/Markethink",
  liveUrl: "https://markethink-y1iu.vercel.app/",
  image: "/images/digitalMarketing.png" 
},
 {
  id: 6,
  title: "Movie Hub App",
  description: "A modern movie discovery application for browsing films, viewing details, ratings, and discovering new content with a sleek user interface.",
  technologies: ["React", "TypeScript", "Tailwind CSS"],
  githubUrl: "https://github.com/JoyAmamah/movie-hub",
  liveUrl: "https://jmovie-hub.netlify.app/",
  image: "/images/movieapp.png"
},
   {
  id: 7,
  title: "Tour Guide Platform",
  description: "Travel platform for destination discovery and tour booking, built as part of a team project with interactive features.",
  technologies: ["React", "TypeScript", "Tailwind CSS"],
  githubUrl: "https://github.com/Sam-nolimit/Grand-Central-Suites",
  liveUrl: "https://tour-guide-roan.vercel.app/",
  image: "/images/tourguide.png"
}
   
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section className="min-h-screen px-10 bg-slate-900 pt-20 md:px-12 max-w-7xl mx-auto">
      {/* Header Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4">
          My Projects
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each one represents a unique challenge 
          and an opportunity to create something meaningful.
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-amber-400 rounded-full mx-auto mt-4"></div>
      </motion.div>

      {/* Featured Projects */}
      <div className="mb-20">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-slate-200 mb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} featured />
          ))}
        </div>
      </div>

      {/* Other Projects */}
      <div>
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-slate-200 mb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Other Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ project, index, featured = false }: { project: Project; index: number; featured?: boolean }) => {
  return (
    <motion.div
      className={`group relative ${
        featured ? 'lg:col-span-1' : ''
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-emerald-400/10 z-10"></div>
          
          {/* Actual Image with Fallback */}
          <div className="w-full h-full bg-slate-700 flex items-center justify-center">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-cover"
              onError={(e) => {
                // If image fails to load, show placeholder text
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            {/* This span will only show if image fails to load */}
            <span className="text-slate-400 text-sm absolute">Project Image</span>
          </div>
          
          {/* Overlay with buttons */}
          <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-300 transform hover:scale-110"
            >
              <FaGithub size={20} />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full text-slate-900 hover:from-blue-300 hover:to-emerald-300 transition-all duration-300 transform hover:scale-110"
              >
                <FaExternalLinkAlt size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-white transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-slate-400 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600/50 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 hover:text-white transition-all duration-300 text-sm font-medium flex-1 justify-center"
            >
              <FaGithub size={14} />
              Code
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-400 to-emerald-400 text-slate-900 rounded-lg hover:from-blue-300 hover:to-emerald-300 transition-all duration-300 text-sm font-medium flex-1 justify-center"
              >
                <FaExternalLinkAlt size={14} />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-400 text-slate-900 text-xs font-bold rounded-full shadow-lg">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>
    </motion.div>
  );
};

export default Projects;