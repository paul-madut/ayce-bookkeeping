import React from 'react'
import { AnimatedText } from '@/app/page'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'


function About() {
    const stagger = (index:any, baseDelay = 0.1) => baseDelay + index * 0.1;
  return (
   
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
  )
}

export default About