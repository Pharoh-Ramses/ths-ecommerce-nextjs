'use client';

import Image from 'next/image';
import Link from 'next/link';

export interface CardProps {
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  href?: string;
  badge?: string;
  badgeVariant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  price?: string;
  originalPrice?: string;
  rating?: number;
  reviewCount?: number;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
  variant?: 'default' | 'compact' | 'featured';
  orientation?: 'vertical' | 'horizontal';
}

export default function Card({
  title,
  description,
  image,
  imageAlt,
  href,
  badge,
  badgeVariant = 'primary',
  price,
  originalPrice,
  rating,
  reviewCount,
  buttonText = 'Learn More',
  onButtonClick,
  className = '',
  variant = 'default',
  orientation = 'vertical',
}: CardProps) {
  const getBadgeClasses = (variant: string) => {
    const baseClasses = 'absolute top-3 right-3 px-2 py-1 text-xs font-medium rounded-full z-10';
    switch (variant) {
      case 'primary':
        return `${baseClasses} bg-blue text-white`;
      case 'secondary':
        return `${baseClasses} bg-dark-500 text-white`;
      case 'success':
        return `${baseClasses} bg-green text-white`;
      case 'warning':
        return `${baseClasses} bg-yellow-500 text-dark-900`;
      case 'danger':
        return `${baseClasses} bg-red text-white`;
      default:
        return `${baseClasses} bg-blue text-white`;
    }
  };

  const getCardClasses = () => {
    const baseClasses = 'bg-white rounded-lg shadow-sm border border-light-300 overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1';
    
    if (orientation === 'horizontal') {
      return `${baseClasses} flex ${variant === 'compact' ? 'max-w-md' : 'max-w-2xl'}`;
    }
    
    switch (variant) {
      case 'compact':
        return `${baseClasses} max-w-sm`;
      case 'featured':
        return `${baseClasses} max-w-md border-2 border-blue shadow-lg`;
      default:
        return baseClasses;
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="half-fill">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path fill="url(#half-fill)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-4 h-4 text-light-400 fill-current" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }
    
    return stars;
  };

  const CardContent = () => (
    <div className={getCardClasses() + ` ${className}`}>
      {/* Image Section */}
      {image && (
        <div className={`relative ${orientation === 'horizontal' ? 'w-48 flex-shrink-0' : 'h-48 w-full'} bg-light-200`}>
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover"
            sizes={orientation === 'horizontal' ? '192px' : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
          />
          {badge && (
            <span className={getBadgeClasses(badgeVariant)}>
              {badge}
            </span>
          )}
        </div>
      )}

      {/* Content Section */}
      <div className="p-4 flex-1">
        {/* Title */}
        <h3 className={`font-semibold text-dark-900 mb-2 ${variant === 'featured' ? 'text-xl' : 'text-lg'}`}>
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className={`text-dark-700 mb-3 ${variant === 'compact' ? 'text-sm line-clamp-2' : 'text-base line-clamp-3'}`}>
            {description}
          </p>
        )}

        {/* Rating */}
        {rating && (
          <div className="flex items-center mb-3">
            <div className="flex items-center mr-2">
              {renderStars(rating)}
            </div>
            <span className="text-sm text-dark-500">
              {rating.toFixed(1)}
              {reviewCount && ` (${reviewCount} reviews)`}
            </span>
          </div>
        )}

        {/* Price */}
        {price && (
          <div className="flex items-center mb-4">
            <span className={`font-bold text-green ${variant === 'featured' ? 'text-xl' : 'text-lg'}`}>
              {price}
            </span>
            {originalPrice && (
              <span className="text-sm text-dark-500 line-through ml-2">
                {originalPrice}
              </span>
            )}
          </div>
        )}

        {/* Action Button */}
        {(buttonText || onButtonClick) && (
          <button
            onClick={onButtonClick}
            className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
              variant === 'featured'
                ? 'bg-blue text-white hover:bg-blue-dark'
                : 'bg-light-200 text-dark-900 hover:bg-light-300'
            }`}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );

  // If href is provided, wrap in Link
  if (href) {
    return (
      <Link href={href} className="block group">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
}