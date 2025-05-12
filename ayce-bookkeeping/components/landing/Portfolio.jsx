import React from 'react'
import { motion } from 'framer-motion'
import {AnimatedText} from '../../app/page'
import { ArrowRight } from 'lucide-react'
import { stagger } from '../../app/page'

function Portfolio() {
  return (
   
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
  )
}

export default Portfolio