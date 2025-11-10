'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const whatsappNumber = '919953601705'; // WhatsApp Business number
  const whatsappMessage = encodeURIComponent('Hi PERFÉRO! I have a question about your fragrances.');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Create email body
      const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
      `.trim();

      // Open email client
      window.location.href = `mailto:support@perferofragrance.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;

      // Simulate submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1000);
    } catch (error) {
      console.error('Error:', error);
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="bg-ivory min-h-screen">
      {/* Hero Section */}
      <section className="bg-[radial-gradient(1000px_500px_at_50%_0,#F6F1E6,transparent)] border-b border-line">
        <div className="max-w-[1100px] mx-auto text-center py-12 sm:py-16 px-4 sm:px-6">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal mb-3 sm:mb-4">
            Get in <span className="text-gold">Touch</span>
          </h1>
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
            Have a question about our fragrances? We're here to help. Reach out to us through any of the methods below.
          </p>
        </div>
      </section>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* WhatsApp Button - Featured */}
            <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <MessageCircle size={24} className="mr-3" />
                <h3 className="font-display text-xl">Chat on WhatsApp</h3>
              </div>
              <p className="text-white/90 text-sm mb-4">
                Get instant responses to your queries. Our WhatsApp Business is active during business hours.
              </p>
              <button
                onClick={handleWhatsApp}
                className="w-full bg-white text-[#25D366] font-semibold py-3 px-4 rounded-xl hover:bg-white/95 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Start Chat
              </button>
            </div>

            {/* Contact Cards */}
            <div className="bg-white rounded-2xl border border-line shadow-card p-6">
              <h3 className="font-display text-xl text-charcoal mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <a href="mailto:support@perferofragrance.com" className="flex items-start gap-3 text-muted hover:text-gold transition-colors group">
                  <Mail size={20} className="mt-0.5 flex-shrink-0 text-gold" />
                  <div>
                    <p className="text-xs text-muted/60 mb-0.5">Email us</p>
                    <p className="text-sm font-medium group-hover:underline">support@perferofragrance.com</p>
                  </div>
                </a>

                <a href="tel:+919953601705" className="flex items-start gap-3 text-muted hover:text-gold transition-colors group">
                  <Phone size={20} className="mt-0.5 flex-shrink-0 text-gold" />
                  <div>
                    <p className="text-xs text-muted/60 mb-0.5">Call us</p>
                    <p className="text-sm font-medium group-hover:underline">+91 9953601705</p>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-muted">
                  <MapPin size={20} className="mt-0.5 flex-shrink-0 text-gold" />
                  <div>
                    <p className="text-xs text-muted/60 mb-0.5">Visit us</p>
                    <p className="text-sm">7 ACE EXIM LLP<br />New Delhi, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-muted">
                  <Clock size={20} className="mt-0.5 flex-shrink-0 text-gold" />
                  <div>
                    <p className="text-xs text-muted/60 mb-0.5">Business Hours</p>
                    <p className="text-sm">Monday - Saturday<br />10:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="bg-alabaster rounded-2xl border border-line p-6">
              <h3 className="font-display text-lg text-charcoal mb-2">Need Quick Answers?</h3>
              <p className="text-sm text-muted mb-4">
                Check out our frequently asked questions or policies for instant help.
              </p>
              <div className="space-y-2">
                <Link href="/refund" className="block text-sm text-gold hover:text-gold-deep transition-colors">
                  → Returns & Refunds Policy
                </Link>
                <Link href="/privacy" className="block text-sm text-gold hover:text-gold-deep transition-colors">
                  → Shipping Information
                </Link>
                <Link href="/about" className="block text-sm text-gold hover:text-gold-deep transition-colors">
                  → About Our Fragrances
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-line shadow-card p-6 sm:p-8 md:p-10">
              <h2 className="font-display text-2xl sm:text-3xl text-charcoal mb-2">Send us a Message</h2>
              <p className="text-muted text-sm sm:text-base mb-6 sm:mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-800 font-medium text-sm">Message Sent Successfully!</p>
                    <p className="text-green-700 text-xs mt-1">
                      Your default email client should open. We'll respond to you shortly.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 sm:py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all text-sm sm:text-base ${
                        errors.name ? 'border-red-500' : 'border-line'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 sm:py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all text-sm sm:text-base ${
                        errors.email ? 'border-red-500' : 'border-line'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 sm:py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all text-sm sm:text-base ${
                        errors.phone ? 'border-red-500' : 'border-line'
                      }`}
                      placeholder="+91 98212 09804"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 sm:py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all text-sm sm:text-base ${
                        errors.subject ? 'border-red-500' : 'border-line'
                      }`}
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Order Status">Order Status</option>
                      <option value="Shipping & Delivery">Shipping & Delivery</option>
                      <option value="Returns & Refunds">Returns & Refunds</option>
                      <option value="Bulk Order">Bulk Order</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all resize-none text-sm sm:text-base ${
                      errors.message ? 'border-red-500' : 'border-line'
                    }`}
                    placeholder="Tell us more about your inquiry..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  <p className="text-xs text-muted mt-2">Minimum 10 characters</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto btn-primary px-8 py-3 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-charcoal border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-xs text-muted mt-4">
                  By submitting this form, you agree to our <Link href="/privacy" className="text-gold hover:underline">Privacy Policy</Link>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

