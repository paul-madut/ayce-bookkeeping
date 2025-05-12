"use client";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

// components
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Portfolio from "../components/landing/Portfolio"; // Update portfolio after clients
import Testimonials from "../components/landing/Testimonials";
import Contact from "../components/landing/Contact";
import Story from "@/components/landing/Story";


// Stagger children delay calculation
export const stagger = (index, baseDelay = 0.1) => baseDelay + index * 0.1;

// Custom animation component for text elements
export const AnimatedText = ({ children, delay = 0, className = "" }) => {
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

export default function page() {
  return (
    <>
      <LampContainer className=" pt-[14rem] ">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: -250 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="    tracking-tight   "
        >
          <Hero></Hero>
        </motion.h1>
      </LampContainer>

      <About />
      <Story />
      
      <Contact />
      
    </>
  );
}
