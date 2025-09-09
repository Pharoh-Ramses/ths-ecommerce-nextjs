'use client';

import { Product } from '@/lib/db/schema';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={product.imageUrl || '/placeholder-product.jpg'}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">{product.brand}</span>
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        <h3 className="font-semibold text-lg mb-2 text-gray-900">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
          <div className="text-sm text-gray-500">
            Stock: {product.stock}
          </div>
        </div>
        <button className="w-full mt-3 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
}