import React from 'react'
import { motion } from 'framer-motion'
import { AnimatedText } from '../../app/page'
import { useState } from 'react';


function Contact() {

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
  return (
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
                    info@ayce-bookkeeping.com
                  </a>
                </AnimatedText>
                <AnimatedText delay={0.5}>
                  <div className="font-bold mb-1">Office</div>
                  <p className="text-gray-400">
                  22 King Street South
                  Waterloo, ON N2J 1N8
                  </p>
                </AnimatedText>
                <AnimatedText delay={0.6}>
                  <div className="font-bold mb-1">Follow Us</div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white">
                      LinkedIn
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
  )
}

export default Contact