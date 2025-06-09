import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <AnimatedSection>
        <section className="relative h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 z-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#4169E1] dark:text-[#1E3A8A]">
              EMMPAC SOLUTIONS
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
              Complete Glee Under One Roof
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                href="/services" 
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors shadow-lg"
              >
                Our Services
              </Link>
              <Link 
                href="/contact" 
                className="bg-[#4169E1] hover:bg-[#1E3A8A] text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Services Preview Section */}
      <AnimatedSection delay={0.1}>
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#4169E1] dark:text-[#1E3A8A]">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Constructions and Consultancy",
                  description: "From DPR to Completion with modern technology and product-based solutions.",
                  icon: "🏗️"
                },
                {
                  title: "Awareness Activities & Training",
                  description: "Knowledge upgradation, skill development, and capacity building programs.",
                  icon: "📚"
                },
                {
                  title: "Media Productions",
                  description: "Documentaries, short films, feature films, and music albums production.",
                  icon: "🎥"
                }
              ].map((service, index) => (
                <AnimatedSection key={index} delay={0.15 + index * 0.05}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-[#4169E1] dark:text-[#1E3A8A]">{service.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Why Choose Us Section */}
      <AnimatedSection delay={0.1}>
        <section className="py-20 bg-blue-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Expert Team",
                  description: "Highly skilled professionals with years of experience"
                },
                {
                  title: "Quality Work",
                  description: "Commitment to excellence in every project"
                },
                {
                  title: "Timely Delivery",
                  description: "Efficient project management and on-time completion"
                },
                {
                  title: "Customer Focus",
                  description: "Dedicated to meeting client requirements"
                }
              ].map((feature, index) => (
                <AnimatedSection key={index} delay={0.15 + index * 0.05}>
                  <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors">
                    <h3 className="text-xl font-semibold mb-3 text-[#4169E1] dark:text-[#1E3A8A]">{feature.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Add Testimonials section before the CTA section */}
      <Testimonials />

      {/* CTA Section */}
      <AnimatedSection delay={0.1}>
        <section className="py-20 bg-[#4169E1] dark:bg-[#1E3A8A] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Let&apos;s discuss how we can help bring your vision to life with our expertise and experience.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors shadow-lg"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}
