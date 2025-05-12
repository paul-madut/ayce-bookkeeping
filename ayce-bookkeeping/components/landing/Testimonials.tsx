import React from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "../../app/page";
import { stagger } from "../../app/page";
import Image from "next/image";
import { image } from "framer-motion/client";

function Testimonials() {
  return (
    <section className="py-24 px-6 lg:px-16 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <AnimatedText delay={0.1} className="mb-4 text-sm text-gray-400">
            TESTIMONIALS
          </AnimatedText>
          <AnimatedText
            delay={0.2}
            className="text-3xl lg:text-5xl font-bold mb-8"
          >
            What Our Partners Say
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Patricia M.",
              title: "Founder, CloudBooks Inc.",
              quote:
                "Joining this network has transformed my bookkeeping practice. I feel supported, and my clients notice the difference.",
              image: "/partner1.jpg",
            },
            {
              name: "Jordan R.",
              title: "Managing Partner, Ledgerly",
              quote:
                "They brought in tools and systems I never knew I needed. It’s allowed us to grow without burning out.",
              image: "/partner2.jpeg",
            },
          ].map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: stagger(index, 0.2),
              }}
              className="bg-black p-8 rounded-lg"
            >
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 bg-gray-800 rounded-full mr-4">
                  <Image
                    src={partner.image}
                    alt="Partner Image" 
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{partner.name}</h4>
                  <p className="text-gray-400">{partner.title}</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg">"{partner.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
