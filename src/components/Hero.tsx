'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Shield, Truck, RotateCcw } from 'lucide-react';
import ImageStage from '@/components/ImageStage';

const Hero = () => {
  return (
    <section className="relative bg-ivory overflow-hidden noise-overlay">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,#F6F1E6,transparent)] opacity-60"></div>
      
      <div className="container-luxury section-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <h1 className="font-display text-4xl md:text-display-xl leading-tight text-charcoal">
                Seven <span className="text-gradient-gold">Scents</span><br/>One Perfect Gift
              </h1>
              
              <p className="lead text-muted max-w-xl">
                Great fragrances that feel real, not out of reach. Find your favorite scent at a price that makes sense.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Star size={16} className="text-gold fill-current" />
                <span className="small text-muted">Great Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">🇮🇳</span>
                <span className="small text-muted">Made in India</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">🎁</span>
                <span className="small text-muted">Beautiful Packaging</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">₹</span>
                <span className="small text-muted">Smart Pricing</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/shop" className="btn-primary">
                Shop the Gift Pack
              </Link>
              <Link href="/shop?category=single" className="btn-secondary">
                Explore Singles
              </Link>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              <ImageStage
                src="/images/gift-pack/pack front.jpeg"
                alt="Perféro Gift Set"
                maskEdges={true}
                className="shadow-card"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-charcoal text-ivory text-sm px-4 py-2 rounded-full shadow-card">
                <span className="font-semibold">₹799</span>
                <span className="text-xs line-through opacity-70 ml-2">₹1,077</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
