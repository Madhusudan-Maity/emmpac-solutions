'use client';

import AnimatedSection from '@/components/AnimatedSection';
import Image from 'next/image';

const team = [
  {
    name: 'Surya Kanta Mahata',
    role: 'CEO & Founder',
    image: '/images/surya_ceo.jpeg',
    bio: 'With 15 years of experience in this industry, Surya leads our company with vision and expertise.'
  },
  {
    name: 'Jane Smith',
    role: 'Technical Director',
    image: '/team/technical.jpg',
    bio: 'Jane brings extensive technical knowledge and innovative solutions to our projects.'
  },
  {
    name: 'Mike Johnson',
    role: 'Project Manager',
    image: '/team/project.jpg',
    bio: 'Mike ensures smooth project execution and client satisfaction through effective management.'
  }
];

const values = [
  {
    title: 'Excellence',
    description: 'We strive for excellence in every project we undertake, ensuring the highest quality standards.',
    icon: '⭐'
  },
  {
    title: 'Innovation',
    description: 'We embrace innovation and continuously seek new solutions to meet evolving challenges.',
    icon: '💡'
  },
  {
    title: 'Integrity',
    description: 'We maintain the highest standards of integrity in all our business dealings.',
    icon: '🤝'
  },
  {
    title: 'Sustainability',
    description: 'We are committed to sustainable practices and environmental responsibility.',
    icon: '🌱'
  }
];

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <AnimatedSection>
        <section className="bg-gray-100 dark:bg-gray-800 py-3 md:py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-[#4169E1] dark:text-[#2cf0c1]">
              About EMMPAC Solutions
            </h1>
            <p className="text-lg md:text-xl text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Building a sustainable future through innovation and excellence
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Company Overview */}
      <AnimatedSection delay={0.1}>
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-[#4169E1] dark:text-[#2cf0c1]">
                Our Story
              </h2>
              <div className="prose prose-lg dark:prose-invert mx-auto">
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  EMMPAC Solutions was founded with a vision to revolutionize the construction and training industry. 
                  Our journey began with a simple yet powerful idea: to create sustainable, innovative solutions that 
                  make a positive impact on society.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Today, we stand as a leading provider of construction services, training programs, and media production, 
                  serving clients across various sectors. Our commitment to excellence and innovation has helped us build 
                  a reputation for delivering exceptional results.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  As we continue to grow, we remain dedicated to our core values and mission of creating a better future 
                  through sustainable development and knowledge sharing.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Our Values */}
      <AnimatedSection delay={0.2}>
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#4169E1] dark:text-[#2cf0c1]">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <AnimatedSection key={index} delay={0.3 + index * 0.1}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-[#4169E1] dark:text-[#2cf0c1]">
                      {value.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection delay={0.3}>
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#4169E1] dark:text-[#2cf0c1]">
              Our Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <AnimatedSection key={index} delay={0.4 + index * 0.1}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700">
                      <div className="w-full h-48 bg-gray-300 dark:bg-gray-600 flex items-center justify-center overflow-hidden relative">
                        {member.image ? (
                          <Image 
                            src={member.image}
                            alt={member.name}
                            width={300}
                            height={192}
                            className="w-full h-full object-cover"
                            onError={() => {
                              // Fallback handled by Next.js automatically
                            }}
                          />
                        ) : (
                          <span className="text-4xl">👤</span>
                        )}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-[#4169E1] dark:text-[#2cf0c1]">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {member.role}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection delay={0.4}>
        <section className="py-20 bg-[#4169E1] dark:bg-[#2aa48e]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Join Us in Building the Future
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Be part of our journey as we continue to innovate and create sustainable solutions for tomorrow.
            </p>
            <a
              href="/contact"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </AnimatedSection>

      {/* Company Registration */}
      <AnimatedSection delay={0.45}>
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#4169E1] dark:text-[#2cf0c1]">Company Registration</h2>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li><strong>GST Number:</strong> 19AALFE245H1Z6</li>
                <li><strong>TAN Number:</strong> CALE08382D</li>
                <li>
                  <strong>Registered Address:</strong>
                  <div className="mt-1">Emmpac Building, Ranchi Road, Opp. Sainik School, Behind Gorain Hotel,</div>
                  <div>Post: Raghabpur, Purulia - 723149</div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
} 