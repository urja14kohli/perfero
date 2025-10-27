'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { products, getProductsByCategory } from '@/lib/products';
import { Filter, Grid, List } from 'lucide-react';

function ShopContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'single' | 'gift-pack'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price-low' | 'price-high'>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    // Get category from URL params
    const category = searchParams.get('category') as 'single' | 'gift-pack' | null;
    if (category && ['single', 'gift-pack'].includes(category)) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  useEffect(() => {
    // Filter products by category
    let filtered = getProductsByCategory(selectedCategory);

    // Sort products
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.salePrice - b.salePrice;
        case 'price-high':
          return b.salePrice - a.salePrice;
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
  }, [selectedCategory, sortBy]);

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'single', name: 'Single Bottles', count: products.filter(p => p.category === 'single').length },
    { id: 'gift-pack', name: 'Gift Sets', count: products.filter(p => p.category === 'gift-pack').length },
  ];

  return (
    <div className="bg-ivory">
      {/* Header */}
      <section className="relative bg-[radial-gradient(1000px_500px_at_50%_0,#F6F1E6,transparent)] border-b border-line">
        <div className="max-w-[1100px] mx-auto text-center py-16 px-6">
          <h1 className="font-display text-5xl md:text-6xl text-charcoal">Shop <span className="text-gold">PERFÉRO</span></h1>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Discover our complete collection of seven fragrances - from single bottles to our signature gift set.
          </p>
        </div>
      </section>

      <div className="container-luxury py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category Filter */}
              <div className="bg-alabaster rounded-2xl p-6">
                <h3 className="font-display text-xl text-charcoal mb-6 uppercase tracking-wide">
                  Categories
                </h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id as any)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-gold/90 text-charcoal font-semibold'
                          : 'text-muted hover:bg-white hover:text-charcoal'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-xs bg-white/60 px-2 py-1 rounded-full text-muted">
                          {category.count}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort Options */}
              <div className="bg-alabaster rounded-2xl p-6">
                <h3 className="font-display text-xl text-charcoal mb-6 uppercase tracking-wide">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full px-4 py-3 border border-line rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white text-charcoal"
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="price-low">Price (Low to High)</option>
                  <option value="price-high">Price (High to Low)</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="bg-alabaster rounded-2xl p-6">
                <h3 className="font-display text-xl text-charcoal mb-6 uppercase tracking-wide">View</h3>
                <div className="flex border border-line rounded-xl overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`flex-1 px-4 py-3 flex items-center justify-center transition-colors duration-200 ${
                      viewMode === 'grid'
                        ? 'bg-gold text-charcoal'
                        : 'text-muted hover:bg-white hover:text-charcoal'
                    }`}
                  >
                    <Grid size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`flex-1 px-4 py-3 flex items-center justify-center transition-colors duration-200 ${
                      viewMode === 'list'
                        ? 'bg-gold text-charcoal'
                        : 'text-muted hover:bg-white hover:text-charcoal'
                    }`}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="font-display text-2xl text-charcoal">
                  {categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <p className="text-muted mt-1">
                  {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                </p>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className={`grid gap-8 ${
                viewMode === 'grid'
                  ? 'grid-cols-1 sm:grid-cols-2'
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-muted mb-6">
                  <Filter size={48} />
                </div>
                <h3 className="font-display text-xl text-charcoal mb-3">
                  No products found
                </h3>
                <p className="text-muted">
                  Try adjusting your filters to see more products
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Featured Gift Pack Section */}
      {selectedCategory === 'all' && (
        <section className="bg-[radial-gradient(1200px_600px_at_50%_0,#F6F1E6,transparent)] py-24">
          <div className="max-w-[800px] mx-auto text-center px-6">
            <h2 className="font-display text-5xl text-charcoal">Featured Gift Pack</h2>
            <p className="mt-3 text-lg text-muted">Our signature 7-fragrance collection in one beautiful package.</p>
            <div className="mt-10 bg-white border border-line rounded-2xl shadow-card p-8 inline-block">
              <ProductCard 
                product={products.find(p => p.category === 'gift-pack')!} 
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default function Shop() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center">Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}
