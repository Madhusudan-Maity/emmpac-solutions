'use client';

import AnimatedSection from '@/components/AnimatedSection';

const services = [
  {
    title: 'Constructions and Consultancy',
    description: 'From DPR to Completion with modern technology and product-based solutions.',
    features: [
      'Structural Health Check',
      'Waterproofing Solutions',
      'Construction Management',
      'Technical Consultancy'
    ],
    icon: '🏗️'
  },
  {
    title: 'Awareness Activities & Training',
    description: 'Knowledge upgradation, skill development, and capacity building programs.',
    features: [
      'Professional Training',
      'Workshop Organization',
      'Skill Development',
      'Capacity Building'
    ],
    icon: '📚'
  },
  {
    title: 'Media Productions',
    description: 'Documentaries, short films, feature films, and music albums production.',
    features: [
      'Documentary Production',
      'Short Film Making',
      'Feature Films',
      'Music Albums'
    ],
    icon: '🎥'
  }
];

export default function Services() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <AnimatedSection>
        <section className="bg-gray-100 dark:bg-gray-800 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#4169E1] dark:text-[#1E3A8A]">
              Our Services
            </h1>
            <p className="text-xl text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions for construction, training, and media production needs
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Services Grid */}
      <AnimatedSection delay={0.1}>
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedSection key={index} delay={0.15 + index * 0.05}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
                    <div className="text-5xl mb-6">{service.icon}</div>
                    <h3 className="text-2xl font-semibold mb-4 text-[#4169E1] dark:text-[#1E3A8A]">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                          <svg
                            className="h-5 w-5 mr-2 text-green-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection delay={0.2}>
        <section className="py-20 bg-[#4169E1] dark:bg-[#1E3A8A]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Let's discuss how we can help bring your vision to life with our expertise and experience.
            </p>
            <a
              href="/contact"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors shadow-lg"
            >
              Contact Us Today
            </a>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
} 