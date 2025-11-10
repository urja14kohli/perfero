import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ReferralUser {
  id: string;
  email: string;
  referralCode: string;
  referralCount: number;
  freePacksEarned: number;
  createdAt: string;
}

export interface ReferralRecord {
  referrerId: string;
  referredEmail: string;
  productId: string;
  purchaseCompleted: boolean;
  purchaseDate?: string;
}

interface ReferralStore {
  users: Map<string, ReferralUser>;
  records: ReferralRecord[];
  createReferralUser: (email: string) => ReferralUser;
  getReferralUser: (email: string) => ReferralUser | undefined;
  getReferralCode: (email: string) => string;
  addReferral: (referrerEmail: string, referredEmail: string, productId: string) => void;
  completeReferralPurchase: (referrerEmail: string, referredEmail: string, productId: string) => void;
  getReferralStats: (email: string) => { count: number; freePacksEarned: number };
}

export const useReferralStore = create<ReferralStore>()(
  persist(
    (set, get) => ({
      users: new Map(),
      records: [],

      createReferralUser: (email: string) => {
        const existing = get().users.get(email);
        if (existing) return existing;

        const referralCode = `PERF${email.split('@')[0].toUpperCase()}${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
        const newUser: ReferralUser = {
          id: `user_${Date.now()}`,
          email,
          referralCode,
          referralCount: 0,
          freePacksEarned: 0,
          createdAt: new Date().toISOString(),
        };

        set((state) => {
          const newUsers = new Map(state.users);
          newUsers.set(email, newUser);
          return { users: newUsers };
        });

        return newUser;
      },

      getReferralUser: (email: string) => {
        return get().users.get(email);
      },

      getReferralCode: (email: string) => {
        const user = get().users.get(email);
        if (!user) {
          return get().createReferralUser(email).referralCode;
        }
        return user.referralCode;
      },

      addReferral: (referrerEmail: string, referredEmail: string, productId: string) => {
        const referrer = get().createReferralUser(referrerEmail);
        
        set((state) => ({
          records: [
            ...state.records,
            {
              referrerId: referrer.id,
              referredEmail,
              productId,
              purchaseCompleted: false,
            },
          ],
        }));
      },

      completeReferralPurchase: (referrerEmail: string, referredEmail: string, productId: string) => {
        const referrer = get().getReferralUser(referrerEmail);
        if (!referrer) return;

        // Mark the referral as completed
        set((state) => ({
          records: state.records.map((record) =>
            record.referrerId === referrer.id &&
            record.referredEmail === referredEmail &&
            record.productId === productId
              ? { ...record, purchaseCompleted: true, purchaseDate: new Date().toISOString() }
              : record
          ),
        }));

        // Update referral count
        const completedReferrals = get().records.filter(
          (r) => r.referrerId === referrer.id && r.purchaseCompleted
        ).length;

        const freePacksEarned = Math.floor(completedReferrals / 5);

        set((state) => {
          const newUsers = new Map(state.users);
          if (newUsers.has(referrerEmail)) {
            const user = newUsers.get(referrerEmail)!;
            newUsers.set(referrerEmail, {
              ...user,
              referralCount: completedReferrals,
              freePacksEarned,
            });
          }
          return { users: newUsers };
        });
      },

      getReferralStats: (email: string) => {
        const user = get().users.get(email);
        if (!user) return { count: 0, freePacksEarned: 0 };

        const completedReferrals = get().records.filter(
          (r) => r.referrerId === user.id && r.purchaseCompleted
        ).length;

        const freePacksEarned = Math.floor(completedReferrals / 5);

        return { count: completedReferrals, freePacksEarned };
      },
    }),
    {
      name: 'perfero-referral',
      partialize: (state) => ({
        users: Array.from(state.users.entries()),
        records: state.records,
      }),
      merge: (persistedState: any, currentState) => {
        if (!persistedState) return currentState;
        return {
          ...currentState,
          users: new Map(persistedState.users),
          records: persistedState.records,
        };
      },
    }
  )
);

