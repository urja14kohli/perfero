'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Shield, Truck, RotateCcw } from 'lucide-react';
import { getGiftPack } from '@/lib/products';

const Hero = () => {
  const giftPack = getGiftPack();

  return (
    <section className="relative bg-ivory overflow-hidden noise-overlay">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,#F6F1E6,transparent)] opacity-60"></div>
      
      <div className="container-luxury section-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="space-y-4 sm:space-y-6">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-display-xl leading-tight text-charcoal">
                Seven <span className="text-gradient-gold">Scents</span><br/>One Perfect Gift
              </h1>
              
              <p className="lead text-muted max-w-xl">
                Great fragrances that feel real, not out of reach. Find your favorite scent at a price that makes sense.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <Star size={14} className="text-gold fill-current sm:w-4 sm:h-4" />
                <span className="small text-muted">Great Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm">🇮🇳</span>
                <span className="small text-muted">Made in India</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm">🎁</span>
                <span className="small text-muted">Beautiful Packaging</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm">₹</span>
                <span className="small text-muted">Smart Pricing</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/shop" className="btn-primary w-full sm:w-auto text-center">
                Shop the Gift Pack
              </Link>
              <Link href="#referral" className="btn-secondary w-full sm:w-auto text-center">
                Refer & Earn
              </Link>
            </div>
          </motion.div>

          {/* Hero Image */}
          {giftPack && (
            <motion.div 
              className="relative order-1 lg:order-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-square max-w-md mx-auto">
                <Image
                  src={giftPack.images[0]}
                  alt={giftPack.name}
                  fill
                  className="object-cover rounded-lg shadow-card"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold text-charcoal px-6 py-3 rounded-full text-lg font-semibold shadow-card">
                Sale upto {Math.round(((giftPack.price - giftPack.salePrice) / giftPack.price) * 100)}%
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
