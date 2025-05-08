"use client";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

// components
import NavbarSection from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";

// Custom animation component for text elements
const AnimatedText = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Custom easing for smooth animation
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function AyceCapitalClone() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission would go here in a real implementation
    console.log("Form submitted:", formData);
  };

  // Stagger children delay calculation
  const stagger = (index, baseDelay = 0.1) => baseDelay + index * 0.1;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-2 fixed top-0 left-0 w-full z-50">
        <NavbarSection />
      </div>
      
      <Hero />

      {/* Investment Approach */}
      <section className="py-24 px-6 lg:px-16 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <AnimatedText delay={0.1} className="mb-4 text-sm text-gray-400">
              INVESTMENT APPROACH
            </AnimatedText>
            <AnimatedText delay={0.2} className="text-3xl lg:text-5xl font-bold mb-8">
              How We Create Value
            </AnimatedText>
            <AnimatedText delay={0.3} className="text-lg text-gray-400 max-w-2xl">
              Our strategic approach combines financial expertise with
              agricultural innovation to deliver sustainable growth.
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: stagger(index, 0.15)
                }}
                className="bg-black p-6 rounded-lg"
              >
                <div className="mb-4 h-12 w-12 bg-gray-800 rounded-full flex items-center justify-center">
                  <ArrowUpRight size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Strategic Investment {item}
                </h3>
                <p className="text-gray-400">
                  Carefully selected agricultural ventures with strong growth
                  potential and environmental benefits.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <AnimatedText delay={0.1} className="mb-4 text-sm text-gray-400">
              OUR PORTFOLIO
            </AnimatedText>
            <AnimatedText delay={0.2} className="text-3xl lg:text-5xl font-bold mb-8">
              Featured Investments
            </AnimatedText>
            <AnimatedText delay={0.3} className="text-lg text-gray-400 max-w-2xl">
              Explore our diverse portfolio of agricultural investments, ranging
              from farmland to agtech innovations.
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: stagger(index, 0.15)
                }}
                className="group cursor-pointer"
              >
                <div className="h-64 bg-gray-800 rounded-lg mb-4 overflow-hidden">
                  <motion.div 
                    className="w-full h-full bg-gray-700 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  ></motion.div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:underline">
                  Agricultural Project {item}
                </h3>
                <p className="text-gray-400">
                  Sustainable farming initiative focusing on organic crops and
                  regenerative practices.
                </p>
              </motion.div>
            ))}
          </div>

          <AnimatedText delay={0.4} className="mt-12 text-center">
            <motion.button
              className="border border-white px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-white hover:text-black transition mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects <ArrowRight size={16} />
            </motion.button>
          </AnimatedText>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-16 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <AnimatedText delay={0.1} className="mb-4 text-sm text-gray-400">
              TESTIMONIALS
            </AnimatedText>
            <AnimatedText delay={0.2} className="text-3xl lg:text-5xl font-bold mb-8">
              What Our Partners Say
            </AnimatedText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: stagger(index, 0.2)
                }}
                className="bg-black p-8 rounded-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="h-16 w-16 bg-gray-800 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Partner Name</h4>
                    <p className="text-gray-400">Company Position</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg">
                  "AYCE Capital has demonstrated exceptional expertise in
                  agricultural investments. Their strategic approach has
                  delivered consistent returns while maintaining a commitment to
                  sustainability."
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <AnimatedText delay={0.1} className="mb-4 text-sm text-gray-400">
                CONTACT US
              </AnimatedText>
              <AnimatedText delay={0.2} className="text-3xl lg:text-5xl font-bold mb-8">
                Get in Touch
              </AnimatedText>
              <AnimatedText delay={0.3} className="text-lg text-gray-400 mb-8">
                Interested in learning more about our investment opportunities?
                Reach out to our team for a consultation.
              </AnimatedText>

              <div className="space-y-6">
                <AnimatedText delay={0.4}>
                  <div className="font-bold mb-1">Email</div>
                  <a href="#" className="text-gray-400 hover:text-white">
                    info@aycecapital.com
                  </a>
                </AnimatedText>
                <AnimatedText delay={0.5}>
                  <div className="font-bold mb-1">Office</div>
                  <p className="text-gray-400">
                    123 Finance Street, Capital City, 10001
                  </p>
                </AnimatedText>
                <AnimatedText delay={0.6}>
                  <div className="font-bold mb-1">Follow Us</div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white">
                      LinkedIn
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Twitter
                    </a>
                  </div>
                </AnimatedText>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3
              }}
              className="bg-gray-900 p-8 rounded-lg"
            >
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-white"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-white"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-white"
                ></textarea>
              </div>
              <motion.button
                onClick={handleSubmit}
                className="bg-white text-black px-8 py-3 rounded-full w-full hover:bg-gray-200 transition"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Send Message
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <AnimatedText delay={0.1}>
              <div className="text-2xl font-bold mb-6">AYCE CAPITAL</div>
              <p className="text-gray-400">
                Sustainable agricultural investments for a growing world.
              </p>
            </AnimatedText>

            <AnimatedText delay={0.2}>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </AnimatedText>

            <AnimatedText delay={0.3}>
              <h4 className="font-bold mb-4">Investments</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Approach
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    ESG
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Resources
                  </a>
                </li>
              </ul>
            </AnimatedText>

            <AnimatedText delay={0.4}>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Disclaimers
                  </a>
                </li>
              </ul>
            </AnimatedText>
          </div>

          <AnimatedText delay={0.5} className="text-gray-400 text-sm">
            © 2025 AYCE Capital. All rights reserved.
          </AnimatedText>
        </div>
      </footer>
    </div>
  );
}