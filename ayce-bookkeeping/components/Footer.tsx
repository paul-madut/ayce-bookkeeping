import React from 'react'
import { motion } from 'framer-motion'
import { AnimatedText } from '../app/page'
import { stagger } from '../app/page'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-16 border-t border-gray-800 ">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <AnimatedText delay={0.1}>
          <div className="text-2xl font-bold mb-6">ANAVO Bookkeeping</div>
          <p className="text-gray-400">
          Looking to the Future? <br /> So Are We.
          </p>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/services" className="text-gray-400 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <a href="/team" className="text-gray-400 hover:text-white">
                Team
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </AnimatedText>

        <AnimatedText delay={0.3}>
          <h4 className="font-bold mb-4">Investments</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/press" className="text-gray-400 hover:text-white">
                Portfolio
              </Link>
            </li>
          </ul>
        </AnimatedText>

        <AnimatedText delay={0.4}>
          <h4 className="font-bold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Disclaimers
              </a>
            </li>
          </ul>
        </AnimatedText>
      </div>

      <AnimatedText delay={0.5} className="text-gray-400 text-sm">
        © 2025 ANAVO Bookkeeping. All rights reserved.
      </AnimatedText>
    </div>
  </footer>
  )
}

export default Footer