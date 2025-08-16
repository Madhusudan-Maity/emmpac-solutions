'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroCollage() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Collage Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-collage.jpg"
          alt="EMMPAC Solutions - Our Work Collage"
          fill
          className="object-cover animate-fade-in"
          sizes="100vw"
          priority
        />
        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-800/70 to-gray-900/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-transparent to-gray-900/60" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 text-center px-4">
        <div className="container mx-auto">
          <div className="animate-fade-in-up">
                         {/* Brand Logo with animation */}
             <div className="mb-6 animate-fade-in" style={{animationDelay: '0.3s'}}>
               <div className="inline-flex items-center justify-center w-auto h-auto bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 mb-4 p-2">
                 <Image
                   src="/images/logo.jpg"
                   alt="EMMPAC Solutions Logo"
                   width={120}
                   height={120}
                   className="w-auto h-auto max-w-full object-contain"
                   priority
                 />
               </div>
             </div>

            {/* Main Heading with enhanced shadow */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white drop-shadow-2xl animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              EMMPAC SOLUTIONS
            </h1>
            
            {/* Subtitle with animation */}
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-8 text-gray-100 drop-shadow-lg max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.7s'}}>
              Complete Glee Under One Roof
            </p>

            {/* Description with animation */}
            <p className="text-base md:text-lg text-gray-200 drop-shadow-md max-w-2xl mx-auto mb-10 opacity-90 animate-fade-in-up" style={{animationDelay: '0.9s'}}>
              Transforming visions into reality through construction, training, and media production excellence
            </p>

            {/* CTA Buttons with enhanced animations */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '1.1s'}}>
              <Link 
                href="/services" 
                className="group bg-yellow-400 hover:bg-cyan-500 text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-xl flex items-center gap-2"
              >
                <span>Our Services</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/contact" 
                className="group bg-blue-400 hover:bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-xl flex items-center gap-2"
              >
                <span>Contact Us</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-fade-in" style={{animationDelay: '1.3s'}}>
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-75 animate-fade-in" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75 animate-fade-in" style={{animationDelay: '1.7s'}}></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-75 animate-fade-in" style={{animationDelay: '1.9s'}}></div>
    </section>
  );
}
