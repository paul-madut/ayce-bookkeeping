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
  Briefcase,
  Lightbulb,
  Eraser,
  Box, Lock, Search, Settings, Sparkles
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Link from "next/link";
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
      title: "Fractional CFO Services",
      description:
        "Strategic financial leadership on a part-time basis to help you drive growth, improve cash flow, and make better long-term decisions without the cost of a full-time CFO.",
      icon: <Briefcase className="w-8 h-8 text-teal-400" />,
      benefits: [
        "Financial forecasting",
        "Budgeting and planning",
        "Cash flow management",
        "Executive-level reporting",
      ],
    },
    {
      id: 5,
      title: "Advisory Services",
      description:
        "Personalized financial guidance to support your business through key decisions, operational improvements, and financial planning challenges.",
      icon: <Lightbulb className="w-8 h-8 text-teal-400" />,
      benefits: [
        "Business performance reviews",
        "Strategic planning",
        "Cost optimization",
        "Growth strategy support",
      ],
    },
    {
      id: 6,
      title: "Cleanup & Catch-up Services",
      description:
        "If you're behind on your books, we'll get you up to date quickly and accurately so you can regain control and confidence in your financials.",
      icon: <Eraser className="w-8 h-8 text-teal-400" />,
      benefits: [
        "Backlog bookkeeping",
        "Historical reconciliations",
        "Error corrections",
        "Organized records for tax readiness",
      ],
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Logo */}

      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-gray-900 to-black text-center">
        <div className="absolute inset-0 opacity-20 bg-[url('/api/placeholder/1920/400')]"></div>
        <div className="container mx-auto px-6 flex items-center justify-center h-full relative z-10">
          <div className="flex flex-col space-y-8">

          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wider">Expert Bookkeeping Services</h1>
          
          <div className="">
        
          <p className="text-xl text-gray-300 max-w-3xl">
          We offer premium bookkeeping services for businesses and specialize in acquiring bookkeeping firms — all with a clear, predictable monthly retainer so you'll never be surprised by hidden fees.
          </p>
          </div>
        </div>
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

      {/* Our Process - Aceternity Component with 5 Sections */}
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

          {/* Aceternity Glowing Effect Component */}
          <div 
  id="process-grid"
  className={`animate-on-scroll transition-all duration-700 ${
    isVisible["process-grid"] ? "opacity-100" : "opacity-0"
  }`}
>
<ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
    <GridItem
      area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
      icon={<FileText className="h-4 w-4 text-black dark:text-neutral-400" />}
      title="Discovery"
      description="We learn about your business, current financial processes, and specific needs."
    />
 
    <GridItem
      area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
      icon={<Lightbulb className="h-4 w-4 text-black dark:text-neutral-400" />}
      title="Stratategy"
      description="We develop a tailored service plan that addresses your unique requirements."
    />
 
    <GridItem
      area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
      icon={<PieChart className="h-4 w-4 text-black dark:text-neutral-400" />}
      title="Implementation"
      description="Our team integrates seamlessly with your operations to deliver financial clarity."
    />
 
    <GridItem
      area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
      icon={<TrendingUp className="h-4 w-4 text-black dark:text-neutral-400" />}
      title="Optimization"
      description="We continuously refine our approach to maximize efficiency and value."
    />
 
    <GridItem
      area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
      icon={<Users className="h-4 w-4 text-black dark:text-neutral-400" />}
      title="Long-term Partnership "
      description="We maintain ongoing support and strategic guidance as your business evolves and grows."
    />
  </ul>
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
            <Link href="/contact">
            <button className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-8 rounded-md text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Book a consultation
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// GridItem component for the aceternity effect
const GridItem = ({
  area,
  icon,
  title,
  description
}) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-gray-800 p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01} />
        <div
          className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-gray-900 p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-teal-400 bg-black p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3
                className="pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-teal-400 md:text-2xl/[1.875rem]">
                {title}
              </h3>
              <h2
                className="font-sans text-sm/[1.125rem] text-gray-300 md:text-base/[1.375rem]">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ServicesPage;