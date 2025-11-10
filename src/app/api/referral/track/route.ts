import { NextResponse } from 'next/server';

// This would connect to a database in production
// For now, we'll use a simple in-memory store
const referralDatabase: Record<string, any> = {};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { referralCode, buyerEmail, productId, amount } = body;

    if (!referralCode || !buyerEmail || !productId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Record the referral
    const referralRecord = {
      id: `ref_${Date.now()}`,
      referralCode,
      buyerEmail,
      productId,
      amount,
      timestamp: new Date().toISOString(),
      status: 'pending',
    };

    // Store in database (mock for now)
    if (!referralDatabase[referralCode]) {
      referralDatabase[referralCode] = [];
    }
    referralDatabase[referralCode].push(referralRecord);

    return NextResponse.json({
      success: true,
      message: 'Referral tracked',
      recordId: referralRecord.id,
    });
  } catch (error) {
    console.error('Error tracking referral:', error);
    return NextResponse.json(
      { error: 'Failed to track referral' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const referralCode = searchParams.get('code');

    if (!referralCode) {
      return NextResponse.json(
        { error: 'Referral code required' },
        { status: 400 }
      );
    }

    const records = referralDatabase[referralCode] || [];
    const completedCount = records.filter((r: any) => r.status === 'completed').length;
    const freePacksEarned = Math.floor(completedCount / 5);

    return NextResponse.json({
      referralCode,
      totalReferrals: records.length,
      completedReferrals: completedCount,
      freePacksEarned,
      records,
    });
  } catch (error) {
    console.error('Error fetching referral data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch referral data' },
      { status: 500 }
    );
  }
}

