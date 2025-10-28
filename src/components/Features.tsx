'use client';

import { motion } from 'framer-motion';
import { Star, Shield, Truck, RotateCcw } from 'lucide-react';

const Features = () => {
  return (
    <section className="section-spacing bg-white">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <h2 className="text-display-xl text-charcoal mb-4">
            Why Choose Perféro?
          </h2>
          <p className="text-lead text-muted max-w-2xl mx-auto">
            Experience luxury redefined with our carefully curated collection of premium fragrances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-charcoal" />
            </div>
            <h3 className="text-display-md text-charcoal mb-2">Premium Quality</h3>
            <p className="text-body text-muted">Handpicked ingredients from the finest sources worldwide.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-charcoal" />
            </div>
            <h3 className="text-display-md text-charcoal mb-2">Authentic</h3>
            <p className="text-body text-muted">100% authentic fragrances with certificates of authenticity.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-charcoal" />
            </div>
            <h3 className="text-display-md text-charcoal mb-2">Fast Delivery</h3>
            <p className="text-body text-muted">Free shipping on orders above ₹2,999 with express delivery options.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <RotateCcw className="w-8 h-8 text-charcoal" />
            </div>
            <h3 className="text-display-md text-charcoal mb-2">Easy Returns</h3>
            <p className="text-body text-muted">30-day return policy with hassle-free exchange process.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
