import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Referral related types
export interface ReferralRecord {
  id?: string;
  referrer_email: string;
  referral_code: string;
  buyer_email: string;
  product_id: string;
  amount: number;
  purchase_date: string;
  status: 'pending' | 'completed' | 'cancelled';
  created_at?: string;
}

export interface ReferrerStats {
  referrer_email: string;
  referral_code: string;
  total_referrals: number;
  completed_referrals: number;
  free_packs_earned: number;
  created_at?: string;
}

// Database operations
export const referralDB = {
  // Create or get referral code for user
  async getOrCreateReferralCode(email: string): Promise<string> {
    try {
      // Check if user already has a code
      const { data: existing } = await supabase
        .from('referral_codes')
        .select('referral_code')
        .eq('referrer_email', email.toLowerCase())
        .single();

      if (existing) {
        return existing.referral_code;
      }

      // Generate new code
      const code = Math.random().toString(36).substring(2, 8).toUpperCase();

      // Save to database
      const { data, error } = await supabase
        .from('referral_codes')
        .insert([
          {
            referrer_email: email.toLowerCase(),
            referral_code: code,
          },
        ])
        .select()
        .single();

      if (error) throw error;
      return data.referral_code;
    } catch (error) {
      console.error('Error creating referral code:', error);
      throw error;
    }
  },

  // Track a referral purchase
  async trackReferral(
    referralCode: string,
    buyerEmail: string,
    productId: string,
    amount: number
  ): Promise<boolean> {
    try {
      // Find referrer by code
      const { data: referrerData } = await supabase
        .from('referral_codes')
        .select('referrer_email')
        .eq('referral_code', referralCode)
        .single();

      if (!referrerData) {
        console.error('Invalid referral code:', referralCode);
        return false;
      }

      // Record the purchase
      const { error } = await supabase.from('referral_records').insert([
        {
          referrer_email: referrerData.referrer_email,
          referral_code: referralCode,
          buyer_email: buyerEmail.toLowerCase(),
          product_id: productId,
          amount,
          purchase_date: new Date().toISOString(),
          status: 'completed',
        },
      ]);

      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error tracking referral:', error);
      return false;
    }
  },

  // Get referrer stats
  async getReferrerStats(email: string): Promise<ReferrerStats | null> {
    try {
      const { data: codeData } = await supabase
        .from('referral_codes')
        .select('referral_code')
        .eq('referrer_email', email.toLowerCase())
        .single();

      if (!codeData) {
        return null;
      }

      const { data: records } = await supabase
        .from('referral_records')
        .select('*')
        .eq('referrer_email', email.toLowerCase())
        .eq('status', 'completed');

      const completedCount = records?.length || 0;
      const freePacksEarned = Math.floor(completedCount / 5);

      return {
        referrer_email: email.toLowerCase(),
        referral_code: codeData.referral_code,
        total_referrals: completedCount,
        completed_referrals: completedCount,
        free_packs_earned: freePacksEarned,
      };
    } catch (error) {
      console.error('Error getting referrer stats:', error);
      return null;
    }
  },

  // Check if someone was referred by a code
  async getReferrerByCode(code: string): Promise<string | null> {
    try {
      const { data } = await supabase
        .from('referral_codes')
        .select('referrer_email')
        .eq('referral_code', code)
        .single();

      return data?.referrer_email || null;
    } catch (error) {
      console.error('Error getting referrer by code:', error);
      return null;
    }
  },
};

