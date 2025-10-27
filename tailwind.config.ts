import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Luxury brand colors
        ivory: '#FAF7F2',
        alabaster: '#F6F1E6',
        cream: '#F2E8D9',
        line: '#E9E2CF',
        charcoal: '#111112',
        ink: '#1A1A1B',
        gold: '#C8A85D',
        'gold-deep': '#B4892D',
        'gold-soft': '#E6D6A8',
        muted: '#6F6B5F',
        success: '#2FA66A',
        // Legacy colors for compatibility
        'primary-black': "#000000",
        'primary-gold': "#D4AF37",
        'primary-beige': "#F5F5DC",
        'primary-cream': "#FFF8DC",
        'accent-gold': "#D4AF37",
        'accent-gold-light': "#F4E4BC",
        'accent-gold-dark': "#B8860B",
      },
      fontFamily: {
        display: ['Fraunces', 'Playfair Display', 'serif'],
        sans: ['Inter', 'SF Pro Text', 'system-ui', 'sans-serif'],
        luxury: ["Montserrat", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        'display-xl': ['64px', { lineHeight: '68px', letterSpacing: '-0.01em' }],
        'display-lg': ['44px', { lineHeight: '52px', letterSpacing: '-0.005em' }],
        'display-md': ['28px', { lineHeight: '36px' }],
        'lead': ['18px', { lineHeight: '30px', fontWeight: '500' }],
        'body': ['16px', { lineHeight: '28px' }],
        'small': ['14px', { lineHeight: '22px' }],
        'button': ['15px', { lineHeight: '20px', fontWeight: '600' }],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      boxShadow: {
        card: '0 8px 24px rgba(0,0,0,0.06)',
        cardHover: '0 12px 28px rgba(0,0,0,0.10)',
        luxury: '0 10px 30px rgba(0, 0, 0, 0.1)',
        gold: '0 4px 20px rgba(200, 168, 93, 0.3)',
      },
      borderRadius: {
        xl: '16px',
        '2xl': '22px',
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "gold-glow": "goldGlow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        goldGlow: {
          "0%": { boxShadow: "0 0 5px #C8A85D" },
          "100%": { boxShadow: "0 0 20px #C8A85D, 0 0 30px #C8A85D" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
