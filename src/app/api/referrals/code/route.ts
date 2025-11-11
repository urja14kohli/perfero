import { NextRequest, NextResponse } from 'next/server';
import { referralDB } from '@/lib/supabase';
import { emailService } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Get or create referral code
    const referralCode = await referralDB.getOrCreateReferralCode(email);

    // Send welcome email if this is a new sign-up (optional)
    if (name) {
      await emailService.sendWelcomeEmail(email, name, referralCode);
    }

    // Get stats
    const stats = await referralDB.getReferrerStats(email);

    return NextResponse.json({
      success: true,
      referralCode,
      stats,
    });
  } catch (error) {
    console.error('Error creating referral code:', error);
    return NextResponse.json(
      { error: 'Failed to create referral code' },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve existing referral code and stats
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const stats = await referralDB.getReferrerStats(email);
    
    if (!stats) {
      return NextResponse.json(
        { error: 'Referral code not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      stats,
    });
  } catch (error) {
    console.error('Error retrieving referral code:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

