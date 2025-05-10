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
           How we create value
         </AnimatedText>
         <AnimatedText delay={0.2} className="text-3xl lg:text-5xl font-bold mb-8">
           Why Bookkeeping? Why now?
         </AnimatedText>
         <AnimatedText delay={0.3} className="text-lg text-gray-400 max-w-2xl">
         Bookkeeping is the foundation of every successful business — but too many firms are held back by outdated systems, siloed processes, and rising operational complexity. We see an opportunity to change that.
         </AnimatedText>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    {
      title: "Adopt Cloud & Automation",
      description:
        "Leverage industry-leading software to save time, reduce errors, and improve accuracy."
    },
    {
      title: "Streamline Operations",
      description:
        "Implement modern systems that increase profitability and reduce admin workload."
    },
    {
      title: "Enhance Client Experience",
      description:
        "Deliver faster, clearer, and more consistent service with the help of smart tools."
    },
    {
      title: "Retain Top Talent",
      description:
        "Give your team the tools and structure they need to thrive — not just survive."
    },
    {
      title: "Preserve Your Culture",
      description:
        "Modernize without losing what makes your firm special to your team and clients."
    },
    {
      title: "Scale with Confidence",
      description:
        "Grow at your own pace with systems and support designed to evolve with your business."
    }
  ].map((item, index) => (
    <motion.div
      key={item.title}
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
      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
      <p className="text-gray-400">{item.description}</p>
    </motion.div>
  ))}
</div>

     </div>
   </section>
  )
}

export default About