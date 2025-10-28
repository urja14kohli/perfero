import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'All Products', href: '/shop' },
      { name: 'Gift Sets', href: '/shop?category=gift-pack' },
      { name: 'Single Bottles', href: '/shop?category=single' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
    support: [
      { name: 'Shipping Info', href: '/shipping' },
      { name: 'Returns', href: '/refund' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Refund Policy', href: '/refund' },
    ],
  };

  const socialLinks = [
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
  ];

  return (
    <footer className="bg-ink text-ivory">
      <div className="container-luxury py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                <Image
                  src="/images/perfero logo.png"
                  alt="Perféro Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-xl sm:text-2xl font-display font-semibold text-gold">
                Perféro
              </div>
            </Link>
            <p className="small text-ivory/80 mb-4 sm:mb-6 max-w-md text-xs sm:text-sm">
              Great perfumes made with care. Experience seven different scents 
              in one beautiful package, designed for modern people.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex items-center space-x-2 text-ivory/80">
                <Mail size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                <a href="mailto:support@perferofragrance.com" className="small text-xs sm:text-sm hover:text-gold transition-colors">
                  support@perferofragrance.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-ivory/80">
                <Phone size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                <a href="tel:+919821209804" className="small text-xs sm:text-sm hover:text-gold transition-colors">
                  +91 9821209804
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4 mt-4 sm:mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 text-ivory/80 hover:text-gold transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <Icon size={18} className="sm:w-5 sm:h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-display text-base sm:text-lg text-ivory mb-3 sm:mb-4">Shop</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="small text-ivory/80 hover:text-gold transition-colors duration-300 text-xs sm:text-sm block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display text-base sm:text-lg text-ivory mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="small text-ivory/80 hover:text-gold transition-colors duration-300 text-xs sm:text-sm block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-display text-base sm:text-lg text-ivory mb-3 sm:mb-4">Support</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="small text-ivory/80 hover:text-gold transition-colors duration-300 text-xs sm:text-sm block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-line/20 pt-6 sm:pt-8 mt-6 sm:mt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-display text-base sm:text-lg text-ivory mb-1.5 sm:mb-2">
              Stay in the Loop
            </h3>
            <p className="small text-ivory/80 mb-3 sm:mb-4 text-xs sm:text-sm">
              Get exclusive offers and fragrance tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 py-2 bg-ivory/10 border border-line/30 rounded-xl text-ivory placeholder-ivory/60 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent small text-xs sm:text-sm"
                aria-label="Email address for newsletter"
              />
              <button className="btn-primary px-6 py-2 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="small text-ivory/60 mt-2 sm:mt-3 text-[10px] sm:text-xs">
              We respect your privacy. Unsubscribe at any time. See our <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-line/20 pt-4 sm:pt-6 mt-6 sm:mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 gap-3">
            <p className="small text-ivory/60 text-xs sm:text-sm text-center md:text-left">
              © {currentYear} 7 ACE EXIM LLP. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="small text-ivory/60 hover:text-gold transition-colors duration-300 text-xs sm:text-sm whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
