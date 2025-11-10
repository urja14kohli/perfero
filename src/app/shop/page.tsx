'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { products, getProductsByCategory } from '@/lib/products';
import { Filter, Grid, List } from 'lucide-react';
import Link from 'next/link';
import ReferralWidget from '@/components/ReferralWidget';

function ShopContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'single' | 'gift-pack'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price-low' | 'price-high'>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showFilters, setShowFilters] = useState(false);

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
        <div className="max-w-[1100px] mx-auto text-center py-12 sm:py-16 px-4 sm:px-6">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal">Shop <span className="text-gold">Perféro</span></h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted max-w-2xl mx-auto">
            Discover our complete collection of seven fragrances - from single bottles to our signature gift set.
          </p>
        </div>
      </section>

      <div className="container-luxury py-8 sm:py-12 lg:py-20">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full btn-secondary flex items-center justify-center gap-2"
          >
            <Filter size={18} />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
          {/* Sidebar Filters */}
          <div className={`lg:w-80 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="lg:sticky lg:top-24 space-y-6 sm:space-y-8">
              {/* Category Filter */}
              <div className="bg-alabaster rounded-2xl p-4 sm:p-6">
                <h3 className="font-display text-lg sm:text-xl text-charcoal mb-4 sm:mb-6 uppercase tracking-wide">
                  Categories
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id as any);
                        setShowFilters(false);
                      }}
                      className={`w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl transition-all duration-200 text-sm sm:text-base ${
                        selectedCategory === category.id
                          ? 'bg-gold/90 text-charcoal font-semibold'
                          : 'text-muted hover:bg-white hover:text-charcoal'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-[10px] sm:text-xs bg-white/60 px-2 py-1 rounded-full text-muted">
                          {category.count}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort Options */}
              <div className="bg-alabaster rounded-2xl p-4 sm:p-6">
                <h3 className="font-display text-lg sm:text-xl text-charcoal mb-4 sm:mb-6 uppercase tracking-wide">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-line rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white text-charcoal text-sm sm:text-base"
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="price-low">Price (Low to High)</option>
                  <option value="price-high">Price (High to Low)</option>
                </select>
              </div>

              {/* View Mode Toggle - Hidden on Mobile */}
              <div className="hidden sm:block bg-alabaster rounded-2xl p-4 sm:p-6">
                <h3 className="font-display text-lg sm:text-xl text-charcoal mb-4 sm:mb-6 uppercase tracking-wide">View</h3>
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
            <div className="flex justify-between items-center mb-6 sm:mb-8">
              <div>
                <h2 className="font-display text-xl sm:text-2xl text-charcoal">
                  {categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <p className="text-muted mt-1 text-sm sm:text-base">
                  {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                </p>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className={`grid gap-4 sm:gap-6 lg:gap-8 ${
                viewMode === 'grid'
                  ? 'grid-cols-1 sm:grid-cols-2'
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 sm:py-16">
                <div className="text-muted mb-4 sm:mb-6 mx-auto w-12 h-12 sm:w-16 sm:h-16">
                  <Filter size={48} className="mx-auto" />
                </div>
                <h3 className="font-display text-lg sm:text-xl text-charcoal mb-2 sm:mb-3">
                  No products found
                </h3>
                <p className="text-muted text-sm sm:text-base">
                  Try adjusting your filters to see more products
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Featured Gift Pack Section */}
      {selectedCategory === 'all' && (
        <section className="bg-[radial-gradient(1200px_600px_at_50%_0,#F6F1E6,transparent)] py-12 sm:py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal">Featured Gift Pack</h2>
              <p className="mt-2 sm:mt-3 text-base sm:text-lg text-muted">Our signature 7-fragrance collection in one beautiful package.</p>
            </div>
            
            {(() => {
              const giftPack = products.find(p => p.category === 'gift-pack');
              if (!giftPack) return null;
              
              return (
                <div className="bg-white border border-line rounded-2xl shadow-card p-6 sm:p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Image */}
                    <div className="flex justify-center">
                      <img 
                        src={giftPack.images[0]} 
                        alt={giftPack.name}
                        className="w-full h-auto rounded-lg object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-display text-2xl sm:text-3xl text-charcoal mb-3">
                          {giftPack.name}
                        </h3>
                        <p className="text-muted text-base sm:text-lg leading-relaxed mb-6">
                          {giftPack.description}
                        </p>
                      </div>
                      
                      {/* Pricing */}
                      <div className="flex items-baseline gap-3">
                        <span className="text-3xl font-semibold text-gold">
                          ₹{giftPack.salePrice}
                        </span>
                        <span className="text-lg text-muted line-through">
                          ₹{giftPack.price}
                        </span>
                      </div>
                      
                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link href={`/shop/${giftPack.id}`} className="btn-primary w-full sm:w-auto text-center">
                          View Details
                        </Link>
                        <button className="btn-outline w-full sm:w-auto">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>
      )}

      {/* Referral Program Section */}
      <section id="referral" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gold/5 to-white border-t-2 border-gold">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="font-display text-4xl sm:text-5xl text-center text-charcoal mb-4">
              Earn Free Gift Packs
            </h2>
            <p className="text-center text-lg text-charcoal/70 max-w-2xl mx-auto">
              Refer 5 friends who buy our Gift Pack and get 1 completely FREE!
            </p>
          </div>
          <ReferralWidget />
        </div>
      </section>
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
