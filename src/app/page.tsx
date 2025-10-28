import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import Features from '@/components/Features';
import GiftPackHighlight from '@/components/GiftPackHighlight';
import { getFeaturedProducts, getGiftPack } from '@/lib/products';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const giftPack = getGiftPack();

  return (
    <div className="bg-ivory">
      {/* Hero Section */}
      <Hero />

      {/* Featured Products Section */}
      <section className="section-spacing bg-white">
        <div className="container-luxury">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-display-lg text-charcoal mb-4 sm:mb-6">
              Featured Collection
            </h2>
            <p className="lead text-muted max-w-2xl mx-auto px-4">
              Meet our 7 must-have scents, each one perfect in its own way
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10 lg:mt-12">
            <Link href="/shop" className="btn-secondary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Gift Pack Highlight Section */}
      {giftPack && <GiftPackHighlight giftPack={giftPack} />}

      {/* Features Section */}
      <Features />

      {/* Newsletter Signup */}
      <section className="section-spacing bg-alabaster">
        <div className="container-luxury">
          <div className="max-w-2xl mx-auto text-center px-4">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-display-lg text-charcoal mb-4 sm:mb-6">
              Stay in the Loop
            </h2>
            <p className="lead text-muted mb-6 sm:mb-8">
              Get sweet deals, new scent drops, and tips to find your perfect fragrance
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2.5 sm:py-3 border border-line rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white text-sm sm:text-base"
              />
              <button className="btn-primary px-6 sm:px-8 py-2.5 sm:py-3 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="small text-muted mt-3 sm:mt-4 text-xs sm:text-sm">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}