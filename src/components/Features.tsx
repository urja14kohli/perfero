'use client';

import { motion } from 'framer-motion';
import { Star, Shield, Truck, RotateCcw } from 'lucide-react';

const Features = () => {
  return (
    <section className="section-spacing bg-white">
      <div className="container-luxury">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-display-xl text-charcoal mb-3 sm:mb-4">
            Why Choose Perféro?
          </h2>
          <p className="text-lead text-muted max-w-2xl mx-auto">
            Experience luxury redefined with our carefully curated collection of premium fragrances.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Star className="w-6 h-6 sm:w-8 sm:h-8 text-charcoal" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-display-md text-charcoal mb-2">Premium Quality</h3>
            <p className="text-body text-muted text-sm sm:text-base">Handpicked ingredients from the finest sources worldwide.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-charcoal" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-display-md text-charcoal mb-2">Authentic</h3>
            <p className="text-body text-muted text-sm sm:text-base">100% authentic fragrances with certificates of authenticity.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-charcoal" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-display-md text-charcoal mb-2">Fast Delivery</h3>
            <p className="text-body text-muted text-sm sm:text-base">Free shipping on orders above ₹2,999 with express delivery options.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <RotateCcw className="w-6 h-6 sm:w-8 sm:h-8 text-charcoal" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-display-md text-charcoal mb-2">Easy Returns</h3>
            <p className="text-body text-muted text-sm sm:text-base">30-day return policy with hassle-free exchange process.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
