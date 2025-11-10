'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Product } from '@/lib/products';

interface GiftPackHighlightProps {
  giftPack: Product;
}

const GiftPackHighlight = ({ giftPack }: GiftPackHighlightProps) => {
  return (
    <section className="section-spacing bg-cream">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div 
            className="space-y-5 sm:space-y-6 order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-display-lg text-charcoal mb-4 sm:mb-6">
                The Perfect Gift
              </h2>
              <p className="lead text-muted mb-4 sm:mb-6">
                All 7 amazing scents in one beautiful box. Try them all, pick your favorite, 
                or gift it to someone special.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Star size={14} className="text-charcoal sm:w-4 sm:h-4" />
                </div>
                <span className="body text-muted">7 different fragrances</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Star size={14} className="text-charcoal sm:w-4 sm:h-4" />
                </div>
                <span className="body text-muted">Beautiful box</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Star size={14} className="text-charcoal sm:w-4 sm:h-4" />
                </div>
                <span className="body text-muted">Perfect gift idea</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href={`/shop/${giftPack.id}`} className="btn-primary w-full sm:w-auto text-center">
                Shop Gift Pack
              </Link>
              <Link href="/about" className="btn-secondary w-full sm:w-auto text-center">
                Learn More
              </Link>
            </div>
          </motion.div>

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
            <div className="absolute -bottom-6 -right-2 bg-gold text-charcoal px-6 py-3 rounded-full text-lg font-semibold shadow-card">
                <div className="text-center">
                <div className="font-semibold">₹{giftPack.salePrice}</div>
                <div className="text-[10px] sm:text-xs line-through opacity-70">₹{giftPack.price}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GiftPackHighlight;
