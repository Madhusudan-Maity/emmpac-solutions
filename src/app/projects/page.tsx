import AnimatedSection from '@/components/AnimatedSection';
import ProjectGallery from '@/components/ProjectGallery';
import { clientWorkImages } from '@/data/projectImages';

export default function Projects() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <AnimatedSection>
        <section className="bg-gray-100 dark:bg-gray-800 py-3 md:py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-[#4169E1] dark:text-[#2cf0c1]">
              Our Projects
            </h1>
            <p className="text-lg md:text-xl text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Showcasing our expertise through successful project deliveries
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Projects Gallery */}
      <ProjectGallery 
        images={clientWorkImages}
        title=""
        subtitle=""
        columns={3}
      />

      {/* CTA Section */}
      <AnimatedSection delay={0.2}>
        <section className="py-12 bg-[#4169E1] dark:bg-[#2aa48e]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Have a Project in Mind?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Let&apos;s discuss how we can help bring your vision to life with our expertise and experience.
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