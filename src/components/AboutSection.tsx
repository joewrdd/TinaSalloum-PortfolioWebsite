import { motion } from "framer-motion";
import { GraduationCap, Heart, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30 relative">
      {/* Decorative vintage book background */}
      <div className="absolute right-0 top-0 w-40 h-40 opacity-20 hidden lg:block">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url('/images/e.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="h-24 mb-2 flex items-center justify-center"
            style={{
              backgroundImage: "url('/images/a.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <h2 className="font-cormorant text-3xl md:text-4xl font-bold text-foreground pt-2">
              About Me
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/693ACE39-A237-41EF-BED6-E5A7434E6C4B.jpg"
                alt="Christina Salloum's Workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 opacity-30"
              style={{
                backgroundImage: "url('/images/c.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
            <motion.div
              className="absolute -top-8 -left-8 w-20 h-20 opacity-70 hidden lg:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: "url('/images/d.png')",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
            </motion.div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h3 className="font-cormorant text-2xl md:text-3xl font-bold text-foreground mb-6">
              Christina Salloum
            </h3>

            <p className="font-inter text-foreground/80 mb-6 leading-relaxed">
              I'm a passionate Interior Architect with a keen eye for detail and
              a love for creating spaces that balance aesthetics and
              functionality. My journey in design has equipped me with the
              skills to transform visions into reality, whether for
              Architectural Designs spaces or Branding environments.
            </p>

            <p className="font-inter text-foreground/80 mb-8 leading-relaxed">
              With each project, I strive to incorporate sustainable practices
              and timeless elements that enhance both the space and the
              experiences within it. My approach is client-centered, ensuring
              that each design not only meets but exceeds expectations.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="p-2 bg-accent rounded-full mr-4">
                  <GraduationCap className="w-5 h-5 text-foreground" />
                </span>
                <div>
                  <h4 className="font-cormorant font-bold text-foreground">
                    Education
                  </h4>
                  <p className="text-sm text-foreground/70">
                    Bachelor of Interior Architecture, Notre Dame University,
                    2026
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="p-2 bg-accent rounded-full mr-4">
                  <Heart className="w-5 h-5 text-foreground" />
                </span>
                <div>
                  <h4 className="font-cormorant font-bold text-foreground">
                    Passion
                  </h4>
                  <p className="text-sm text-foreground/70">
                    Blending Modern Techniques with Traditional Craftsmanship
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="p-2 bg-accent rounded-full mr-4">
                  <Lightbulb className="w-5 h-5 text-foreground" />
                </span>
                <div>
                  <h4 className="font-cormorant font-bold text-foreground">
                    Philosophy
                  </h4>
                  <p className="text-sm text-foreground/70">
                    Every Space Should Tell a Story and Evoke Emotion
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -bottom-10 right-0 w-16 h-24 opacity-60 hidden lg:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: "url('/images/b.png')",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
