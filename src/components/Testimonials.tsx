'use client';

import { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Project Manager',
    company: 'ABC Construction',
    image: '/testimonials/client1.jpg',
    content: 'EMMPAC Solutions delivered exceptional results on our commercial project. Their attention to detail and professional approach made the entire process smooth and efficient.',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'HR Director',
    company: 'XYZ Corporation',
    image: '/testimonials/client2.jpg',
    content: 'The training programs conducted by EMMPAC were comprehensive and well-structured. Our team gained valuable insights and practical knowledge that we continue to apply.',
    rating: 5
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'CEO',
    company: 'Global Enterprises',
    image: '/testimonials/client3.jpg',
    content: 'Working with EMMPAC has been a game-changer for our organization. Their media production team created outstanding content that perfectly captured our vision.',
    rating: 5
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12 text-[#4169E1] dark:text-[#1E3A8A]">
            What Our Clients Say
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Cards */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <AnimatedSection key={testimonial.id} delay={0.1 + index * 0.1}>
                    <div className="w-full flex-shrink-0 px-4">
                      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                            <span className="text-2xl">👤</span>
                          </div>
                          <div className="ml-4">
                            <h3 className="text-xl font-semibold text-[#4169E1] dark:text-[#1E3A8A]">
                              {testimonial.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                              {testimonial.role} at {testimonial.company}
                            </p>
                          </div>
                        </div>
                        <div className="mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400">★</span>
                          ))}
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-lg italic">
                          &ldquo;{testimonial.content}&rdquo;
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6 text-[#4169E1] dark:text-[#1E3A8A]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6 text-[#4169E1] dark:text-[#1E3A8A]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex
                    ? 'bg-[#4169E1] dark:bg-[#1E3A8A]'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 