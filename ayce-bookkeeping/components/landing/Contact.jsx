import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedText } from '../../app/page'

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitStatus, setSubmitStatus] = useState({
        isSubmitting: false,
        success: false,
        error: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Basic form validation
        if (!formData.name || !formData.email || !formData.message) {
            setSubmitStatus({
                isSubmitting: false,
                success: false,
                error: "Please fill out all fields"
            });
            return;
        }

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setSubmitStatus({
                isSubmitting: false,
                success: false,
                error: "Please enter a valid email address"
            });
            return;
        }

        setSubmitStatus({ isSubmitting: true, success: false, error: null });

        try {
            // Replace with your actual form submission endpoint
            const response = await fetch('/api/submit-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitStatus({ 
                    isSubmitting: false, 
                    success: true, 
                    error: null 
                });
                // Reset form after successful submission
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });
            } else {
                // Handle error response
                const errorData = await response.json();
                setSubmitStatus({
                    isSubmitting: false,
                    success: false,
                    error: errorData.message || "Something went wrong. Please try again."
                });
            }
        } catch (error) {
            setSubmitStatus({
                isSubmitting: false,
                success: false,
                error: "Network error. Please try again."
            });
        }
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
                                <a href="mailto:info@ayce-bookkeeping.com" className="text-gray-400 hover:text-white">
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
                                    <a href="https://www.linkedin.com/company/your-company" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
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
                        {submitStatus.error && (
                            <div className="mb-4 p-3 bg-red-900 text-white rounded-lg">
                                {submitStatus.error}
                            </div>
                        )}
                        {submitStatus.success && (
                            <div className="mb-4 p-3 bg-green-900 text-white rounded-lg">
                                Thank you for your message! We'll get back to you soon.
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-white"
                                    required
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
                                    required
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
                                    required
                                ></textarea>
                            </div>
                            <motion.button
                                type="submit"
                                disabled={submitStatus.isSubmitting}
                                className={`bg-white text-black px-8 py-3 rounded-full w-full hover:bg-gray-200 transition ${
                                    submitStatus.isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                {submitStatus.isSubmitting ? 'Sending...' : 'Send Message'}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact