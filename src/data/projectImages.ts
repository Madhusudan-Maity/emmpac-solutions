export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: 'Construction' | 'Training' | 'Media Production';
  description?: string;
  client?: string;
  year?: string;
}

// Client work images using actual images from the projects folder
export const clientWorkImages: ProjectImage[] = [
  {
    id: 'construction-1',
    src: '/images/projects/commercial-building.jpg',
    alt: 'Modern commercial building construction',
    title: 'Commercial Development',
    category: 'Construction',
    description: 'State-of-the-art commercial complex with sustainable design and modern amenities.',
    client: 'ABC Developers',
    year: '2023'
  },
  {
    id: 'construction-2',
    src: '/images/projects/residential-project.jpg',
    alt: 'Residential housing project',
    title: 'Residential Housing Project',
    category: 'Construction',
    description: 'Multi-story residential complex with 200+ units and community facilities.',
    client: 'XYZ Housing',
    year: '2023'
  },
  {
    id: 'construction-3',
    src: '/images/projects/work7.jpg',
    alt: 'Additional construction work',
    title: 'Infrastructure Development',
    category: 'Construction',
    description: 'Large-scale infrastructure development project with modern engineering solutions.',
    client: 'City Development Corp',
    year: '2023'
  },
  {
    id: 'training-1',
    src: '/images/projects/training-session.jpg',
    alt: 'Professional training session',
    title: 'Corporate Training Program',
    category: 'Training',
    description: 'Comprehensive skill development program for corporate professionals.',
    client: 'TechCorp Solutions',
    year: '2023'
  },

    {
    id: 'media-2',
    src: '/images/projects/media.jpg',
    alt: 'Short film production',
    title: 'Media Production',
    category: 'Media Production',
    description: 'Creative short film showcasing local culture and traditions.',
    client: 'Cultural Arts Foundation',
    year: '2023'
  }
  ,
  {
    id: 'event-1',
    src: '/images/projects/event-management.jpg',
    alt: 'Event management and seminar',
    title: 'Festival & Event Management',
    category: 'Media Production',
    description: 'Large scale festival management and film event logistics.',
    client: 'Regional Film Festival',
    year: '2024'
  },
  {
    id: 'consultancy-1',
    src: '/images/projects/work7.jpg',
    alt: 'Third party inspection and consultancy',
    title: 'Technical Consultancy & Audit',
    category: 'Construction',
    description: 'Third-party technical audits and QA/QC services for infrastructure projects.',
    client: 'City Infra Ltd',
    year: '2024'
  },
  {
    id: 'waterproofing-1',
    src: '/images/projects/waterproofing.jpg',
    alt: 'Waterproofing and retrofitting work',
    title: 'Waterproofing & Retrofit',
    category: 'Construction',
    description: 'Seamless waterproofing and structural retrofitting for commercial building.',
    client: 'Sunrise Developers',
    year: '2022'
  },
  {
    id: 'lightning-1',
    src: '/images/projects/residential-project.jpg',
    alt: 'Lightning protection system installation',
    title: 'Lightning Protection Installation',
    category: 'Construction',
    description: 'Design and earthing system installation for residential towers.',
    client: 'Green Homes',
    year: '2024'
  }
];

// Filter images by category
export const getImagesByCategory = (category: ProjectImage['category']) => {
  return clientWorkImages.filter(image => image.category === category);
};

// Get featured images for homepage
export const getFeaturedImages = (count: number = 6) => {
  return clientWorkImages.slice(0, count);
};
