'use client';

import { useEffect } from 'react';
import { useProductsStore } from '@/store/products';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  const { products, loading, error, fetchProducts } = useProductsStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">THS Medical Store</h1>
          <p className="text-gray-600 mt-2">Your trusted partner in healthcare products</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No products available.</p>
            <p className="text-sm text-gray-500 mt-2">
              Make sure your database is set up and seeded with products.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800">
                Featured Products
              </h2>
              <p className="text-gray-600 mt-1">
                Showing {products.length} products
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 THS Medical Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
