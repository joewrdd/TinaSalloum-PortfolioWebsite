import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center bg-gradient-to-b from-background to-background/60"
    >
      {/* Background texture with torn paper overlay */}
      <div className="absolute inset-0 z-0 torn-paper-overlay">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('/images/c.png')",
          }}
        ></div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 opacity-30 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        <div
          className="w-full h-full animate-float"
          style={{
            backgroundImage: "url('/images/d.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="w-full md:w-3/5 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="mb-6 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div
                className="h-24 mb-4 flex items-center justify-center"
                style={{
                  backgroundImage: "url('/images/a.png')",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <h2 className="font-baskerville italic text-xl text-foreground/90 pt-2">
                  Interior Architecture
                </h2>
              </div>
            </motion.div>

            <motion.h1
              className="font-baskerville text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Christina Salloum
            </motion.h1>

            <motion.p
              className="font-baskerville text-base md:text-lg text-foreground/70 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Creating elegant, functional spaces that tell stories and inspire
              living.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <a
                href="#portfolio"
                className="px-6 py-3 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors font-baskerville font-medium text-center"
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-primary text-primary rounded hover:bg-primary/5 transition-colors font-baskerville font-medium text-center"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Profile image with decorative rose */}
          <motion.div
            className="w-full md:w-2/5 flex justify-center relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl animate-image-glow">
              <img
                src="/images/f0d84a28-2cd9-41d8-ba10-f9fdd1f09eea.png"
                alt="Christina Salloum"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-10 -right-10 w-24 h-32 opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 1.2, duration: 1 }}
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

      {/* Scroll down indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary hover:text-primary/80 transition-colors"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
      >
        <ChevronDown size={36} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
