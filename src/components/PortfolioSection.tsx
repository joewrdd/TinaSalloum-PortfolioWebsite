import { useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const PortfolioSection = () => {
  const [filter, setFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "Antique Shop Facade",
      category: "Architectural Designs",
      image: "/images/pro1.png",
      pdfUrl: "/pdfs/FINAL PRESENTATION PROJECT 2.pdf",
      description:
        "Kinetic architecture involves designs that incorporate movement or the illusion of movement. In facade design, this can be achieved through panels that physically move (rotate, slide, or fold) or through static elements that create a visual illusion of motion. Kinetic facades enhance aesthetics, improve functionality (like controlling light and ventilation), and attract attention through dynamic, engaging design.",
    },
    {
      id: 2,
      title: "T.S Glow Haven",
      category: "Branding ",
      image: "/images/pro2.png",
      pdfUrl: "/pdfs/ts-glow-haven.pdf",
      description:
        "The logo features four puzzle pieces, each representing an important part of a healthy lifestyle: healthy food, water, gym, and comfort. The pieces come together to show how these elements work together for overall well-being. The use of wood material adds a natural, earthy feel to the design, reflecting a simple and balanced approach to health.",
    },
    {
      id: 3,
      title: "Custom Birthday Canva Design",
      category: "Canva Work",
      image: "/images/pro3.png",
      pdfUrl: "/pdfs/png2pdf.pdf",
      description:
        "A comprehensive birthday package design created in Canva including thank you cards, invitation cards, food holder papers for bottles and food boxes, and custom stickers for the children.",
    },
  ];

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-background relative">
      {/* Decorative book page as background element */}
      <div className="absolute top-10 right-10 w-40 h-40 opacity-10 hidden lg:block">
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

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
              Portfolio
            </h2>
          </div>
          <p className="font-inter text-foreground/70 max-w-xl mx-auto">
            Explore my selected projects across Architectural Designs, Branding
            , and Canva Work designs.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            className={`px-4 py-2 rounded-full transition-colors font-cormorant ${
              filter === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-accent text-foreground hover:bg-accent/80"
            }`}
            onClick={() => setFilter("all")}
          >
            All Projects
          </button>
          <button
            className={`px-4 py-2 rounded-full transition-colors font-cormorant ${
              filter === "Architectural Designs"
                ? "bg-primary text-primary-foreground"
                : "bg-accent text-foreground hover:bg-accent/80"
            }`}
            onClick={() => setFilter("Architectural Designs")}
          >
            Architectural Designs
          </button>
          <button
            className={`px-4 py-2 rounded-full transition-colors font-cormorant ${
              filter === "Branding "
                ? "bg-primary text-primary-foreground"
                : "bg-accent text-foreground hover:bg-accent/80"
            }`}
            onClick={() => setFilter("Branding ")}
          >
            Branding
          </button>
          <button
            className={`px-4 py-2 rounded-full transition-colors font-cormorant ${
              filter === "Canva Work"
                ? "bg-primary text-primary-foreground"
                : "bg-accent text-foreground hover:bg-accent/80"
            }`}
            onClick={() => setFilter("Canva Work")}
          >
            Canva Work
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group cursor-pointer rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="aspect-[4/4.5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-fit transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 bg-background flex flex-col h-[200px]">
                <h3 className="font-cormorant text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="font-inter text-sm text-foreground/70 overflow-y-auto flex-grow mb-4">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="inline-block px-3 py-1 bg-accent/50 rounded-full text-xs uppercase tracking-wider text-foreground/80">
                    {item.category}
                  </span>
                  <a
                    href={item.pdfUrl}
                    download
                    className="inline-flex items-center px-3 py-1 bg-primary/90 text-primary-foreground rounded-full hover:bg-primary transition-colors"
                  >
                    <Download size={14} className="mr-1" />
                    <span className="text-xs">FULL WORK</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-10 left-10 w-24 h-24 opacity-20 hidden lg:block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
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
    </section>
  );
};

export default PortfolioSection;
