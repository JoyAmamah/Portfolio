import { motion } from "framer-motion";

// List of technology names
const CardItems: string[] = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "GitHub",
  "NextJS",
  "tailwindcss",
  "Figma",
];

type TechCardProps = {
  name: string;
};

const Technologies = () => {
  return (
    <div className="w-full pt-10 px-10 mx-auto">
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        viewport={{ once: true }}
      >
        {CardItems.map((item, index) => (
          <TechCard name={item} key={item} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;

function TechCard({ name, index }: TechCardProps & { index: number }) {
  const imagePath = `/images/${name.replace(/\s+/g, "").toLowerCase()}.svg`; 

  return (
    <motion.div
      className="group relative p-4 rounded-xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm cursor-pointer transform transition-all duration-300 hover:scale-105 hover:border-blue-400 shadow-lg hover:shadow-blue-500/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        transition: { 
          duration: 0.4, 
          delay: index * 0.1 
        } 
      }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="relative w-10 h-10 md:w-12 md:h-12">
          <img 
            src={imagePath} 
            alt={name} 
            className="object-contain w-full h-full filter group-hover:brightness-125 transition-all duration-300" 
          />
        </div>
        
        <div className="text-slate-200 text-center">
          <div className="text-sm font-medium capitalize">
            {name}
          </div>
        </div>
      </div>
    </motion.div>
  );
}