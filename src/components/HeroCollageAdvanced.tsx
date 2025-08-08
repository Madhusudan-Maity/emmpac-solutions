'use client';

import Image from 'next/image';
import { clientWorkImages } from '@/data/projectImages';

export default function HeroCollageAdvanced() {
  // Get a subset of images for the collage
  const collageImages = clientWorkImages.slice(0, 6);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Collage with sophisticated layout */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="relative w-full h-full">
          {/* Main large image in center */}
          <div className="absolute inset-0 opacity-90">
            <Image
              src={collageImages[0]?.src || '/images/projects/commercial-building.jpg'}
              alt="Main project"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-transparent" />
          </div>

          {/* Corner accent images */}
          <div className="absolute top-0 left-0 w-1/3 h-1/3 opacity-70">
            <Image
              src={collageImages[1]?.src || '/images/projects/residential-project.jpg'}
              alt="Project 1"
              fill
              className="object-cover"
              sizes="33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" />
          </div>

          <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-15">
            <Image
              src={collageImages[2]?.src || '/images/projects/training-session.jpg'}
              alt="Project 2"
              fill
              className="object-cover"
              sizes="33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-black/40 to-transparent" />
          </div>

          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-15">
            <Image
              src={collageImages[3]?.src || '/images/projects/workshop.jpg'}
              alt="Project 3"
              fill
              className="object-cover"
              sizes="33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
          </div>

          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 opacity-15">
            <Image
              src={collageImages[4]?.src || '/images/projects/documentary.jpg'}
              alt="Project 4"
              fill
              className="object-cover"
              sizes="33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tl from-black/40 to-transparent" />
          </div>

          {/* Center overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-800/60 to-gray-900/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-transparent to-gray-900/60" />
          
          {/* Animated overlay pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-transparent to-yellow-500/20 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 text-center px-4">
        <div className="container mx-auto">
          <div className="animate-fade-in-up">
            {/* Brand Logo/Icon */}
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
                <span className="text-3xl md:text-4xl">🏗️</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
              EMMPAC SOLUTIONS
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-8 text-gray-100 drop-shadow-lg max-w-4xl mx-auto leading-relaxed">
              Complete Glee Under One Roof
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-200 drop-shadow-md max-w-2xl mx-auto mb-10 opacity-90">
              Transforming visions into reality through construction, training, and media production excellence
            </p>

                         {/* CTA Buttons */}
             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <button 
                 onClick={() => window.location.href = '/services'}
                 className="group bg-red-500 hover:bg-green-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 shadow-lg transform hover:scale-105 hover:shadow-xl flex items-center gap-2 border-2 border-transparent hover:border-white cursor-pointer"
               >
                 <span>Our Services</span>
                 <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                 </svg>
               </button>
               <button 
                 onClick={() => window.location.href = '/contact'}
                 className="group bg-[#fdc700] hover:bg-[#4169E1] text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 shadow-lg transform hover:scale-105 hover:shadow-xl flex items-center gap-2 border-2 border-transparent hover:border-white cursor-pointer"
               >
                 <span>Contact Us</span>
                 <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                 </svg>
               </button>
             </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-75" style={{animationDelay: '2s'}}></div>
    </section>
  );
}
