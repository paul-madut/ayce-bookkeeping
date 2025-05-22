"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear errors when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      
      try {
        // Send form data to our API endpoint
        const response = await fetch('/api/submit-contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });
        
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || 'Failed to submit form');
        }
        
        // Success! Reset form and show success message
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          message: ""
        });
      } catch (error) {
        console.error('Submission error:', error);
        setFormErrors(prev => ({
          ...prev,
          submit: error.message || 'Something went wrong. Please try again.'
        }));
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setFormErrors(errors);
    }
  };

  // Cards animation stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Success message animation
  const successVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Header Section */}
      <div className="pt-32 pb-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="container mx-auto px-4"
        >
          <h1 className="text-5xl font-bold mb-3 text-white text-center">Contact Us</h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-teal-400 mx-auto mb-8"
          />
          <p className="text-center text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions about our services? Looking to partner with us? 
            Get in touch with our team and we'll get back to you promptly.
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info Section */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:w-1/3"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-gray-900 p-6 rounded-lg mb-6 border-l-4 border-teal-400"
            >
              <h3 className="text-lg font-semibold mb-2 text-teal-400">Location</h3>
              <p className="text-gray-300">22 King Street South Waterloo</p>
              <p className="text-gray-300">ON N2J 1N8</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-gray-900 p-6 rounded-lg mb-6 border-l-4 border-teal-400"
            >
              <h3 className="text-lg font-semibold mb-2 text-teal-400">Email</h3>
              <p className="text-gray-300">
                <a href="mailto:info@anavo-bookkeeping.com" className="hover:text-teal-400 transition-colors">
                  info@anavo-bookkeeping.com
                </a>
              </p>
              <p className="text-gray-300">
                <a href="mailto:support@anavo-bookkeeping.com" className="hover:text-teal-400 transition-colors">
                  support@anavo-bookkeeping.com
                </a>
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-gray-900 p-6 rounded-lg mb-6 border-l-4 border-teal-400"
            >
              <h3 className="text-lg font-semibold mb-2 text-teal-400">Phone</h3>
              <p className="text-gray-300">
                <a href="tel:+13439877024" className="hover:text-teal-400 transition-colors">
                  +1 (343) 987-7024
                </a>
              </p>
              <p className="text-gray-300">Mon-Fri: 9:00 AM - 5:00 PM ET</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-gray-900 p-6 rounded-lg border-l-4 border-teal-400"
            >
              <h3 className="text-lg font-semibold mb-2 text-teal-400">Connect</h3>
              <div className="flex gap-4">
               
                <motion.a 
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-teal-400 hover:bg-teal-400 hover:text-gray-900 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </motion.a>
                
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form Section */}
          <div className="lg:w-2/3">
            {isSubmitted ? (
              <motion.div
                variants={successVariants}
                initial="hidden"
                animate="visible"
                className="bg-gray-900 p-12 rounded-lg text-center"
              >
                <div className="w-20 h-20 rounded-full bg-teal-400 text-gray-900 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                <p className="text-gray-400 mb-6">Your message has been received. Our team will get back to you shortly.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-teal-400 text-gray-900 rounded-md font-medium hover:bg-teal-500 transition-colors"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <motion.form 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                onSubmit={handleSubmit} 
                className="bg-gray-900 p-8 rounded-lg"
              >
                {formErrors.submit && (
                  <div className="mb-6 p-4 bg-red-900/50 border border-red-700 rounded-md text-white">
                    <p>{formErrors.submit}</p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Name</label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-3 bg-gray-800 border ${formErrors.name ? 'border-red-500' : 'border-gray-700'} rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-400`}
                      placeholder="John Doe"
                    />
                    {formErrors.name && <p className="mt-1 text-red-400 text-sm">{formErrors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Email</label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-3 bg-gray-800 border ${formErrors.email ? 'border-red-500' : 'border-gray-700'} rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-400`}
                      placeholder="john@example.com"
                    />
                    {formErrors.email && <p className="mt-1 text-red-400 text-sm">{formErrors.email}</p>}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-300">Company (Optional)</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    type="text" 
                    id="company" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                    placeholder="Acme Inc."
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full p-3 bg-gray-800 border ${formErrors.message ? 'border-red-500' : 'border-gray-700'} rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal-400 min-h-32`}
                    placeholder="Tell us how we can help..."
                    rows="5"
                  ></motion.textarea>
                  {formErrors.message && <p className="mt-1 text-red-400 text-sm">{formErrors.message}</p>}
                </div>
                
                <div className="flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-3 bg-teal-400 text-gray-900 rounded-md font-medium hover:bg-teal-500 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </div>
              </motion.form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 py-8 mt-12 border-t border-gray-800">
        <div className="text-center text-gray-500 text-sm">
          © 2025 ANAVO Bookkeeping. All rights reserved.
        </div>
      </div>
    </div>
  );
}