import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function GET(request: NextRequest) {
  try {
    console.log('🧪 TEST: Checking Resend API Key...');
    console.log('🔑 API Key exists:', !!process.env.RESEND_API_KEY);
    console.log('🔑 API Key value (first 10 chars):', process.env.RESEND_API_KEY?.substring(0, 10));

    const resend = new Resend(process.env.RESEND_API_KEY);

    console.log('📧 TEST: Sending test email...');
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'delivered@resend.dev',
      subject: 'Test Email from Perféro',
      html: '<h1>Test Email</h1><p>If you received this, Resend is working!</p>',
    });

    console.log('✅ TEST: Result:', result);
    
    return NextResponse.json({
      success: true,
      message: 'Test email sent to Resend test recipient',
      result,
    });
  } catch (error: any) {
    console.error('❌ TEST: Error:', error);
    return NextResponse.json(
      {
        error: true,
        message: error?.message || 'Unknown error',
        details: {
          message: error?.message,
          status: error?.status,
          statusCode: error?.statusCode,
        },
      },
      { status: 500 }
    );
  }
}

