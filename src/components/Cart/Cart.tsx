'use client';

import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/lib/cart';
import { formatCurrency } from '@/lib/razorpay';
import { calculateShipping, calculateTotal } from '@/lib/shipping';

const Cart = () => {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    getTotalPrice,
    clearCart,
  } = useCartStore();

  const totalPrice = getTotalPrice();
  const shipping = calculateShipping(totalPrice); // No pincode available in cart sidebar
  const finalTotal = calculateTotal(totalPrice);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeCart}
      />
      
      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-sm sm:max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-line">
            <h2 className="font-display text-lg sm:text-xl text-charcoal">
              Cart ({items.length})
            </h2>
            <button
              onClick={closeCart}
              className="p-2 hover:bg-alabaster rounded-full transition-colors duration-200"
            >
              <X size={18} className="sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center px-4">
                <ShoppingBag size={40} className="text-muted mb-4 sm:w-12 sm:h-12" />
                <h3 className="font-display text-base sm:text-lg text-charcoal mb-2">
                  Your cart is empty
                </h3>
                <p className="text-muted small mb-6">
                  Add some products to get started
                </p>
                <Link
                  href="/shop"
                  onClick={closeCart}
                  className="btn-primary"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-3 sm:space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center space-x-3 p-3 sm:p-4 border border-line rounded-xl"
                  >
                    {/* Product Image */}
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-sm sm:text-base text-charcoal truncate">
                        {item.product.name}
                      </h3>
                      <p className="small text-muted text-xs">
                        {item.product.size}
                      </p>
                      <p className="small font-semibold text-gold text-xs sm:text-sm">
                        {formatCurrency(item.product.salePrice)}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 hover:bg-alabaster rounded-full transition-colors duration-200"
                      >
                        <Minus size={14} className="sm:w-4 sm:h-4" />
                      </button>
                      <span className="w-6 sm:w-8 text-center font-medium text-xs sm:text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 hover:bg-alabaster rounded-full transition-colors duration-200"
                      >
                        <Plus size={14} className="sm:w-4 sm:h-4" />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="p-1 hover:bg-red-50 text-red-500 rounded-full transition-colors duration-200"
                    >
                      <X size={14} className="sm:w-4 sm:h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-line p-4 sm:p-6 space-y-3 sm:space-y-4">
              {/* Order Summary */}
              <div className="space-y-2">
                <div className="flex justify-between small text-xs sm:text-sm">
                  <span className="text-muted">Subtotal</span>
                  <span className="font-medium">{formatCurrency(totalPrice)}</span>
                </div>
                <div className="flex justify-between small text-xs sm:text-sm">
                  <span className="text-muted">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Free' : formatCurrency(shipping)}
                  </span>
                </div>
                {shipping === 0 && (
                  <div className="text-[10px] sm:text-xs text-success font-medium">
                    Free shipping on orders above ₹1,000
                  </div>
                )}
                <div className="flex justify-between text-base sm:text-lg font-semibold border-t border-line pt-2">
                  <span>Total</span>
                  <span className="text-gold">{formatCurrency(finalTotal)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 sm:space-y-3">
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="w-full btn-primary text-center block"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="w-full btn-outline text-center block"
                >
                  View Cart Details
                </Link>
                <button
                  onClick={clearCart}
                  className="w-full small text-xs sm:text-sm text-muted hover:text-red-500 transition-colors duration-200"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
