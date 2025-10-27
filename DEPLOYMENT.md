# PERFÉRO Deployment Guide

## 🚀 Quick Start

Your PERFÉRO luxury perfume e-commerce website is now ready for deployment! Here's everything you need to know.

## 📋 Pre-Deployment Checklist

### ✅ Completed Features

- [x] **Homepage** with hero section, featured products, and brand story
- [x] **Shop Page** with product filtering and category navigation
- [x] **Product Detail Pages** with image galleries and add-to-cart functionality
- [x] **About Page** with brand story and founder information
- [x] **Shopping Cart** with persistent storage and quantity management
- [x] **Checkout Flow** with multi-step form validation
- [x] **Razorpay Integration** for secure payment processing
- [x] **Responsive Design** optimized for all devices
- [x] **Luxury UI/UX** with black/gold theme and premium feel

### 🎨 Design Features

- **Color Scheme**: Black (#000000), Gold (#D4AF37), White/Beige backgrounds
- **Typography**: Inter + Montserrat fonts for luxury feel
- **Animations**: Smooth transitions, hover effects, and loading states
- **Images**: Optimized with Next.js Image component
- **Mobile-First**: Responsive design for all screen sizes

## 🛠️ Local Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Add your Razorpay credentials to .env.local
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your website!

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/perfero.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables:
     - `NEXT_PUBLIC_RAZORPAY_KEY_ID`
     - `RAZORPAY_KEY_SECRET`
     - `NEXT_PUBLIC_APP_URL`
   - Deploy!

### Option 2: Netlify

1. **Build the project**

   ```bash
   npm run build
   npm run export
   ```

2. **Deploy to Netlify**
   - Upload the `out` folder to Netlify
   - Configure environment variables in Netlify dashboard

### Option 3: Custom Server

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🔧 Environment Variables

Create a `.env.local` file with:

```env
# Razorpay Configuration
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxxxxxxxxxx

# App Configuration
NEXT_PUBLIC_APP_URL=https://yourdomain.com
NEXT_PUBLIC_APP_NAME=PERFÉRO

# Optional: Database (for future use)
DATABASE_URL=your_database_url_here
```

## 💳 Razorpay Setup

### 1. Create Razorpay Account

- Go to [razorpay.com](https://razorpay.com)
- Sign up for a merchant account
- Complete KYC verification

### 2. Get API Keys

- Go to Settings → API Keys
- Copy your Key ID and Key Secret
- Add them to your environment variables

### 3. Test Payments

- Use test keys for development
- Switch to live keys for production
- Test with Razorpay's test cards

## 📦 Product Management

### Current Products

- **7 Single Bottles** (50ml): ₹1,500 → ₹700
  - Vermelia, Indiglo, Rouvière, Azura, Crimson, Emerald, Onyx
- **Gift Pack** (7x10ml): ₹1,077

### Adding New Products

Edit `src/lib/products.ts` to add new products:

```typescript
{
  id: 'new-product',
  name: 'New Product Name',
  price: 1500,
  salePrice: 700,
  size: '50ml',
  images: ['/images/bottles/new-product.jpeg'],
  description: 'Product description...',
  category: 'single',
  inStock: true,
  featured: false
}
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change colors:

```typescript
colors: {
  primary: {
    black: "#000000",
    gold: "#D4AF37",
    beige: "#F5F5DC",
    cream: "#FFF8DC",
  }
}
```

### Fonts

Update `src/app/globals.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap");
```

### Logo

Replace the text logo in `src/components/Header.tsx` with your logo image.

## 🔍 SEO Optimization

### Meta Tags

Update `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "PERFÉRO - Luxury Perfume Collection",
  description: "Your custom description...",
  keywords: "your, custom, keywords",
};
```

### Structured Data

Add JSON-LD structured data for products in `src/app/shop/[id]/page.tsx`.

## 📱 Performance Optimization

### Images

- All images are optimized with Next.js Image component
- WebP and AVIF formats supported
- Lazy loading enabled

### Code Splitting

- Automatic code splitting with Next.js
- Dynamic imports for heavy components
- Optimized bundle size

## 🛡️ Security

### Payment Security

- Razorpay handles all payment data
- PCI DSS compliant
- SSL encryption for all transactions

### Environment Variables

- Never commit `.env.local` to version control
- Use different keys for development and production

## 📊 Analytics (Optional)

### Google Analytics

Add to `src/app/layout.tsx`:

```typescript
// Add Google Analytics script
```

### Razorpay Analytics

- Built-in payment analytics in Razorpay dashboard
- Track conversion rates and payment methods

## 🐛 Troubleshooting

### Common Issues

1. **Images not loading**

   - Check image paths in `public/images/`
   - Ensure images are properly named

2. **Payment not working**

   - Verify Razorpay keys are correct
   - Check environment variables
   - Ensure HTTPS in production

3. **Build errors**
   - Run `npm run build` locally first
   - Check for TypeScript errors
   - Verify all imports are correct

### Support

- Check Next.js documentation
- Razorpay integration docs
- Tailwind CSS documentation

## 🎉 Launch Checklist

- [ ] Test all pages locally
- [ ] Verify payment flow with test cards
- [ ] Check responsive design on mobile
- [ ] Test cart functionality
- [ ] Verify all links work
- [ ] Check SEO meta tags
- [ ] Test checkout process
- [ ] Verify email notifications (if implemented)
- [ ] Check loading performance
- [ ] Test on different browsers

## 📈 Post-Launch

### Monitoring

- Monitor Razorpay dashboard for payments
- Check Vercel analytics for performance
- Monitor error logs

### Updates

- Regular product updates
- Seasonal promotions
- Feature enhancements based on user feedback

---

## 🎊 Congratulations!

Your PERFÉRO luxury perfume e-commerce website is ready to launch! The site features:

- **Premium Design**: Black/gold luxury theme
- **Full E-commerce**: Complete shopping experience
- **Secure Payments**: Razorpay integration
- **Mobile Optimized**: Works perfectly on all devices
- **Fast Performance**: Optimized for speed
- **SEO Ready**: Search engine optimized

**Live URL**: Your site will be available at your chosen domain after deployment.

**Support**: For any questions or issues, refer to the documentation or contact support.

Happy selling! 🛍️✨
