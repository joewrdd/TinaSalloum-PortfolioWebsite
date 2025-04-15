
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-foreground text-primary-foreground relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 md:mb-0">
            <h3 className="font-cormorant text-xl font-bold">Christina Salloum</h3>
            <p className="text-primary-foreground/70 text-sm font-inter">Interior Architect</p>
          </div>
          
          <div className="text-sm text-primary-foreground/70 font-inter">
            © {currentYear} Christina Salloum. All rights reserved.
          </div>
        </motion.div>
        
        {/* Small decorative rose */}
        <div className="absolute bottom-2 right-4 w-10 h-14 opacity-20 hidden lg:block">
          <div className="decorative-rose w-full h-full"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
