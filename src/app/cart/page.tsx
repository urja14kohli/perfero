'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Plus, Minus, X, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCartStore } from '@/lib/cart';
import { formatCurrency, calculateShipping, calculateTotal } from '@/lib/razorpay';

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
      <div className="bg-white">
        <div className="container-max section-padding py-16">
          <div className="max-w-md mx-auto text-center">
            <div className="mb-8">
              <ShoppingBag size={64} className="text-gray-300 mx-auto mb-4" />
              <h1 className="text-2xl font-semibold font-bold text-black mb-2">
                Your cart is empty
              </h1>
              <p className="text-gray-600">
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
    <div className="bg-white">
      {/* Header */}
      <div className="bg-primary-cream py-8">
        <div className="container-max section-padding">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold font-bold text-black mb-2">
                Shopping Cart
              </h1>
              <p className="text-gray-600">
                {items.length} item{items.length !== 1 ? 's' : ''} in your cart
              </p>
            </div>
            
            <Link
              href="/shop"
              className="flex items-center text-gray-600 hover:text-yellow-500 transition-colors duration-200"
            >
              <ArrowLeft size={16} className="mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>

      <div className="container-max section-padding py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center space-x-4 p-6 border border-gray-200 rounded-lg bg-white card-hover"
                >
                  {/* Product Image */}
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover rounded-lg"
                      sizes="80px"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/shop/${item.product.id}`}
                      className="font-semibold text-black hover:text-yellow-500 transition-colors duration-200"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.product.size}
                    </p>
                    <p className="text-sm font-semibold text-yellow-500 mt-1">
                      {formatCurrency(item.product.salePrice)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-12 text-center font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Item Total */}
                  <div className="text-right">
                    <p className="font-semibold text-black">
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
                className="text-sm text-gray-500 hover:text-red-500 transition-colors duration-200"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-black mb-6">
                  Order Summary
                </h2>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">{formatCurrency(subtotal)}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? 'Free' : formatCurrency(shipping)}
                    </span>
                  </div>
                  
                  {shipping === 0 && (
                    <div className="text-xs text-green-600 font-medium">
                      🎉 Free shipping on orders above ₹1,000
                    </div>
                  )}
                  
                  <div className="border-t border-gray-300 pt-3">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span className="text-yellow-500">{formatCurrency(total)}</span>
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
                  <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>Free Returns</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-black mb-2">
                    Why Choose PERFÉRO?
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Premium quality ingredients</li>
                    <li>• Made in India</li>
                    <li>• Luxury packaging</li>
                    <li>• 30-day return policy</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-black mb-2">
                    Need Help?
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Have questions about our products or need assistance?
                  </p>
                  <Link
                    href="/contact"
                    className="text-sm text-yellow-500 hover:text-accent-gold-dark transition-colors duration-200"
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
