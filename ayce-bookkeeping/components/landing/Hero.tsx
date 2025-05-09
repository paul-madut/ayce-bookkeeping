"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function Hero() {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] // Custom easing for smooth animation
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: {
      scale: 1.04,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.97 }
  };

  return (
    <>
      <section className=" pt-[60vh] px-6 lg:px-16 min-h-screen">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className="mb-6 inline-block text-sm border border-gray-700 px-4 py-1 rounded-full"
            variants={itemVariants}
          >
            Modernizing Bookkeeping, Empowering Growth
          </motion.div>
          
          <motion.h1 
            className="text-4xl lg:text-7xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            Revitalizing Canadian <br /> Bookkeeping
          </motion.h1>
          
          <motion.p 
            className="text-lg lg:text-xl mb-10 text-gray-400 max-w-2xl"
            variants={itemVariants}
          >
            We acquire and scale established bookkeeping businesses across Canada with a mission to modernize the industry. Through thoughtful partnerships and operational upgrades, we help firms reach new levels of efficiency, service, and long-term success.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <motion.button 
              className="bg-white text-black px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-gray-200 transition"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Our Portfolio <ArrowRight size={16} />
            </motion.button>
            
            <motion.button 
              className="border border-white px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-white hover:text-black transition"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              About Us <ArrowRight size={16} />
            </motion.button>
          </motion.div>

          {/* Animated decorative element */}
          <motion.div
            className="absolute bottom-12 right-12 w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.4, 0.2, 0.4], 
              scale: [1, 1.1, 1],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
        </motion.div>
      </section>
    </>
  );
}

export default Hero;