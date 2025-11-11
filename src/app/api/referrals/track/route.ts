import { NextRequest, NextResponse } from 'next/server';
import { referralDB } from '@/lib/supabase';
import { emailService } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const { referralCode, buyerEmail, productId, amount, buyerName } = await request.json();

    // Validate input
    if (!referralCode || !buyerEmail || !productId || !amount) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Track the referral in database
    const tracked = await referralDB.trackReferral(
      referralCode,
      buyerEmail,
      productId,
      amount
    );

    if (!tracked) {
      return NextResponse.json(
        { error: 'Failed to track referral' },
        { status: 400 }
      );
    }

    // Get referrer stats to send appropriate email
    const referrerEmail = await referralDB.getReferrerByCode(referralCode);
    if (referrerEmail) {
      const stats = await referralDB.getReferrerStats(referrerEmail);
      if (stats) {
        // Send email notification
        await emailService.sendReferralNotification(
          referrerEmail,
          referrerEmail.split('@')[0], // Use email username as name
          stats.completed_referrals,
          referralCode
        );
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Referral tracked successfully',
    });
  } catch (error) {
    console.error('Error tracking referral:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET endpoint to verify referral code validity
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const referralCode = searchParams.get('code');

    if (!referralCode) {
      return NextResponse.json(
        { error: 'Referral code required' },
        { status: 400 }
      );
    }

    const referrerEmail = await referralDB.getReferrerByCode(referralCode);
    if (!referrerEmail) {
      return NextResponse.json(
        { error: 'Invalid referral code' },
        { status: 404 }
      );
    }

    const stats = await referralDB.getReferrerStats(referrerEmail);
    return NextResponse.json({
      valid: true,
      referrerEmail,
      stats,
    });
  } catch (error) {
    console.error('Error verifying referral code:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

