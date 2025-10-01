'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { clientWorkImages } from '../data/projectImages';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  // derive menu items from data
  const serviceCategories = Array.from(new Set(clientWorkImages.map(i => i.category)));
  const featuredProjects = clientWorkImages.slice(0, 6);

  // helper to slugify labels into simple routes
  const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#2cf0c1]/60 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-white">EMMPAC SOLUTIONS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-yellow-300 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-yellow-300 transition-colors">
              About
            </Link>

            {/* Services dropdown (desktop) */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="text-white hover:text-yellow-300 transition-colors flex items-center gap-2"
                aria-expanded={isServicesOpen ? 'true' : 'false'}
                aria-haspopup="true"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsServicesOpen(v => !v);
                  }
                  if (e.key === 'Escape') setIsServicesOpen(false);
                }}
              >
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isServicesOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-2xl ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-2">
                    {serviceCategories.map(cat => (
                      <Link
                        key={cat}
                        href={`/services/${slugify(cat)}`}
                        className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Projects dropdown (desktop) */}
            <div
              className="relative"
              onMouseEnter={() => setIsProjectsOpen(true)}
              onMouseLeave={() => setIsProjectsOpen(false)}
            >
              <button
                className="text-white hover:text-yellow-300 transition-colors flex items-center gap-2"
                aria-expanded={isProjectsOpen ? 'true' : 'false'}
                aria-haspopup="true"
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsProjectsOpen(v => !v);
                  }
                  if (e.key === 'Escape') setIsProjectsOpen(false);
                }}
              >
                Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isProjectsOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-2xl ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-2">
                    {featuredProjects.map(p => (
                      <Link
                        key={p.id}
                        href={`/projects/${p.id}`}
                        className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
                        onClick={() => setIsProjectsOpen(false)}
                      >
                        {p.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/contact" className="text-white hover:text-yellow-300 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-300 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen ? 'true' : 'false'}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`md:hidden shadow-lg transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#2aa48e]/95 backdrop-blur-md' 
            : 'bg-[#2aa48e]/90 backdrop-blur-md'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-white hover:text-yellow-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-white hover:text-yellow-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            {/* Mobile Services expandable */}
            <div className="px-3">
              <button
                className="w-full text-left flex items-center justify-between px-3 py-2 text-white hover:text-yellow-300 transition-colors"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                aria-expanded={mobileServicesOpen ? 'true' : 'false'}
              >
                <span>Services</span>
                <svg className={`w-4 h-4 transform ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileServicesOpen && (
                <div className="pl-4">
                  <Link href="/services/commercial" className="block px-3 py-2 text-white hover:text-yellow-300" onClick={() => setIsMenuOpen(false)}>Commercial</Link>
                  <Link href="/services/residential" className="block px-3 py-2 text-white hover:text-yellow-300" onClick={() => setIsMenuOpen(false)}>Residential</Link>
                  <Link href="/services/waterproofing" className="block px-3 py-2 text-white hover:text-yellow-300" onClick={() => setIsMenuOpen(false)}>Waterproofing</Link>
                </div>
              )}
            </div>

            {/* Mobile Projects expandable */}
            <div className="px-3">
              <button
                className="w-full text-left flex items-center justify-between px-3 py-2 text-white hover:text-yellow-300 transition-colors"
                onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                aria-expanded={mobileProjectsOpen ? 'true' : 'false'}
              >
                <span>Projects</span>
                <svg className={`w-4 h-4 transform ${mobileProjectsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileProjectsOpen && (
                <div className="pl-4">
                  <Link href="/projects/commercial-building" className="block px-3 py-2 text-white hover:text-yellow-300" onClick={() => setIsMenuOpen(false)}>Commercial Building</Link>
                  <Link href="/projects/residential-project" className="block px-3 py-2 text-white hover:text-yellow-300" onClick={() => setIsMenuOpen(false)}>Residential Project</Link>
                  <Link href="/projects/event-management" className="block px-3 py-2 text-white hover:text-yellow-300" onClick={() => setIsMenuOpen(false)}>Event Management</Link>
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className="block px-3 py-2 text-white hover:text-yellow-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
