'use client';

import { Gift, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ReferralBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gold/20 via-gold/10 to-transparent border-2 border-gold rounded-3xl p-8 sm:p-12 lg:p-16">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      
      <div className="relative z-10 max-w-2xl">
        <div className="flex items-start gap-4 sm:gap-6">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-gold/90">
              <Gift size={32} className="text-charcoal" />
            </div>
          </div>
          
          <div className="flex-1">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-3 leading-tight">
              Refer Friends & Earn <span className="text-gold">Free Gift Packs</span>
            </h2>
            
            <p className="text-base sm:text-lg text-charcoal/80 mb-6 leading-relaxed">
              Every 5 friends who buy using your code = 1 FREE Perféro Gift Pack (₹799 value!). 
              There's no limit - keep referring, keep earning! 🎁
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/shop#referral"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-charcoal text-gold rounded-full font-semibold hover:bg-charcoal/90 transition-all text-center"
              >
                Get Your Referral Code
                <ArrowRight size={20} />
              </Link>
              
              <div className="inline-flex items-center justify-center px-6 py-4 bg-white/50 rounded-full border-2 border-gold font-semibold text-charcoal">
                ✨ 5 Referrals = 1 Free Pack ✨
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-gold">∞</p>
                <p className="text-xs sm:text-sm text-charcoal/70">Unlimited Earnings</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-gold">5</p>
                <p className="text-xs sm:text-sm text-charcoal/70">Referrals per Pack</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-gold">₹799</p>
                <p className="text-xs sm:text-sm text-charcoal/70">Free Value</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


