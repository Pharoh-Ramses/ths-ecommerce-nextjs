'use client';

import { useEffect } from 'react';
import { useProductsStore } from '@/store/products';
import Card from '@/components/Card';

export default function Home() {
  const { products, loading, error, fetchProducts } = useProductsStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-dark-700">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-red">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light-100">
      {/* Hero Section */}
      <section className="bg-white border-b border-light-300">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
            Professional Medical Supplies
          </h1>
          <p className="text-xl text-dark-700 max-w-3xl mx-auto mb-8">
            Your trusted partner in healthcare products. We provide essential medical supplies 
            and equipment to healthcare facilities and medical practices worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue text-white rounded-lg hover:bg-blue-dark transition-colors duration-200 font-medium">
              Shop Now
            </button>
            <button className="px-8 py-3 border border-light-400 text-dark-900 rounded-lg hover:bg-light-200 transition-colors duration-200 font-medium">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-dark-700">No products available.</p>
            <p className="text-sm text-dark-500 mt-2">
              Make sure your database is set up and seeded with products.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-dark-900 mb-2">
                Featured Products
              </h2>
              <p className="text-dark-700">
                Discover our top-quality medical equipment and supplies
              </p>
              <p className="text-sm text-dark-500 mt-1">
                Showing {products.length} products
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <Card
                  key={product.id}
                  title={product.name}
                  description={product.description || undefined}
                  image={product.imageUrl || undefined}
                  imageAlt={product.name}
                  price={`$${product.price}`}
                  badge={product.brand || undefined}
                  badgeVariant="secondary"
                  buttonText="Add to Cart"
                  variant={index === 0 ? 'featured' : 'default'}
                  onButtonClick={() => {
                    console.log(`Added ${product.name} to cart`);
                    // TODO: Implement add to cart functionality
                  }}
                  className="h-full"
                />
              ))}
            </div>
          </>
        )}

        {/* Categories Section */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-dark-900 mb-2">
              Shop by Category
            </h2>
            <p className="text-dark-700">
              Find the medical supplies you need by category
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Diagnostic Equipment',
                description: 'Blood pressure monitors, stethoscopes, thermometers',
                image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=500&fit=crop',
                href: '/categories/diagnostic'
              },
              {
                name: 'Emergency Supplies',
                description: 'First aid kits, emergency medical supplies',
                image: 'https://images.unsplash.com/photo-1603398938311-5ac4635d5662?w=500&h=500&fit=crop',
                href: '/categories/emergency'
              },
              {
                name: 'Mobility Aids',
                description: 'Wheelchair accessories, mobility equipment',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=500&fit=crop',
                href: '/categories/mobility'
              },
              {
                name: 'Diabetes Care',
                description: 'Glucose testing supplies, diabetic care products',
                image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=500&fit=crop',
                href: '/categories/diabetes'
              }
            ].map((category) => (
              <Card
                key={category.name}
                title={category.name}
                description={category.description}
                image={category.image}
                imageAlt={category.name}
                href={category.href}
                variant="compact"
                className="h-full"
              />
            ))}
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="mt-16 bg-white rounded-lg p-8 border border-light-300">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-dark-900 mb-2">
              Why Choose Total Health Supply?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-dark-900 mb-2">FDA Registered</h3>
              <p className="text-dark-700">All products meet FDA standards and regulations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-dark-900 mb-2">Fast Delivery</h3>
              <p className="text-dark-700">Quick and reliable shipping nationwide</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-dark-900 mb-2">Expert Support</h3>
              <p className="text-dark-700">Professional customer service and technical support</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
