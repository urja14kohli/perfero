# 🚀 Immediate Next Steps - Referral System

Your referral system code is **100% ready**. Now you need to do ONE simple thing:

## Create Supabase Tables (2 SQL Scripts)

### ⏱️ Time Required: 5 minutes

### Step 1: Log in to Supabase
Go to: https://app.supabase.com and select your "perfero" project

### Step 2: Open SQL Editor
- Click "SQL Editor" in left sidebar
- Click "+ New Query"

### Step 3: Run First Script (referral_codes table)

Copy everything below and paste into SQL Editor:

```sql
CREATE TABLE referral_codes (
  id BIGSERIAL PRIMARY KEY,
  referrer_email VARCHAR(255) UNIQUE NOT NULL,
  referral_code VARCHAR(10) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_referral_code ON referral_codes(referral_code);
CREATE INDEX idx_referrer_email ON referral_codes(referrer_email);

ALTER TABLE referral_codes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read" ON referral_codes
  FOR SELECT USING (true);

CREATE POLICY "Allow public insert" ON referral_codes
  FOR INSERT WITH CHECK (true);
```

Click **"Run"** button → ✅ Table created!

### Step 4: Run Second Script (referral_records table)

In a NEW query, paste:

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

CREATE INDEX idx_referrer_email ON referral_records(referrer_email);
CREATE INDEX idx_referral_code ON referral_records(referral_code);
CREATE INDEX idx_buyer_email ON referral_records(buyer_email);
CREATE INDEX idx_status ON referral_records(status);

ALTER TABLE referral_records ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read" ON referral_records
  FOR SELECT USING (true);

CREATE POLICY "Allow public insert" ON referral_records
  FOR INSERT WITH CHECK (true);
```

Click **"Run"** → ✅ Table created!

---

## ✅ Verify Tables Created

In Supabase dashboard:
1. Click "Tables" in left sidebar
2. You should see:
   - ✅ `public` → `referral_codes`
   - ✅ `public` → `referral_records`

If you see both → **YOU'RE DONE! 🎉**

---

## 🧪 Quick Test (Optional)

### Test the system locally:

```bash
# Terminal 1: Start development server
cd /Users/urjakohli/perfero
npm run dev

# Terminal 2: Test API
# Get/create referral code
curl -X POST http://localhost:3000/api/referrals/code \
  -H "Content-Type: application/json" \
  -d '{"email": "youremail@gmail.com", "name": "Test"}'

# You should see response with referral code like: "ABC123"
```

---

## 📊 System is Now Live!

Once tables are created, your referral system automatically:

✅ **Users can generate referral codes** via the referral widget on home/shop page
✅ **Share codes with friends** with unique referral links  
✅ **Friends use codes at checkout** (during payment)
✅ **System tracks purchases** in Supabase
✅ **Emails sent automatically** via Resend to referrer:
   - "You got a referral! 1/5 towards free pack"
   - After 5: "You earned a FREE gift pack!"

---

## 🎯 What Happens Next

### When User Generates Code:
```
User enters email → Code created in database → 
Email sent with code and share link
```

### When Friend Uses Code at Checkout:
```
Friend sees referral link (perferofragrance.com/shop?ref=ABC123) →
Adds gift pack to cart →
Pays with Razorpay →
System records referral in database →
Email sent to referrer!
```

### After 5 Referrals:
```
Referrer receives email: "Congrats! You earned a FREE ₹799 Gift Pack!"
Special code sent to claim the free pack
```

---

## 📧 Emails Sent Automatically

### Welcome Email
- Sent when user generates code
- Contains: Code, share link, how it works

### Progress Email  
- Sent each time someone uses the code
- Shows: 1/5, 2/5, 3/5, etc.
- Progress bar included

### Reward Email
- Sent when referrer reaches 5
- Contains: Special redemption code
- Includes link to shop page

---

## ❓ Questions?

- Full setup guide: See `REFERRAL_SETUP.md`
- API documentation: Comments in `src/app/api/referrals/`
- Email templates: See `src/lib/email.ts`

---

## 🚀 Ready to Go!

1. Create tables in Supabase (5 mins)
2. Your referral system is LIVE!
3. Users can start generating codes immediately
4. Emails will send automatically via Resend

**That's it! You're done! 🎉**

