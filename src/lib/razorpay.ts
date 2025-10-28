import Razorpay from 'razorpay';

// Razorpay configuration
export const razorpayConfig = {
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_placeholder',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'placeholder_secret',
};

// Initialize Razorpay instance only if keys are available
export const razorpay = process.env.RAZORPAY_KEY_SECRET 
  ? new Razorpay({
      key_id: razorpayConfig.key_id,
      key_secret: razorpayConfig.key_secret,
    })
  : null;

// Frontend Razorpay options
export interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: any) => void;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string>;
  theme?: {
    color: string;
  };
}

export const createRazorpayOptions = (
  orderId: string,
  amount: number,
  customerDetails: {
    name: string;
    email: string;
    phone: string;
  },
  onSuccess: (response: any) => void,
  onError: (error: any) => void
): RazorpayOptions => {
  return {
    key: razorpayConfig.key_id,
    amount: amount * 100, // Convert to paise
    currency: 'INR',
    name: 'Perféro',
    description: 'Luxury Perfume Purchase',
    order_id: orderId,
    handler: onSuccess,
    prefill: {
      name: customerDetails.name,
      email: customerDetails.email,
      contact: customerDetails.phone,
    },
    theme: {
      color: '#D4AF37', // Gold color
    },
    notes: {
      order_id: orderId,
    },
  };
};

// Load Razorpay script dynamically
export const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

// Payment verification
export const verifyPayment = async (
  razorpayOrderId: string,
  razorpayPaymentId: string,
  razorpaySignature: string
): Promise<boolean> => {
  try {
    const crypto = require('crypto');
    const expectedSignature = crypto
      .createHmac('sha256', razorpayConfig.key_secret)
      .update(`${razorpayOrderId}|${razorpayPaymentId}`)
      .digest('hex');

    return expectedSignature === razorpaySignature;
  } catch (error) {
    console.error('Payment verification error:', error);
    return false;
  }
};

// Format currency for display
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  }).format(amount);
};

// Calculate shipping
export const calculateShipping = (totalAmount: number): number => {
  // Free shipping for orders above ₹1000
  if (totalAmount >= 1000) {
    return 0;
  }
  return 50; // Standard shipping charge
};

// Calculate total with shipping
export const calculateTotal = (subtotal: number): number => {
  return subtotal + calculateShipping(subtotal);
};
