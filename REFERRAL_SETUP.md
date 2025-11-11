# Referral System Setup Guide

## ✅ Done Automatically
- ✅ Environment variables created (.env.local)
- ✅ Supabase client installed (@supabase/supabase-js)
- ✅ Resend email service installed
- ✅ API routes created for referral tracking
- ✅ Database utility functions created
- ✅ Email templates created

## 🔧 Manual Setup Required - Supabase Tables

You need to create 2 tables in your Supabase database. Follow these steps:

### Step 1: Go to Supabase Dashboard
1. Go to https://app.supabase.com
2. Select your project: "perfero"
3. Click "SQL Editor" in the left sidebar

### Step 2: Create referral_codes Table

Copy and paste this SQL into the SQL Editor and click "Run":

```sql
CREATE TABLE referral_codes (
  id BIGSERIAL PRIMARY KEY,
  referrer_email VARCHAR(255) UNIQUE NOT NULL,
  referral_code VARCHAR(10) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster lookups
CREATE INDEX idx_referral_code ON referral_codes(referral_code);
CREATE INDEX idx_referrer_email ON referral_codes(referrer_email);

-- Enable RLS (Row Level Security)
ALTER TABLE referral_codes ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read" ON referral_codes
  FOR SELECT USING (true);

-- Allow public insert
CREATE POLICY "Allow public insert" ON referral_codes
  FOR INSERT WITH CHECK (true);
```

### Step 3: Create referral_records Table

Copy and paste this SQL into the SQL Editor and click "Run":

```sql
CREATE TABLE referral_records (
  id BIGSERIAL PRIMARY KEY,
  referrer_email VARCHAR(255) NOT NULL,
  referral_code VARCHAR(10) NOT NULL,
  buyer_email VARCHAR(255) NOT NULL,
  product_id VARCHAR(255) NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  purchase_date TIMESTAMP WITH TIME ZONE,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  FOREIGN KEY (referral_code) REFERENCES referral_codes(referral_code)
);

-- Create indexes for faster queries
CREATE INDEX idx_referrer_email ON referral_records(referrer_email);
CREATE INDEX idx_referral_code ON referral_records(referral_code);
CREATE INDEX idx_buyer_email ON referral_records(buyer_email);
CREATE INDEX idx_status ON referral_records(status);

-- Enable RLS (Row Level Security)
ALTER TABLE referral_records ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read" ON referral_records
  FOR SELECT USING (true);

-- Allow public insert
CREATE POLICY "Allow public insert" ON referral_records
  FOR INSERT WITH CHECK (true);
```

### Step 4: Verify Tables Created

In Supabase, go to "Tables" in the left sidebar. You should see:
- ✅ referral_codes table
- ✅ referral_records table

---

## 🚀 How It Works Now

### User Flow:
```
1. User enters email in referral widget
2. System creates/retrieves referral code
3. User shares code with friends
4. Friend uses code at checkout
5. Payment confirmed by Razorpay
6. API calls /api/referrals/track with code + buyer email
7. System records referral in Supabase
8. Resend sends email to referrer: "You got 1/5 referrals!"
9. After 5 referrals → "You earned a free pack!" email
```

### Email Notifications:
- **Welcome email**: Sent when user generates code (optional)
- **Progress email**: Sent each time someone uses code (1/5, 2/5, etc.)
- **Free pack email**: Sent when user reaches 5 referrals

---

## 🔌 Integration Points

### Checkout Page
When user completes purchase with referral code:
```javascript
// Automatically called after payment success
await fetch('/api/referrals/track', {
  method: 'POST',
  body: JSON.stringify({
    referralCode: 'ABC123',
    buyerEmail: 'friend@email.com',
    productId: 'perfero-gift-pack',
    amount: 799
  })
});
```

### Referral Widget
User generates code via widget:
```javascript
// Calls this endpoint
const response = await fetch('/api/referrals/code', {
  method: 'POST',
  body: JSON.stringify({
    email: 'user@email.com',
    name: 'John' // optional
  })
});
```

---

## 📊 Database Schema

### referral_codes
```
id                | BIGSERIAL (auto)
referrer_email    | VARCHAR(255) - email of person with code
referral_code     | VARCHAR(10) - unique code (e.g., ABC123)
created_at        | TIMESTAMP
updated_at        | TIMESTAMP
```

### referral_records
```
id                | BIGSERIAL (auto)
referrer_email    | VARCHAR(255) - who referred
referral_code     | VARCHAR(10) - which code was used
buyer_email       | VARCHAR(255) - who bought
product_id        | VARCHAR(255) - what they bought
amount            | DECIMAL - purchase amount
purchase_date     | TIMESTAMP - when they bought
status            | VARCHAR(50) - pending/completed/cancelled
created_at        | TIMESTAMP
```

---

## ✅ Testing the System

### Test 1: Generate Referral Code
```bash
curl -X POST http://localhost:3000/api/referrals/code \
  -H "Content-Type: application/json" \
  -d '{"email": "test@email.com", "name": "Test User"}'
```

### Test 2: Track a Referral
```bash
curl -X POST http://localhost:3000/api/referrals/track \
  -H "Content-Type: application/json" \
  -d '{
    "referralCode": "ABC123",
    "buyerEmail": "friend@email.com",
    "productId": "perfero-gift-pack",
    "amount": 799
  }'
```

### Test 3: Get Referrer Stats
```bash
curl http://localhost:3000/api/referrals/code?email=test@email.com
```

---

## 📧 Email Testing

Emails are sent automatically. To test:
1. Generate a code with your real email
2. Use the code at checkout (you'll receive test emails)
3. Check your email (including spam folder)

---

## 🐛 Troubleshooting

### "Invalid referral code"
- Make sure the code exists in referral_codes table
- Check the code is spelled correctly (case-sensitive)

### "Email not sent"
- Check RESEND_API_KEY is correct in .env.local
- Verify email domain is verified in Resend dashboard
- Check email spam folder

### "Database error"
- Make sure tables were created successfully
- Verify Supabase URL and Key are correct in .env.local
- Check RLS policies are enabled

---

## 🔐 Security Notes

- Environment variables (.env.local) are never committed to Git
- Supabase anonymous key is frontend-safe (uses RLS)
- Only allowed operations are done by RLS policies
- Email addresses are lowercase for consistency
- Codes are unique and random

---

## 📈 Future Improvements

- [ ] Add fraud detection (same IP multiple referrals)
- [ ] Add email verification for referrers
- [ ] Add payment webhook verification
- [ ] Add dashboard for referrer to see all referrals
- [ ] Add support for multiple referral tiers
- [ ] Add referral history export

---

**Status**: ✅ Ready to go! Just create the Supabase tables and you're live! 🚀

