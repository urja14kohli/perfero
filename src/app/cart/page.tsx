'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Plus, Minus, X, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCartStore } from '@/lib/cart';
import { formatCurrency } from '@/lib/razorpay';
import { calculateShipping, calculateTotal } from '@/lib/shipping';

export default function Cart() {
  const {
    items,
    updateQuantity,
    removeItem,
    clearCart,
    getTotalPrice,
  } = useCartStore();

  const subtotal = getTotalPrice();
  const shipping = calculateShipping(subtotal);
  const total = calculateTotal(subtotal);

  if (items.length === 0) {
    return (
      <div className="bg-ivory">
        <div className="container-luxury py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="mb-8">
              <ShoppingBag size={64} className="text-muted mx-auto mb-4" />
              <h1 className="font-display text-display-lg text-charcoal mb-2">
                Your cart is empty
              </h1>
              <p className="text-muted">
                Looks like you haven't added any items to your cart yet.
              </p>
            </div>
            
            <Link href="/shop" className="btn-primary">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-ivory">
      {/* Header */}
      <div className="bg-alabaster py-6 sm:py-8">
        <div className="container-luxury">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div>
              <h1 className="font-display text-2xl sm:text-display-lg text-charcoal mb-1 sm:mb-2">
                Shopping Cart
              </h1>
              <p className="text-muted text-sm">
                {items.length} item{items.length !== 1 ? 's' : ''} in your cart
              </p>
            </div>
            
            <Link
              href="/shop"
              className="flex items-center text-muted hover:text-gold transition-colors duration-200 text-sm"
            >
              <ArrowLeft size={16} className="mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>

      <div className="container-luxury py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-3 sm:space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 border border-line rounded-2xl bg-white card-luxury"
                >
                  {/* Product Image */}
                  <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/shop/${item.product.id}`}
                      className="font-display text-charcoal hover:text-gold transition-colors duration-200"
                    >
                      {item.product.name}
                    </Link>
                    <p className="small text-muted mt-1">
                      {item.product.size}
                    </p>
                    <p className="small font-semibold text-gold mt-1">
                      {formatCurrency(item.product.salePrice)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="p-2 hover:bg-alabaster rounded-full transition-colors duration-200"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-12 text-center font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="p-2 hover:bg-alabaster rounded-full transition-colors duration-200"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Item Total */}
                  <div className="text-right">
                    <p className="font-semibold text-charcoal">
                      {formatCurrency(item.product.salePrice * item.quantity)}
                    </p>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="p-2 hover:bg-red-50 text-red-500 rounded-full transition-colors duration-200"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>

            {/* Clear Cart Button */}
            <div className="mt-6 text-center">
              <button
                onClick={clearCart}
                className="small text-muted hover:text-red-500 transition-colors duration-200"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-alabaster rounded-2xl p-6">
                <h2 className="font-display text-xl text-charcoal mb-6">
                  Order Summary
                </h2>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between small">
                    <span className="text-muted">Subtotal</span>
                    <span className="font-medium">{formatCurrency(subtotal)}</span>
                  </div>
                  
                  <div className="flex justify-between small">
                    <span className="text-muted">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? 'Free' : formatCurrency(shipping)}
                    </span>
                  </div>
                  
                  {shipping === 0 && (
                    <div className="text-xs text-green-600 font-medium">
                      Free shipping on orders above ₹1,000
                    </div>
                  )}
                  
                  <div className="border-t border-line pt-3">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span className="text-gold">{formatCurrency(total)}</span>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <Link
                  href="/checkout"
                  className="w-full btn-primary text-center block mb-4"
                >
                  Proceed to Checkout
                </Link>

                {/* Security Badges */}
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-4 small text-muted">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                      <span>Free Returns</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 space-y-4">
                <div className="bg-white border border-line rounded-2xl p-4">
                  <h3 className="font-display text-charcoal mb-2">
                    Why Choose Perféro?
                  </h3>
                  <ul className="small text-muted space-y-1">
                    <li>• Great quality ingredients</li>
                    <li>• Made in India</li>
                    <li>• Beautiful packaging</li>
                    <li>• 30-day return policy</li>
                  </ul>
                </div>

                <div className="bg-white border border-line rounded-2xl p-4">
                  <h3 className="font-display text-charcoal mb-2">
                    Need Help?
                  </h3>
                  <p className="small text-muted mb-3">
                    Have questions about our products or need assistance?
                  </p>
                  <Link
                    href="/contact"
                    className="small text-gold hover:text-gold-deep transition-colors duration-200"
                  >
                    Contact Support →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
