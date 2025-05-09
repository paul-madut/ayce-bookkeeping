"use client"
import { useState } from 'react';
import { Mail, Linkedin, ChevronRight } from 'lucide-react';

const TeamPage = () => {
  const [teamMembers] = useState([
    {
      id: 1,
      name: 'Philip Kaczmarczyk',
      title: 'CEO',
      image: '/api/placeholder/200/200',
      bio: 'Phil is co-founder and CEO of AYCE Capital. He focuses on mergers and acquisitions (M&A), capital raising, and investment decisions. Prior to co-founding AYCE, Phil worked in various finance roles on the stock market, in SMB growth consulting, and M&A. Phils role is to make investment decisions and can provide real-time responses throughout the M&A process.',
      personalInfo: 'Phil has lived and worked in Barrie and the GTA, and enjoys giving back and supporting the community. In his spare time he reads, spends time with family, and golfs.'
    },
    {
      id: 2,
      name: 'William Dennis',
      title: 'COO',
      image: '/api/placeholder/200/200',
      bio: 'Will is co-founder and COO at AYCE Capital. He focuses on supporting MSP owners in various business operations spanning HR, compliance, accounting, procurement, and insurance. Prior to co-founding AYCE, Will worked in various roles across insurance, corporate finance, business development, accounting, operations, and financial regulation.',
      personalInfo: 'Will has lived and worked in Guelph and Ottawa, and often volunteered with the Canadian Cadet Program, Guelph Tool Library, and Urban Sugaring Project. In his spare time, he loves to grill, cycle the hills of Gatineau, and tend to his garden.'
    },
    {
      id: 3,
      name: 'Karen Frisky',
      title: 'CFO',
      image: '/api/placeholder/200/200',
      bio: 'Karen is the CFO at AYCE Capital and brings with her a vast array of accounting skills, earned during her 30 years of experience, including 16 years as Director of Finance and Chief Financial Officer with several public mining companies on both the TSX-V and the CSE. She received her Bachelor of Commerce with a major in Accounting from the University of Saskatchewan and holds a Certified Professional Accountant (CPA) designation.',
      personalInfo: 'Karen also worked in public practice as well as held senior accounting positions in the non-profit, health, manufacturing, and construction sectors.'
    },
    {
      id: 4,
      name: 'Liam Woodside',
      title: 'Operations Manager',
      image: '/api/placeholder/200/200',
      bio: 'Liam leads our operations team, focusing on optimizing business processes and implementing strategic initiatives.',
      personalInfo: 'Outside of work, Liam enjoys outdoor activities and technology.'
    },
    {
      id: 5,
      name: 'Kate McMullen',
      title: 'Client Relations',
      image: '/api/placeholder/200/200',
      bio: 'Kate ensures our clients receive exceptional service and builds strong relationships with our partners.',
      personalInfo: 'Kate is passionate about community building and sustainable business practices.'
    },
    {
      id: 6,
      name: 'Sean O\'Shaughnessy',
      title: 'Investment Director',
      image: '/api/placeholder/200/200',
      bio: 'Sean leads our investment strategy, identifying promising opportunities in the MSP sector.',
      personalInfo: 'Sean has over 25 years of experience in financial markets and investment banking.'
    }
  ]);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-gray-900 to-black">
        <div className="absolute inset-0 opacity-20 bg-[url('/api/placeholder/1920/400')]"></div>
        <div className="container mx-auto px-6 flex items-center justify-center h-full relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wider">OUR TEAM</h1>
        </div>
      </div>

      {/* Company Description */}
      <div className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-black text-teal-400 text-sm font-medium mb-6">
              Quick Honest and Fair
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the people behind AYCE Capital</h2>
            <p className="text-gray-300 text-lg mb-8">
              Our team brings decades of combined experience in finance, operations, and technology to help Managed Service Providers grow and thrive.
            </p>
            <div className="flex justify-center">
              <button className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-md flex items-center mr-4">
                Our Portfolio
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-transparent hover:bg-gray-800 text-white py-3 px-6 border border-white rounded-md flex items-center">
                About Us
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-gray-900 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl shadow-lg"
            >
              <div className="p-1 bg-gradient-to-br from-teal-400 to-gray-700">
                <div className="bg-gray-900 p-5">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-black mb-5">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-teal-400">{member.name}</h3>
                    <p className="text-gray-400 uppercase tracking-wider text-sm mb-4">{member.title}</p>
                    
                    <div className="h-px w-16 bg-teal-600 my-4"></div>
                    
                    <div className="text-gray-300 text-sm mb-6">
                      <p className="mb-4">{member.bio}</p>
                      <p className="text-gray-400">{member.personalInfo}</p>
                    </div>
                    
                    <div className="flex mt-4 space-x-3">
                      <a href="#" className="p-2 bg-gray-800 hover:bg-teal-900 rounded-full transition-colors">
                        <Mail size={18} className="text-teal-400" />
                      </a>
                      <a href="#" className="p-2 bg-gray-800 hover:bg-teal-900 rounded-full transition-colors">
                        <Linkedin size={18} className="text-teal-400" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to work with our team?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            We invest in and partner with Managed Service Providers that prioritize quality service, customer satisfaction, and employee well-being.
          </p>
          <button className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-8 rounded-md text-lg font-medium">
            Book a call
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-teal-400">AYCE CAPITAL</h3>
            </div>
            <div className="flex space-x-8 text-sm text-gray-400">
              <a href="#" className="hover:text-teal-400">Home</a>
              <a href="#" className="hover:text-teal-400">Team</a>
              <a href="#" className="hover:text-teal-400">Services</a>
              <a href="#" className="hover:text-teal-400">Press</a>
              <a href="#" className="hover:text-teal-400">Contact</a>
            </div>
          </div>
          <div className="h-px w-full bg-gray-800 my-6"></div>
          <div className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} AYCE Capital. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TeamPage;