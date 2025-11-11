'use client';

import { useState } from 'react';
import { Copy, Check, Share2 } from 'lucide-react';

export default function ReferralWidget() {
  const [email, setEmail] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({ completed_referrals: 0, free_packs_earned: 0 });

  const handleGenerateCode = async () => {
    if (!email.trim()) return;

    setLoading(true);
    try {
      console.log('🔄 Calling API to generate referral code for:', email);
      const response = await fetch('/api/referrals/code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();
      console.log('✅ API Response:', data);

      if (data.referralCode) {
        setReferralCode(data.referralCode);
        if (data.stats) {
          setStats(data.stats);
        }
      } else {
        console.error('❌ No referral code in response');
      }
    } catch (error) {
      console.error('❌ Error generating code:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    const shareMessage = `Hey! Check out Perféro fragrances! Use my referral code ${referralCode} to get amazing scents. Shop now: https://perferofragrance.com/shop?ref=${referralCode}`;

    if (navigator.share) {
      try {
        await navigator.share({ text: shareMessage });
      } catch (error) {
        console.log('Share cancelled');
      }
    } else {
      navigator.clipboard.writeText(shareMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-6">
      {!referralCode ? (
        // Email Input Section
        <div className="bg-white rounded-2xl border border-line p-8">
          <div className="max-w-md">
            <h3 className="font-display text-2xl text-charcoal mb-4">
              Get Your Referral Code
            </h3>
            <p className="text-muted text-sm mb-6">
              Enter your email to generate your unique referral code. Start earning free gift packs today!
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleGenerateCode()}
                disabled={loading}
                className="flex-1 px-4 py-3 border border-line rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent text-sm disabled:opacity-50"
              />
              <button
                onClick={handleGenerateCode}
                disabled={loading || !email.trim()}
                className="btn-primary px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {loading ? 'Loading...' : 'Generate Code'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Code Display & Share Section
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl border border-gold/20 p-8">
            <h3 className="font-display text-2xl text-charcoal mb-6">
              Your Referral Code
            </h3>

            {/* Code Display */}
            <div className="bg-white border border-gold rounded-xl p-4 mb-6">
              <p className="text-xs text-muted mb-1">Your unique code:</p>
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-3xl font-bold text-gold">{referralCode}</span>
                <button
                  onClick={handleCopyCode}
                  className="p-3 bg-gold text-charcoal rounded-lg hover:bg-gold/90 transition-colors"
                >
                  {copied ? <Check size={20} /> : <Copy size={20} />}
                </button>
              </div>
            </div>

            {/* Share Link */}
            <div className="bg-white rounded-xl p-4 mb-6">
              <p className="text-xs text-muted mb-2">Share this link with friends:</p>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={`https://perferofragrance.com/shop?ref=${referralCode}`}
                  readOnly
                  className="flex-1 px-3 py-2 border border-line rounded-lg text-xs bg-gray-50"
                />
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(`https://perferofragrance.com/shop?ref=${referralCode}`);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="p-2 bg-gold text-charcoal rounded-lg hover:bg-gold/90"
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
            </div>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className="w-full btn-secondary flex items-center justify-center gap-2 mb-6"
            >
              <Share2 size={18} />
              Share With Friends
            </button>

            {/* Stats */}
            <div className="bg-alabaster rounded-xl p-4">
              <h4 className="font-semibold text-charcoal mb-3">Your Progress</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted">Referrals:</span>
                  <span className="font-semibold text-charcoal">{stats.completed_referrals || 0} / 5</span>
                </div>
                <div className="w-full bg-line rounded-full h-2">
                  <div
                    className="bg-gold h-2 rounded-full transition-all"
                    style={{ width: `${((stats.completed_referrals || 0) / 5) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-muted mt-2">
                  Free packs earned: <span className="font-semibold text-gold">{stats.free_packs_earned || 0}</span>
                </p>
              </div>
            </div>

            {/* Reset Button */}
            <button
              onClick={() => {
                setReferralCode('');
                setEmail('');
                setStats({ completed_referrals: 0, free_packs_earned: 0 });
              }}
              className="w-full mt-6 px-4 py-2 text-sm text-muted hover:text-gold transition-colors border border-line rounded-xl"
            >
              Use Different Email
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
