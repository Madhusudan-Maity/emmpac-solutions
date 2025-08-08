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
    title: 'Commercial Complex Development',
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
    id: 'training-2',
    src: '/images/projects/workshop.jpg',
    alt: 'Interactive workshop session',
    title: 'Leadership Workshop',
    category: 'Training',
    description: 'Interactive leadership development workshop for senior executives.',
    client: 'Global Industries',
    year: '2023'
  },
  {
    id: 'media-1',
    src: '/images/projects/documentary.jpg',
    alt: 'Documentary production still',
    title: 'Environmental Documentary',
    category: 'Media Production',
    description: 'Award-winning documentary on environmental conservation and sustainability.',
    client: 'EcoVision Network',
    year: '2023'
  },
  {
    id: 'media-2',
    src: '/images/projects/short-film.jpg',
    alt: 'Short film production',
    title: 'Short Film Production',
    category: 'Media Production',
    description: 'Creative short film showcasing local culture and traditions.',
    client: 'Cultural Arts Foundation',
    year: '2023'
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
