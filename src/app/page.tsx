'use client';

import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import Features from '@/components/Features';
import GiftPackHighlight from '@/components/GiftPackHighlight';
import ReferralBanner from '@/components/ReferralBanner';
import { getFeaturedProducts, getGiftPack } from '@/lib/products';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const giftPack = getGiftPack();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Here you can add actual email subscription logic
      // For now, we'll just show a success message
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="bg-ivory">
      {/* Hero Section */}
      <Hero />

      {/* Featured Products Section */}
      <section className="section-spacing bg-white dark:bg-slate-900 transition-colors">
        <div className="container-luxury">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-display-lg text-charcoal dark:text-ivory mb-4 sm:mb-6">
              Featured Collection
            </h2>
            <p className="lead text-muted dark:text-slate-300 max-w-2xl mx-auto px-4">
              Meet our 7 must-have scents, each one perfect in its own way
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {featuredProducts.slice(0, 4).map((product) => (
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

      {/* Referral Program Banner */}
      <section className="section-spacing bg-white dark:bg-slate-900 transition-colors">
        <div className="container-luxury">
          <ReferralBanner />
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Newsletter Signup */}
      <section className="section-spacing bg-alabaster dark:bg-slate-800 transition-colors">
        <div className="container-luxury">
          <div className="max-w-2xl mx-auto text-center px-4">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-display-lg text-charcoal dark:text-ivory mb-4 sm:mb-6">
              Stay in the Loop
            </h2>
            <p className="lead text-muted dark:text-slate-300 mb-6 sm:mb-8">
              Get sweet deals, new scent drops, and tips to find your perfect fragrance
            </p>
            
            {subscribed && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm">
                Thanks for subscribing! Check your email for exclusive offers.
              </div>
            )}
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2.5 sm:py-3 border border-line dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent bg-white dark:bg-slate-700 text-charcoal dark:text-ivory text-sm sm:text-base placeholder:dark:text-slate-400"
                required
              />
              <button type="submit" className="btn-primary px-6 sm:px-8 py-2.5 sm:py-3 whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="small text-muted mt-3 sm:mt-4 text-xs sm:text-sm">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}