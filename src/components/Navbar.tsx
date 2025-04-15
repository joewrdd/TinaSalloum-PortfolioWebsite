import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center">
        {/* Logo element on far left */}
        <a href="#home" className="relative group mr-auto">
          <div
            className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden"
            style={{
              backgroundImage: "url('/images/c.png')",
              backgroundSize: "cover",
              opacity: 0.9,
            }}
          >
            <span className="font-baskerville text-xl font-bold text-primary">
              CS
            </span>
          </div>
        </a>

        {/* Desktop Menu centered */}
        <nav className="hidden md:flex items-center space-x-1 mx-auto">
          {navLinks.map((link) => {
            const isActive = activeLink === link.href.substring(1);
            return (
              <motion.div
                key={link.name}
                className="relative px-1"
                whileHover={{ scale: 1.05 }}
              >
                <a
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full transition-all duration-300 font-cormorant inline-block ${
                    isActive
                      ? "text-foreground font-medium"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    const href = link.href;
                    const targetElement = document.querySelector(href);
                    if (targetElement) {
                      window.scrollTo({
                        top: (targetElement as HTMLElement).offsetTop - 80,
                        behavior: "smooth",
                      });
                      setActiveLink(href.substring(1));
                    }
                  }}
                >
                  {link.name}
                </a>
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary mx-5"
                    layoutId="navbar-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            );
          })}
        </nav>

        {/* Contact button on far right */}
        <motion.a
          href="#contact"
          className="hidden md:flex items-center px-4 py-1.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-colors duration-200 font-cormorant border border-primary/20 ml-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.a>

        {/* Mobile Menu Button on right for mobile */}
        <button
          className="md:hidden text-foreground focus:outline-none ml-auto"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-sm border-t border-accent/20"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-5">
              {navLinks.map((link) => {
                const isActive = activeLink === link.href.substring(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 font-cormorant text-lg ${
                      isActive
                        ? "text-primary font-medium"
                        : "text-foreground/80 hover:text-foreground"
                    } transition-colors duration-200 flex items-center`}
                    onClick={(e) => {
                      e.preventDefault();
                      const href = link.href;
                      const targetElement = document.querySelector(href);
                      if (targetElement) {
                        window.scrollTo({
                          top: (targetElement as HTMLElement).offsetTop - 80,
                          behavior: "smooth",
                        });
                        setActiveLink(href.substring(1));
                        setIsOpen(false);
                      }
                    }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isActive && (
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-primary mr-2"
                        layoutId="mobile-indicator"
                      />
                    )}
                    {link.name}
                  </motion.a>
                );
              })}

              <motion.a
                href="#contact"
                className="mt-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-colors duration-200 font-cormorant text-center border border-primary/20"
                onClick={() => setIsOpen(false)}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
