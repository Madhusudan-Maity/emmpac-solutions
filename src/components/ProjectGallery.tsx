'use client';

import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import PlaceholderImage from './PlaceholderImage';

interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: 'Construction' | 'Training' | 'Media Production';
  description?: string;
}

interface ProjectGalleryProps {
  images: ProjectImage[];
  title?: string;
  subtitle?: string;
  columns?: 2 | 3 | 4;
}

export default function ProjectGallery({ 
  images, 
  title = "Our Work", 
  subtitle = "Showcasing our successful projects and client work",
  columns = 3 
}: ProjectGalleryProps) {

  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  };

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-8">
            {title && (
              <h2 className="text-4xl font-bold mb-4 text-[#4169E1] dark:text-[#2cf0c1]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className={`grid ${gridCols[columns]} gap-6`}>
          {images.map((image, index) => (
            <AnimatedSection key={image.id} delay={0.1 + index * 0.05}>
                             <div 
                 className="group bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
               >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      // If image fails to load, show placeholder
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const placeholder = target.parentElement?.querySelector('.placeholder-fallback');
                      if (placeholder) {
                        (placeholder as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                  <div className="placeholder-fallback hidden absolute inset-0">
                    <PlaceholderImage category={image.category} className="w-full h-full" />
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-[#4169E1] dark:text-[#2cf0c1]">
                      {image.title}
                    </h3>
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      {image.category}
                    </span>
                  </div>
                  {image.description && (
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {image.description}
                    </p>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      
    </section>
  );
}
