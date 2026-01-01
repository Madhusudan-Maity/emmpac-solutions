import AnimatedSection from '@/components/AnimatedSection';

const services = [
  {
    title: 'Constructions and Consultancy',
    description: 'From DPR to Completion with modern technology and product-based solutions.',
    features: [
      'DPR, Planning & Design',
      'Construction Management',
      'Technical Consultancy',
      'Quality Assurance & Supervision'
    ],
    icon: '🏗️'
  },
  {
    title: 'Structural Health Check',
    description: 'Comprehensive structural evaluation including pile testing and stability checks.',
    features: [
      'Pile Testing',
      'Stability & Deflection Analysis',
      'Non-destructive Testing',
      'Detailed Inspection Reports'
    ],
    icon: '🧪'
  },
  {
    title: 'Waterproofing, Repair & Retrofit',
    description: 'Waterproofing, grouting, coatings and retrofitting solutions to extend asset life.',
    features: [
      'Seamless Waterproofing',
      'Structural Retrofitting',
      'Grouting & Coatings',
      'Crack Repair & Strengthening'
    ],
    icon: '💧'
  },
  {
    title: 'Specialized Construction Solutions',
    description: 'Restoration, microconcreting, guniting and other specialty techniques for complex jobs.',
    features: [
      'Structural Restoration',
      'Microconcreting & Guniting',
      'Insulation & Sound Proofing',
      'Green-rated Building Solutions'
    ],
    icon: '🔧'
  },
  {
    title: 'Awareness Activities, Training & Capacity Building',
    description: 'Knowledge upgradation, skill development, and capacity building programs.',
    features: [
      'Professional Training',
      'Workshops & Seminars',
      'Skill Development Programs',
      'Tailored Capacity Building'
    ],
    icon: '📚'
  },
  {
    title: 'Consultancy & Third Party Inspection',
    description: 'Independent third-party inspection, technical audits and consultancy services.',
    features: [
      'Third Party Inspection',
      'Technical Audits',
      'Compliance & QA/QC',
      'Testing & Certification'
    ],
    icon: '🔍'
  },
  {
    title: 'Thunder & Lightning Protection',
    description: 'Design and installation of lightning protection and earthing systems to safeguard life and assets.',
    features: [
      'Risk Assessment',
      'Protection System Design',
      'Installation & Testing',
      'Maintenance Plans'
    ],
    icon: '⚡'
  },
  {
    title: 'Media Productions',
    description: 'Documentaries, short films, feature films, and music albums production.',
    features: [
      'Documentary Production',
      'Short & Feature Film Production',
      'Music Albums & Advertisements',
      'Festival & Distribution Support'
    ],
    icon: '🎥'
  },
  {
    title: 'Event Management',
    description: 'End-to-end event planning and management for cultural, promotional and industry events.',
    features: [
      'Event Planning & Promotion',
      'Festival & Film Event Management',
      'Logistics & On-ground Execution',
      'Stage & Technical Services'
    ],
    icon: '�'
  },
  {
    title: 'Waste Management',
    description: 'Comprehensive waste management solutions for various industries.',
    features: [
      'Waste Collection & Disposal',
      'Recycling & Resource Recovery',
      'Hazardous Waste Management',
      'Consultancy & Compliance'
    ],
    icon: '♻️'
  }
];

export default function Services() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <AnimatedSection>
        <section className="bg-gray-100 dark:bg-gray-800 py-3 md:py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-[#4169E1] dark:text-[#2cf0c1]">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions for construction, training, and media production needs
            </p>
          </div>
        </section>
      </AnimatedSection>

  {/* Services Grid */}
  <AnimatedSection delay={0.1} alwaysVisible>
        <section className="py-8 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
        <AnimatedSection key={index} delay={0.15 + index * 0.05} alwaysVisible>
                  <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
                    <div className="text-5xl mb-6">{service.icon}</div>
                    <h3 className="text-2xl font-semibold mb-4 text-[#4169E1] dark:text-[#2cf0c1]">
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
        <section className="py-20 bg-[#4169E1] dark:bg-[#2aa48e]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Let&apos;s discuss how we can help bring your vision to life with our expertise and experience.
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