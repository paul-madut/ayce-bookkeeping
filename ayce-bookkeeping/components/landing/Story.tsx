import React from 'react';

const Story = () => {
  return (
    <div className="bg-[#030619] text-gray-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="inline-block bg-teal-900/10 text-teal-500 px-5 py-2 rounded-full text-sm mb-6">
          The Path That Led Us Here
        </div>
        
        <h2 className="text-4xl md:text-5xl text-white font-bold mb-10 leading-tight">
          Our Story
        </h2>
        
        <div className="max-w-3xl">
          <p className="text-lg mb-6">
            Our journey began in <span className="text-white font-medium">public accounting</span>, 
            where it quickly became clear that clients needed more than just year-end support — they needed reliable, 
            high-quality bookkeeping. The problem? Traditional accounting firms often shy away from bookkeeping work. 
            Clients don't want to pay $300–$400 per hour for it, and firms can't deliver it profitably with their existing model.
          </p>
          
          <div className="border-l-4 border-teal-500 pl-8 my-10">
            <p className="text-2xl text-white font-light italic">
              That gap stuck with us.
            </p>
          </div>
          
          <div className="mt-16 mb-16">
            <div className="flex">
              <div className="w-0.5 bg-gradient-to-b from-transparent via-teal-500 to-transparent mr-8 flex-shrink-0"></div>
              <div className="flex-grow">
                <div className="mb-10">
                  <h3 className="text-xl text-white font-medium mb-3">
                    Identifying the Problem
                  </h3>
                  <p className="text-lg">
                    So we set out to build something better — a more consistent, scalable, 
                    and client-friendly way to deliver bookkeeping services.
                  </p>
                </div>
                
                <div className="mb-10">
                  <h3 className="text-xl text-white font-medium mb-3">
                    Discovering Potential
                  </h3>
                  <p className="text-lg">
                    Along the way, we discovered something else: there are incredible bookkeeping firms already out there. 
                    They just need the right support, systems, and leadership to reach their full potential.
                  </p>
                </div>
                
                <div className="mb-10">
                  <h3 className="text-xl text-white font-medium mb-3">
                    Finding the Right Partners
                  </h3>
                  <p className="text-lg">
                    That's when we connected with the founders of <span className="text-white font-medium">AYCE Capital</span>, 
                    who were already transforming managed service providers (MSPs) 
                    by helping them modernize and move to the cloud.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-lg mb-6">
            With a shared belief in modernization and long-term partnerships, 
            we teamed up to bring that same transformation to the bookkeeping world.
          </p>
          
          <p className="text-lg">
            Today, we're proud to support firm owners who want to preserve what they've built 
            while stepping confidently into the future.
          </p>
        </div>
        
        <div className="h-px bg-white/10 my-20"></div>
      </div>
    </div>
  );
};

export default Story;