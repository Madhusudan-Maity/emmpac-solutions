interface PlaceholderImageProps {
  category: 'Construction' | 'Training' | 'Media Production';
  className?: string;
}

export default function PlaceholderImage({ category, className = '' }: PlaceholderImageProps) {
  const getCategoryIcon = () => {
    switch (category) {
      case 'Construction':
        return '🏗️';
      case 'Training':
        return '📚';
      case 'Media Production':
        return '🎥';
      default:
        return '📷';
    }
  };

  const getCategoryColor = () => {
    switch (category) {
      case 'Construction':
        return 'bg-orange-100 dark:bg-orange-900';
      case 'Training':
        return 'bg-blue-100 dark:bg-blue-900';
      case 'Media Production':
        return 'bg-purple-100 dark:bg-purple-900';
      default:
        return 'bg-gray-100 dark:bg-gray-700';
    }
  };

  return (
    <div className={`w-full h-full flex items-center justify-center ${getCategoryColor()} ${className}`}>
      <div className="text-center">
        <div className="text-6xl mb-2">{getCategoryIcon()}</div>
        <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
          {category}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Add your image here
        </p>
      </div>
    </div>
  );
}
