'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCartStore } from '@/lib/cart';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems, openCart } = useCartStore();
  const totalItems = getTotalItems();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-ivory/80 backdrop-blur-xl border-b border-line/70">
      <div className="container-luxury">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo & Brand - Left */}
          <Link href="/" className="flex items-center space-x-1 sm:space-x-1 flex-shrink-0">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
              <Image
                src="/images/perfero logo.png"
                alt="Perféro Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-gold leading-none">
              Perféro
            </div>
          </Link>

          {/* Desktop Navigation - Center */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-charcoal hover:text-gold transition-colors duration-300 font-medium text-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions - Right */}
          <div className="flex items-center gap-2">
            {/* Cart Button */}
            <button
              onClick={openCart}
              className="relative p-2 text-charcoal hover:text-gold transition-colors duration-300 focus-luxury"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={20} className="sm:w-6 sm:h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-gold text-charcoal text-[10px] sm:text-xs font-bold rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-charcoal hover:text-gold transition-colors duration-300 focus-luxury"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-line/70 py-4">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-charcoal hover:text-gold transition-colors duration-300 font-medium small py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
