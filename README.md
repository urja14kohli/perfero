# Perféro - Luxury Perfume E-Commerce

A premium Next.js e-commerce website for Perféro luxury perfumes featuring a 7-fragrance gift set and individual bottles.

## Features

- 🛍️ **Full E-commerce**: Shopping cart, checkout flow, payment integration
- 💳 **Razorpay Integration**: Secure payment processing for Indian market
- 📱 **Responsive Design**: Mobile-first, works on all devices
- 🎨 **Luxury UI**: Black/gold/beige theme with premium feel
- ⚡ **Performance**: Next.js 14 with App Router, optimized images
- 🔍 **SEO Ready**: Meta tags, structured data, social sharing

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Payment**: Razorpay
- **State Management**: Zustand
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd perfero
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables
   Create a `.env.local` file in the root directory with:

```env
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. Run the development server

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Product Structure

### Single Bottles (50ml)

- Price: ~~₹1,500~~ **₹700**
- 7 unique fragrances: Vermelia, Indiglo, Rouvière, etc.

### Gift Pack (7x10ml)

- Price: **₹1,077**
- All 7 fragrances in one elegant package

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable React components
├── lib/                # Utilities and configurations
└── styles/             # Global styles

public/
├── images/
│   ├── bottles/        # Single bottle images
│   └── gift-pack/      # Gift pack images
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Manual Deployment

```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is proprietary to Perféro.

## Contact

For questions or support, contact: [Your Contact Information]
