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
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-line">
            <h2 className="font-display text-xl text-charcoal">
              Shopping Cart ({items.length})
            </h2>
            <button
              onClick={closeCart}
              className="p-2 hover:bg-alabaster rounded-full transition-colors duration-200"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} className="text-muted mb-4" />
                <h3 className="font-display text-lg text-charcoal mb-2">
                  Your cart is empty
                </h3>
                <p className="text-muted mb-6">
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
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center space-x-4 p-4 border border-line rounded-xl"
                  >
                    {/* Product Image */}
                    <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
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
                      <h3 className="font-display text-charcoal truncate">
                        {item.product.name}
                      </h3>
                      <p className="small text-muted">
                        {item.product.size}
                      </p>
                      <p className="small font-semibold text-gold">
                        {formatCurrency(item.product.salePrice)}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 hover:bg-alabaster rounded-full transition-colors duration-200"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 hover:bg-alabaster rounded-full transition-colors duration-200"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="p-1 hover:bg-red-50 text-red-500 rounded-full transition-colors duration-200"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-line p-6 space-y-4">
              {/* Order Summary */}
              <div className="space-y-2">
                <div className="flex justify-between small">
                  <span className="text-muted">Subtotal</span>
                  <span className="font-medium">{formatCurrency(totalPrice)}</span>
                </div>
                <div className="flex justify-between small">
                  <span className="text-muted">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Free' : formatCurrency(shipping)}
                  </span>
                </div>
                {shipping === 0 && (
                  <div className="text-xs text-success font-medium">
                    Free shipping on orders above ₹1,000
                  </div>
                )}
                <div className="flex justify-between text-lg font-semibold border-t border-line pt-2">
                  <span>Total</span>
                  <span className="text-gold">{formatCurrency(finalTotal)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="w-full btn-primary text-center"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="w-full btn-outline text-center"
                >
                  View Cart Details
                </Link>
                <button
                  onClick={clearCart}
                  className="w-full small text-muted hover:text-red-500 transition-colors duration-200"
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
