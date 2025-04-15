import { motion } from "framer-motion";

const SkillsSection = () => {
  const skills = [
    { name: "AutoCAD", level: 90 },
    { name: "Revit", level: 85 },
    { name: "SketchUp", level: 80 },
    { name: "Adobe XD", level: 75 },
    { name: "Photoshop", level: 92 },
    { name: "Hand Sketching", level: 95 },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30 relative">
      {/* Torn paper background texture */}
      <div className="absolute inset-0 torn-paper-overlay opacity-5"></div>

      {/* Decorative rose */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-28 opacity-30 hidden lg:block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="decorative-rose w-full h-full"></div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="scroll-banner h-20 mb-2">
            <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-foreground">
              Skills & Tools
            </h2>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <h3 className="font-cormorant font-bold text-foreground">
                  {skill.name}
                </h3>
                <span className="font-inter text-foreground/70">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-accent rounded-full h-2.5">
                <motion.div
                  className="bg-primary h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative butterfly */}
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 opacity-20 hidden lg:block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <div className="decorative-butterfly w-full h-full"></div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
