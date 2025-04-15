import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with EmailJS
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Thank you for your message! I will get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 bg-background relative">
      {/* Vintage paper texture background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('/images/c.png')",
          }}
        ></div>
      </div>

      {/* Vintage book decorative element */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 opacity-10 hidden lg:block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url('/images/e.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
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
              Get in Touch
            </h2>
          </div>
          <p className="font-inter text-foreground/70 max-w-xl mx-auto">
            Have a project in mind or want to discuss potential collaborations?
            Reach out to me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h3 className="font-cormorant text-2xl font-bold text-foreground mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <span className="p-2 bg-accent rounded-full mr-4">
                  <Mail className="w-5 h-5 text-foreground" />
                </span>
                <div>
                  <h4 className="font-cormorant font-bold text-foreground">
                    Email
                  </h4>
                  <p className="text-foreground/70">tinasalloum03@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="p-2 bg-accent rounded-full mr-4">
                  <Phone className="w-5 h-5 text-foreground" />
                </span>
                <div>
                  <h4 className="font-cormorant font-bold text-foreground">
                    Phone
                  </h4>
                  <p className="text-foreground/70">+961 71737497</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="p-2 bg-accent rounded-full mr-4">
                  <MapPin className="w-5 h-5 text-foreground" />
                </span>
                <div>
                  <h4 className="font-cormorant font-bold text-foreground">
                    Location
                  </h4>
                  <p className="text-foreground/70">Lebanon, Koura</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-cormorant font-bold text-foreground mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/christinasalloumm/"
                  className="p-3 bg-accent rounded-full text-foreground hover:bg-accent/70 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tina-salloum/"
                  className="p-3 bg-accent rounded-full text-foreground hover:bg-accent/70 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Decorative rose */}
            <motion.div
              className="absolute bottom-0 right-10 w-24 h-32 opacity-20 hidden lg:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.2 }}
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

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-cormorant font-bold text-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-cormorant font-bold text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block font-cormorant font-bold text-foreground mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-cormorant font-bold text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-cormorant text-lg font-medium"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Decorative butterfly */}
      <motion.div
        className="absolute bottom-10 right-10 w-20 h-20 opacity-10 hidden lg:block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <div className="decorative-butterfly w-full h-full animate-float"></div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
