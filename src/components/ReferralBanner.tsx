'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ReferralBanner() {
  return (
    <div className="relative overflow-hidden bg-white border border-line rounded-2xl p-8 sm:p-10 lg:p-14">
      {/* Subtle background gradient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/3 rounded-full blur-3xl -mr-32 -mt-32"></div>
      
      <div className="relative z-10">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-3">
            Refer Friends & Earn <span className="text-gold">Free Gift Packs</span>
          </h2>
          
          <p className="text-base sm:text-lg text-charcoal/70 mb-8">
            Every 5 friends who buy using your code = 1 FREE Perféro Gift Pack (₹799 value). Unlimited earning potential.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link 
              href="/shop#referral"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-charcoal text-white rounded-lg font-semibold hover:bg-charcoal/90 transition-all text-center"
            >
              Get Your Referral Code
              <ArrowRight size={18} />
            </Link>
            
            <div className="inline-flex items-center justify-center px-6 py-3.5 bg-gold/10 rounded-lg border border-gold/30 font-semibold text-charcoal">
              5 Referrals = 1 Free Pack
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-lg font-semibold text-gold mb-1">Unlimited</p>
              <p className="text-xs sm:text-sm text-charcoal/60">Earnings Potential</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gold mb-1">5</p>
              <p className="text-xs sm:text-sm text-charcoal/60">Per Gift Pack</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gold mb-1">₹799</p>
              <p className="text-xs sm:text-sm text-charcoal/60">Value per Pack</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


