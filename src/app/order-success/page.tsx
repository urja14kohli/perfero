'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Package, Mail, Phone } from 'lucide-react';
import { formatCurrency } from '@/lib/razorpay';
import { Suspense } from 'react';

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get('payment_id');
  const orderId = searchParams.get('order_id');

  return (
    <div className="bg-white">
      <div className="container-max section-padding py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={40} className="text-green-600" />
            </div>
            <h1 className="text-3xl font-semibold font-bold text-black mb-2">
              Order Confirmed!
            </h1>
            <p className="text-lg text-gray-600">
              Thank you for your purchase. Your order has been successfully placed.
            </p>
          </div>

          {/* Order Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-black mb-4">
              Order Details
            </h2>
            
            <div className="space-y-2 text-left">
              <div className="flex justify-between">
                <span className="text-gray-600">Order ID:</span>
                <span className="font-medium">{orderId || 'N/A'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Payment ID:</span>
                <span className="font-medium">{paymentId || 'N/A'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="text-green-600 font-medium">Confirmed</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-primary-beige rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-black mb-4">
              What's Next?
            </h3>
            
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail size={16} className="text-black" />
                </div>
                <div>
                  <h4 className="font-medium text-black">Order Confirmation</h4>
                  <p className="text-sm text-gray-600">
                    You'll receive an email confirmation with your order details shortly.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Package size={16} className="text-black" />
                </div>
                <div>
                  <h4 className="font-medium text-black">Processing & Shipping</h4>
                  <p className="text-sm text-gray-600">
                    Your order will be processed within 1-2 business days and shipped via our trusted partners.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone size={16} className="text-black" />
                </div>
                <div>
                  <h4 className="font-medium text-black">Tracking Information</h4>
                  <p className="text-sm text-gray-600">
                    You'll receive tracking details via SMS and email once your order ships.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop" className="btn-primary">
              Continue Shopping
            </Link>
            <Link href="/about" className="btn-secondary">
              Learn About Perféro
            </Link>
          </div>

          {/* Contact Support */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">
              Have questions about your order?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <a
                href="mailto:support@perfero.com"
                className="text-yellow-500 hover:text-accent-gold-dark transition-colors duration-200"
              >
                support@perfero.com
              </a>
              <span className="hidden sm:block text-gray-400">•</span>
              <a
                href="tel:+919876543210"
                className="text-yellow-500 hover:text-accent-gold-dark transition-colors duration-200"
              >
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderSuccess() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center">Loading...</div>}>
      <OrderSuccessContent />
    </Suspense>
  );
}
