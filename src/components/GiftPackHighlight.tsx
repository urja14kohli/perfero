'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { Product } from '@/lib/products';
import ImageStage from '@/components/ImageStage';

interface GiftPackHighlightProps {
  giftPack: Product;
}

const GiftPackHighlight = ({ giftPack }: GiftPackHighlightProps) => {
  return (
    <section className="section-spacing bg-cream">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="font-display text-display-lg text-charcoal mb-6">
                The Perfect Gift
              </h2>
              <p className="lead text-muted mb-6">
                All 7 amazing scents in one beautiful box. Try them all, pick your favorite, 
                or gift it to someone special.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                  <Star size={16} className="text-charcoal" />
                </div>
                <span className="body text-muted">7 different fragrances</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                  <Star size={16} className="text-charcoal" />
                </div>
                <span className="body text-muted">Beautiful box</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                  <Star size={16} className="text-charcoal" />
                </div>
                <span className="body text-muted">Perfect gift idea</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/shop/${giftPack.id}`} className="btn-primary">
                Shop Gift Pack
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative max-w-md mx-auto">
              <ImageStage
                src={giftPack.images[0]}
                alt={giftPack.name}
                maskEdges={true}
                className="shadow-card"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold text-charcoal px-6 py-3 rounded-full text-lg font-semibold shadow-card">
              Only ₹1,077
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GiftPackHighlight;
