'use client';

import { useState } from 'react';
import { useReferralStore } from '@/lib/referral';
import { Share2, Copy, Check, Gift } from 'lucide-react';

export default function ReferralWidget() {
  const [email, setEmail] = useState('');
  const [showWidget, setShowWidget] = useState(false);
  const [copied, setCopied] = useState(false);
  const { createReferralUser, getReferralCode, getReferralStats } = useReferralStore();

  const handleShowReferral = () => {
    if (email.trim()) {
      createReferralUser(email);
      setShowWidget(true);
    }
  };

  const referralCode = email ? getReferralCode(email) : '';
  const stats = email ? getReferralStats(email) : { count: 0, freePacksEarned: 0 };

  const referralLink = `https://perferofragrance.com/shop?ref=${referralCode}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareMessage = () => {
    const message = `Hey! I'm getting amazing fragrances from Perféro! 🎁\n\nUse my referral code: ${referralCode}\n\nFor every 5 purchases made using my code, I earn a FREE Perféro Gift Pack! Join me and let's both enjoy great scents 💜\n\n${referralLink}`;
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Referral Signup */}
      {!showWidget ? (
        <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-8 border border-gold/20">
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-4">
              <Gift size={24} className="text-gold" />
              <h3 className="font-display text-xl text-charcoal">
                Earn Free Gift Packs!
              </h3>
            </div>
            <p className="text-muted text-sm mb-4">
              Refer 5 people who buy our Gift Pack and get 1 free! It's that simple 🎁
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 border border-line rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm"
              />
              <button
                onClick={handleShowReferral}
                className="btn-primary px-6 py-2 text-center whitespace-nowrap"
              >
                Get Code
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-line p-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Gift size={24} className="text-gold" />
              <h3 className="font-display text-xl text-charcoal">
                Your Referral Program
              </h3>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-alabaster rounded-xl p-4">
                <p className="text-sm text-muted mb-1">Referrals Completed</p>
                <p className="font-display text-2xl text-charcoal">{stats.count}/5</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-gold h-2 rounded-full transition-all"
                    style={{ width: `${(stats.count / 5) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                <p className="text-sm text-green-600 font-medium mb-1">Free Packs Earned</p>
                <p className="font-display text-2xl text-green-700">{stats.freePacksEarned}</p>
                <p className="text-xs text-green-600 mt-2">
                  {stats.count === 5 ? 'Ready to claim! 🎉' : `${5 - stats.count} more to go`}
                </p>
              </div>
            </div>

            {/* Referral Code */}
            <div className="mb-6">
              <p className="text-sm font-medium text-charcoal mb-2">Your Referral Code</p>
              <div className="flex gap-2">
                <div className="flex-1 bg-alabaster px-4 py-3 rounded-xl border border-line font-mono text-charcoal font-semibold">
                  {referralCode}
                </div>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-2 px-4 py-3 bg-gold text-charcoal rounded-xl hover:bg-gold/90 transition-colors font-medium"
                >
                  {copied ? (
                    <>
                      <Check size={18} />
                      <span className="hidden sm:inline">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={18} />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Share Message */}
            <div className="mb-6">
              <p className="text-sm font-medium text-charcoal mb-2">Share Your Link</p>
              <button
                onClick={handleShareMessage}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-line rounded-xl hover:bg-alabaster transition-colors font-medium text-charcoal"
              >
                <Share2 size={18} />
                Copy Share Message
              </button>
              <p className="text-xs text-muted mt-2 text-center">
                Share the message with your friends on WhatsApp, Instagram, or email!
              </p>
            </div>

            {/* How It Works */}
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
              <p className="text-sm font-medium text-blue-900 mb-2">How It Works</p>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>✓ Share your referral code with friends</li>
                <li>✓ They buy the Gift Pack using your code</li>
                <li>✓ When 5 people buy, you get 1 FREE Gift Pack!</li>
                <li>✓ There's no limit - keep referring for more free packs</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

