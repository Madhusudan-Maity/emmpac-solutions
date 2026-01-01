'use client';

import Link from 'next/link';
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Projects', href: '/projects' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Construction', href: '/services#construction' },
      { name: 'Awareness Activities', href: '/services#awareness' },
      { name: 'Media Production', href: '/services#media-production' },
      { name: 'Event Management', href: '/services#event-management' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { name: 'Phone: +918877000030', href: 'tel:+918877000030' },
      { name: 'Email: emmpacsolutions@gmail.com', href: 'mailto:emmpacsolutions@gmail.com' },
      { name: 'Address: Purulia, West Bengal', href: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">EMMPAC Solutions</h3>
            <p className="text-gray-400 mb-4">
            Complete Glee Under One Roof            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <InstagramIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Developed by{' '}
            <a
              href="mailto:madmadhu64@gmail.com?subject=Contact%3A%20Developer%20Madhusudan%20Maity"
              className="underline hover:text-white"
            >
              TechWithMad
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 
