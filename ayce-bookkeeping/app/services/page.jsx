"use client";
import { useState, useEffect } from "react";
import {
  ChevronRight,
  Calculator,
  FileText,
  TrendingUp,
  PieChart,
  Shield,
  Users,
} from "lucide-react";

const ServicesPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleVisibility = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight - 100;
        if (isInView) {
          setIsVisible((prev) => ({ ...prev, [el.id]: true }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleVisibility);
    handleVisibility(); // Check initial visibility

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleVisibility);
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "Bookkeeping Services",
      description:
        "Comprehensive bookkeeping solutions tailored for businesses of all sizes. We handle day-to-day financial transactions, reconciliations, and reporting so you can focus on your core business.",
      icon: <FileText className="w-8 h-8 text-teal-400" />,
      benefits: [
        "Monthly financial statements",
        "Accounts payable/receivable",
        "Bank reconciliation",
        "General ledger maintenance",
      ],
    },
    {
      id: 2,
      title: "Financial Reporting",
      description:
        "Clear, accurate financial reports that provide actionable insights into your business performance and help you make informed decisions for growth and profitability.",
      icon: <PieChart className="w-8 h-8 text-teal-400" />,
      benefits: [
        "P&L statements",
        "Balance sheets",
        "Cash flow analysis",
        "Custom KPI tracking",
      ],
    },
    {
      id: 3,
      title: "Payroll Management",
      description:
        "End-to-end payroll processing services that ensure your employees are paid accurately and on time while keeping you compliant with relevant tax regulations.",
      icon: <Users className="w-8 h-8 text-teal-400" />,
      benefits: [
        "Payroll processing",
        "Tax calculations",
        "Direct deposits",
        "Compliance management",
      ],
    },
    {
      id: 4,
      title: "Tax Preparation",
      description:
        "Expert tax preparation services to minimize your tax liability while ensuring full compliance with all applicable tax laws and regulations.",
      icon: <Calculator className="w-8 h-8 text-teal-400" />,
      benefits: [
        "Tax planning",
        "Return preparation",
        "Deduction optimization",
        "Audit support",
      ],
    },
    {
      id: 5,
      title: "M&A Advisory",
      description:
        "Specialized acquisition services for those looking to buy bookkeeping firms. We handle the entire process from identifying targets to post-acquisition integration.",
      icon: <TrendingUp className="w-8 h-8 text-teal-400" />,
      benefits: [
        "Target identification",
        "Valuation",
        "Due diligence",
        "Integration support",
      ],
    },
    {
      id: 6,
      title: "Compliance Services",
      description:
        "Comprehensive compliance solutions to ensure your financial operations meet all regulatory requirements and industry standards.",
      icon: <Shield className="w-8 h-8 text-teal-400" />,
      benefits: [
        "Regulatory compliance",
        "Financial audits",
        "Risk assessment",
        "Policy development",
      ],
    },
  ];

  const processSteps = [
    {
      id: "step1",
      title: "Discovery",
      description:
        "We learn about your business, current financial processes, and specific needs.",
    },
    {
      id: "step2",
      title: "Strategy",
      description:
        "We develop a tailored service plan that addresses your unique requirements.",
    },
    {
      id: "step3",
      title: "Implementation",
      description:
        "Our team integrates seamlessly with your operations to deliver financial clarity.",
    },
    {
      id: "step4",
      title: "Optimization",
      description:
        "We continuously refine our approach to maximize efficiency and value.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Logo */}

      {/* Services Header */}
      <div className="container mx-auto px-6 pt-8 pb-20">
        <div className={`transform transition-all duration-700 pt-20`}>
          <span className="inline-block px-4 py-2 rounded-full bg-gray-900 text-teal-400 text-sm font-medium mb-4">
            Quick Honest and Fair
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Expert Bookkeeping Services
          </h1>
          <div className="h-1 w-24 bg-teal-400 mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl">
            We provide premium bookkeeping services to businesses and specialize
            in acquiring bookkeeping companies.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-gray-900 py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className={`animate-on-scroll bg-black rounded-lg p-8 transition-all duration-700 hover:shadow-xl hover:shadow-teal-900/20 transform hover:-translate-y-2 ${
                  isVisible[`service-${service.id}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${service.id * 100}ms` }}
              >
                <div className="bg-gray-900 top-0 inline-block rounded-lg ">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-teal-400">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start group">
                      <ChevronRight className="h-5 w-5 text-teal-400 mr-2 mt-1 flex-shrink-0 transform transition-transform group-hover:translate-x-1" />
                      <span className="text-gray-400">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Process */}
      <div className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div
            id="process-header"
            className={`animate-on-scroll text-center mb-20 transition-all duration-700 ${
              isVisible["process-header"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <div className="h-1 w-20 bg-teal-400 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A streamlined approach to delivering exceptional financial
              services.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-800 transform -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-16 md:space-y-24">
              {processSteps.map((step, index) => (
                <div
                  key={step.id}
                  id={step.id}
                  className={`animate-on-scroll relative transition-all duration-700 ${
                    isVisible[step.id] ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:ml-auto" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-gray-900 p-8 rounded-lg relative">
                      {/* Number badge for desktop */}
                      <div
                        className={`absolute top-0 ${
                          index % 2 === 0
                            ? "left-0 ml-[-1.25rem]"
                            : "right-0 mr-[-1.25rem]"
                        } mt-[-1.25rem] hidden md:block`}
                      >
                        <div className="w-10 h-10 rounded-full bg-teal-400 flex items-center justify-center z-10 relative">
                          <span className="text-black font-bold">
                            {index + 1}
                          </span>
                        </div>
                      </div>

                      {/* Number badge for mobile */}
                      <div className="md:hidden mb-4">
                        <div className="w-10 h-10 rounded-full bg-teal-400 flex items-center justify-center">
                          <span className="text-black font-bold">
                            {index + 1}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-4 text-teal-400">
                        {step.title}
                      </h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Industries Focus */}
      <div className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div
            id="industries-header"
            className={`animate-on-scroll text-center mb-16 transition-all duration-700 ${
              isVisible["industries-header"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Focus</h2>
            <div className="h-1 w-20 bg-teal-400 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We specialize exclusively in the bookkeeping industry
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
            <div
              id="service-focus"
              className={`animate-on-scroll flex-1 bg-black p-8 rounded-lg transition-all duration-700 transform ${
                isVisible["service-focus"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4 text-teal-400">
                Bookkeeping Services
              </h3>
              <p className="text-gray-300 mb-6">
                We provide comprehensive bookkeeping services for businesses of
                all sizes, from startups to established enterprises. Our team of
                financial experts ensures accurate, timely, and insightful
                financial management.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start group">
                  <ChevronRight className="h-5 w-5 text-teal-400 mr-2 mt-1 flex-shrink-0 transform transition-transform group-hover:translate-x-1" />
                  <span className="text-gray-400">
                    Complete financial management
                  </span>
                </li>
                <li className="flex items-start group">
                  <ChevronRight className="h-5 w-5 text-teal-400 mr-2 mt-1 flex-shrink-0 transform transition-transform group-hover:translate-x-1" />
                  <span className="text-gray-400">Cloud-based accounting</span>
                </li>
                <li className="flex items-start group">
                  <ChevronRight className="h-5 w-5 text-teal-400 mr-2 mt-1 flex-shrink-0 transform transition-transform group-hover:translate-x-1" />
                  <span className="text-gray-400">
                    Real-time financial insights
                  </span>
                </li>
              </ul>
            </div>

            <div
              id="acquisition-focus"
              className={`animate-on-scroll flex-1 bg-black p-8 rounded-lg transition-all duration-700 transform ${
                isVisible["acquisition-focus"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <h3 className="text-2xl font-bold mb-4 text-teal-400">
                Buying Bookkeeping Companies
              </h3>
              <p className="text-gray-300 mb-6">
                We acquire and invest in bookkeeping firms with established
                client bases and strong reputations. Our acquisition process
                prioritizes smooth transitions for clients and staff.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start group">
                  <ChevronRight className="h-5 w-5 text-teal-400 mr-2 mt-1 flex-shrink-0 transform transition-transform group-hover:translate-x-1" />
                  <span className="text-gray-400">Fair market valuations</span>
                </li>
                <li className="flex items-start group">
                  <ChevronRight className="h-5 w-5 text-teal-400 mr-2 mt-1 flex-shrink-0 transform transition-transform group-hover:translate-x-1" />
                  <span className="text-gray-400">
                    Flexible deal structures
                  </span>
                </li>
                <li className="flex items-start group">
                  <ChevronRight className="h-5 w-5 text-teal-400 mr-2 mt-1 flex-shrink-0 transform transition-transform group-hover:translate-x-1" />
                  <span className="text-gray-400">
                    Seamless client transitions
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div
            id="cta-section"
            className={`animate-on-scroll text-center max-w-3xl mx-auto transition-all duration-700 ${
              isVisible["cta-section"]
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            <span className="text-teal-400 text-lg font-medium">
              Ready to transform your financial management?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Let's start the conversation
            </h2>
            <p className="text-gray-400 mb-8">
              Whether you need professional bookkeeping services or are
              considering selling your bookkeeping practice, our team is here to
              help.
            </p>
            <button className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-8 rounded-md text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Book a consultation
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="text-teal-400 text-xl font-bold mb-4">
            AYCE CAPITAL
          </div>
          <p className="text-gray-400 max-w-md mx-auto mb-6">
            Specializing in premium bookkeeping services and strategic
            acquisitions in the bookkeeping industry.
          </p>
          <div className="h-px w-16 bg-gray-800 mx-auto mb-6"></div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AYCE Capital. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;
