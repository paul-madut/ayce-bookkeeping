"use client";
import { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';

const ComingSoonPage = () => {
  const [email, setEmail] = useState('');
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const launchDate = new Date('2025-06-30T00:00:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();
      
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      
      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
      
      if (difference <= 0) {
        clearInterval(timer);
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Logo */}


      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-6 text-center py-20">
          <span className="inline-block px-4 py-2 rounded-full bg-gray-900 text-teal-400 text-sm font-medium mb-8">
          Revitalizing Bookkeeping
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Coming Soon</h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            We are working on something exciting. Our new website is under construction and this section will be ready soon.
          </p>
          
          {/* Countdown Timer */}
          <div className="flex justify-center mb-16">
            <div className="grid grid-cols-4 gap-4 md:gap-8">
              <div className="bg-gray-900 p-4 md:p-6 rounded-lg w-16 md:w-24">
                <div className="text-2xl md:text-4xl font-bold text-teal-400">{days}</div>
                <div className="text-xs md:text-sm text-gray-500">Days</div>
              </div>
              <div className="bg-gray-900 p-4 md:p-6 rounded-lg w-16 md:w-24">
                <div className="text-2xl md:text-4xl font-bold text-teal-400">{hours}</div>
                <div className="text-xs md:text-sm text-gray-500">Hours</div>
              </div>
              <div className="bg-gray-900 p-4 md:p-6 rounded-lg w-16 md:w-24">
                <div className="text-2xl md:text-4xl font-bold text-teal-400">{minutes}</div>
                <div className="text-xs md:text-sm text-gray-500">Minutes</div>
              </div>
              <div className="bg-gray-900 p-4 md:p-6 rounded-lg w-16 md:w-24">
                <div className="text-2xl md:text-4xl font-bold text-teal-400">{seconds}</div>
                <div className="text-xs md:text-sm text-gray-500">Seconds</div>
              </div>
            </div>
          </div>
          
         
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-6 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AYCE Bookkeeping. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoonPage;