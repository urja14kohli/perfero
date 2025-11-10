import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from './products';

export interface CartItem {
  product: Product;
  quantity: number;
}

// Utility function to calculate item price with 1+1 offer
export const getItemPrice = (product: Product, quantity: number): number => {
  if (!product.offer?.isActive) {
    return product.salePrice * quantity;
  }

  const pairs = Math.floor(quantity / 2);
  const remainder = quantity % 2;
  
  const pairsPrice = pairs * product.offer.offerPrice;
  const remainderPrice = remainder * product.salePrice;
  
  return pairsPrice + remainderPrice;
};

// Get offer savings for an item
export const getOfferSavings = (product: Product, quantity: number): number => {
  if (!product.offer?.isActive) {
    return 0;
  }

  const normalPrice = product.salePrice * quantity;
  const offerPrice = getItemPrice(product, quantity);
  
  return normalPrice - offerPrice;
};

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getItemQuantity: (productId: string) => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product: Product, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.product.id === product.id
          );

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }

          return {
            items: [...state.items, { product, quantity }],
          };
        });
      },

      removeItem: (productId: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        }));
      },

      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId
              ? { ...item, quantity }
              : item
          ),
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      toggleCart: () => {
        set((state) => ({ isOpen: !state.isOpen }));
      },

      openCart: () => {
        set({ isOpen: true });
      },

      closeCart: () => {
        set({ isOpen: false });
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + getItemPrice(item.product, item.quantity),
          0
        );
      },

      getItemQuantity: (productId: string) => {
        const item = get().items.find((item) => item.product.id === productId);
        return item ? item.quantity : 0;
      },
    }),
    {
      name: 'perfero-cart',
      partialize: (state) => ({ items: state.items }),
    }
  )
);
