"use client";
import { Building2, Users, Calendar, Target, Handshake, Mail, CheckCircle, TrendingUp } from 'lucide-react';
import {motion} from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Acquisitions() {
  const [isVisible, setIsVisible] = useState({});
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const criteria = [
    { icon: TrendingUp, text: "$1 – $10 million in revenue" },
    { icon: Users, text: "5 – 30 employees" },
    { icon: Calendar, text: "5+ years of operating history" },
    { icon: Handshake, text: "Strong client relationships and reliable processes" }
  ];

  return (
    <main className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse" 
             style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 left-1/4 w-48 h-48 bg-purple-500/6 rounded-full blur-2xl animate-pulse" 
             style={{ animationDelay: '4s' }} />
      </div>

 
      {/* Header Section */}
      <div className="pt-32 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="container mx-auto px-4"
        >
          <h1 className="text-5xl font-bold mb-3 text-white text-center">Aquisitions</h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-teal-400 mx-auto mb-8"
          />
          <p className="text-center text-gray-400 text-lg max-w-2xl mx-auto">
          At Anavo Bookkeeping, we acquire high-quality bookkeeping firms and empower them to thrive through long-term partnerships and strategic support.
          </p>
        </motion.div>
      </div>


      {/* Main Content */}
      <section className="px-4 pb-16 sm:px-6 md:px-8 lg:px-20 lg:pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Desktop: Two Column Layout, Mobile: Single Column */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20 space-y-8 lg:space-y-0">
            
            {/* Left Column */}
            <div className="space-y-8 lg:space-y-12">
              {/* Why We Acquire */}
              <div
                id="why-acquire"
                data-animate
                className={`bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-700/50 shadow-2xl transition-all duration-800 transform lg:hover:scale-105 hover:shadow-3xl ${
                  isVisible['why-acquire'] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center mb-6 space-y-2 sm:space-y-0">
                  <Building2 className="w-7 h-7 sm:w-8 sm:h-8 text-teal-400 sm:mr-4 animate-bounce" 
                            style={{ animationDelay: '1s', animationDuration: '2s' }} />
                  <h2 className="text-2xl sm:text-3xl font-bold text-teal-400">Why We Acquire Bookkeeping Firms</h2>
                </div>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  Having worked in the intersection of finance and operations, we've seen how vital bookkeeping firms are to businesses. You're trusted with sensitive data and long-term relationships — the very qualities that make a firm valuable. We're here to help you preserve that trust, grow your legacy, and plan for the next chapter.
                </p>
              </div>

              {/* Our Promise */}
              <div
                id="promise"
                data-animate
                className={`bg-gradient-to-br from-teal-900/40 to-blue-900/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 border border-teal-700/50 shadow-2xl transition-all duration-800 transform lg:hover:scale-105 hover:shadow-3xl hover:from-teal-900/50 hover:to-blue-900/50 ${
                  isVisible.promise ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center mb-6 space-y-2 sm:space-y-0">
                  <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-teal-400 sm:mr-4 animate-pulse" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-teal-400">Our Promise to Firm Owners</h2>
                </div>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  We respect your time, your team, and your work. When you partner with Anavo Bookkeeping, you're not just selling your business — you're securing its future. We are flexible on deal structure, retirement timelines, and ownership transitions, and we welcome conversations at any stage.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8 lg:space-y-12">
              {/* What We Look For */}
              <div
                id="criteria"
                data-animate
                className={`bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-700/50 shadow-2xl transition-all duration-800 transform lg:hover:scale-105 hover:shadow-3xl ${
                  isVisible.criteria ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8 space-y-2 sm:space-y-0">
                  <Target className="w-7 h-7 sm:w-8 sm:h-8 text-teal-400 sm:mr-4 animate-spin" 
                         style={{ animationDuration: '4s' }} />
                  <h2 className="text-2xl sm:text-3xl font-bold text-teal-400">What We Look For</h2>
                </div>
                <div className="space-y-4">
                  {criteria.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-start sm:items-center space-x-3 sm:space-x-4 p-4 sm:p-5 rounded-xl bg-gray-800/40 border border-gray-600/30 transition-all duration-500 transform hover:bg-gray-700/40 hover:border-teal-500/30 lg:hover:scale-105 ${
                        isVisible.criteria ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${600 + index * 150}ms` }}
                    >
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400 flex-shrink-0 mt-0.5 sm:mt-0" />
                      <span className="text-gray-300 text-base sm:text-lg leading-relaxed">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What Happens Next */}
              <div
                id="next-steps"
                data-animate
                className={`bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-700/50 shadow-2xl transition-all duration-800 transform lg:hover:scale-105 hover:shadow-3xl ${
                  isVisible['next-steps'] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center mb-6 space-y-2 sm:space-y-0">
                  <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-teal-400 sm:mr-4 animate-bounce" 
                        style={{ animationDelay: '2s', animationDuration: '2s' }} />
                  <h2 className="text-2xl sm:text-3xl font-bold text-teal-400">What Happens Next?</h2>
                </div>
                
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                  Whether you're thinking of selling now or just planning ahead, we'd love to talk. No pressure, no long-winded pitches — just a conversation. What's the harm in a quick call?
                </p>
                
                <Link href="/contact">
            <button className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-8 rounded-md text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full">
              Book a consultation
            </button>
            </Link>
    
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes scaleX {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(20, 184, 166, 0.1);
        }
        
        @media (max-width: 640px) {
          .animate-bounce {
            animation-duration: 1s;
          }
        }
      `}</style>
    </main>
  );
}