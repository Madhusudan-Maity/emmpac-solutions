'use client';

import AnimatedSection from '@/components/AnimatedSection';

const projects = [
  {
    title: 'Commercial Complex',
    category: 'Construction',
    description: 'Modern commercial complex with state-of-the-art facilities and sustainable design.',
    image: '/projects/commercial.jpg',
    features: ['Green Building Design', 'Smart Infrastructure', 'Energy Efficient']
  },
  {
    title: 'Training Center',
    category: 'Training',
    description: 'Comprehensive training facility for professional development and skill enhancement.',
    image: '/projects/training.jpg',
    features: ['Modern Classrooms', 'Practical Labs', 'Conference Facilities']
  },
  {
    title: 'Documentary Series',
    category: 'Media Production',
    description: 'Award-winning documentary series on environmental conservation.',
    image: '/projects/documentary.jpg',
    features: ['High Production Value', 'Expert Interviews', 'Global Distribution']
  }
];

export default function Projects() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <AnimatedSection>
        <section className="bg-gray-100 dark:bg-gray-800 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#4169E1] dark:text-[#1E3A8A]">
              Our Projects
            </h1>
            <p className="text-xl text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Showcasing our expertise through successful project deliveries
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Projects Grid */}
      <AnimatedSection delay={0.1}>
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <AnimatedSection key={index} delay={0.15 + index * 0.05}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-200 dark:border-gray-700">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700">
                      {/* Add actual images later */}
                      <div className="w-full h-48 bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                        <span className="text-4xl">🏗️</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-[#4169E1] dark:text-[#1E3A8A]">
                          {project.title}
                        </h3>
                        <span className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
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
              Have a Project in Mind?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Let's discuss how we can help bring your vision to life with our expertise and experience.
            </p>
            <a
              href="/contact"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors shadow-lg"
            >
              Start Your Project
            </a>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
} 