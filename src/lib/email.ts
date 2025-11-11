import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const SENDER_EMAIL = 'noreply@perferofragrance.com';
const SENDER_NAME = 'Perféro';

export const emailService = {
  // Send referral notification email
  async sendReferralNotification(
    referrerEmail: string,
    referrerName: string,
    currentCount: number,
    referralCode: string
  ): Promise<boolean> {
    try {
      const remaining = Math.max(0, 5 - currentCount);
      const isComplete = currentCount >= 5;

      if (isComplete) {
        // Send free pack earned email
        await resend.emails.send({
          from: `${SENDER_NAME} <${SENDER_EMAIL}>`,
          to: referrerEmail,
          subject: '🎉 Congratulations! You Earned a FREE Gift Pack!',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #B8860B; text-align: center;">Wow! You Did It! 🎉</h2>
              <p style="font-size: 16px; color: #333;">Hi ${referrerName},</p>
              <p style="font-size: 16px; color: #333;">
                Amazing news! You've successfully referred 5 friends who purchased our Perféro Gift Pack!
              </p>
              
              <div style="background: #F6F1E6; border-left: 4px solid #B8860B; padding: 20px; margin: 20px 0; border-radius: 5px;">
                <p style="font-size: 18px; color: #000; margin: 0;">
                  <strong>Your Free Gift Pack is Ready!</strong>
                </p>
                <p style="font-size: 14px; color: #666; margin: 10px 0 0 0;">
                  Value: ₹799
                </p>
              </div>

              <div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <p style="font-size: 14px; color: #333; margin: 0;">
                  <strong>Your Redemption Code:</strong>
                </p>
                <p style="font-size: 20px; color: #B8860B; font-weight: bold; margin: 10px 0;">
                  REFERAL${referralCode}
                </p>
                <p style="font-size: 12px; color: #666;">
                  Use this code at checkout to get your FREE gift pack!
                </p>
              </div>

              <a href="https://perferofragrance.com/shop" style="display: inline-block; background: #B8860B; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; font-weight: bold;">
                Claim Your Free Pack
              </a>

              <p style="font-size: 14px; color: #666; margin-top: 30px;">
                Thank you for spreading the word about Perféro! Your friends have great taste! 👃
              </p>
              
              <p style="font-size: 12px; color: #999; margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">
                © 2024 Perféro. All rights reserved.
              </p>
            </div>
          `,
        });
      } else {
        // Send progress update email
        await resend.emails.send({
          from: `${SENDER_NAME} <${SENDER_EMAIL}>`,
          to: referrerEmail,
          subject: `Great News! You're ${currentCount}/5 Referrals Away from a FREE Gift Pack`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #B8860B; text-align: center;">Referral Progress Update</h2>
              <p style="font-size: 16px; color: #333;">Hi ${referrerName},</p>
              <p style="font-size: 16px; color: #333;">
                Excellent! Someone just purchased Perféro using your referral code. You're making great progress!
              </p>
              
              <div style="background: #F6F1E6; padding: 30px; border-radius: 10px; text-align: center; margin: 30px 0;">
                <p style="font-size: 14px; color: #666; margin: 0;">Your Progress</p>
                <p style="font-size: 36px; color: #B8860B; font-weight: bold; margin: 10px 0;">
                  ${currentCount} <span style="font-size: 24px;">/ 5</span>
                </p>
                
                <div style="background: white; height: 20px; border-radius: 10px; overflow: hidden; margin: 20px 0;">
                  <div style="background: #B8860B; height: 100%; width: ${(currentCount / 5) * 100}%; transition: width 0.3s;">
                  </div>
                </div>
                
                <p style="font-size: 14px; color: #666; margin: 10px 0;">
                  <strong>${remaining} more referrals to go!</strong>
                </p>
              </div>

              <p style="font-size: 14px; color: #333; margin: 20px 0;">
                Keep sharing your unique referral code with friends and family! Each purchase brings you closer to your FREE ₹799 Gift Pack!
              </p>

              <div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <p style="font-size: 12px; color: #666; margin: 0;">
                  <strong>Your Referral Code:</strong>
                </p>
                <p style="font-size: 18px; color: #B8860B; font-weight: bold; margin: 8px 0;">
                  ${referralCode}
                </p>
                <p style="font-size: 11px; color: #666; margin: 8px 0;">
                  Share: https://perferofragrance.com/shop?ref=${referralCode}
                </p>
              </div>

              <p style="font-size: 14px; color: #666; margin-top: 30px;">
                Thank you for believing in Perféro!
              </p>
              
              <p style="font-size: 12px; color: #999; margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">
                © 2024 Perféro. All rights reserved.
              </p>
            </div>
          `,
        });
      }

      return true;
    } catch (error) {
      console.error('Error sending referral email:', error);
      return false;
    }
  },

  // Send welcome email with referral code
  async sendWelcomeEmail(email: string, name: string, referralCode: string): Promise<boolean> {
    try {
      await resend.emails.send({
        from: `${SENDER_NAME} <${SENDER_EMAIL}>`,
        to: email,
        subject: 'Welcome to Perféro Referral Program!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #B8860B; text-align: center;">Welcome to Perféro Referral Program!</h2>
            <p style="font-size: 16px; color: #333;">Hi ${name},</p>
            <p style="font-size: 16px; color: #333;">
              Thank you for joining our referral program! Now you can earn FREE Gift Packs by sharing Perféro with your friends.
            </p>
            
            <div style="background: #F6F1E6; padding: 20px; border-radius: 10px; margin: 30px 0;">
              <p style="font-size: 14px; color: #666; margin: 0 0 10px 0;">
                <strong>How It Works:</strong>
              </p>
              <ol style="font-size: 14px; color: #333;">
                <li>Share your referral code with friends</li>
                <li>When they buy using your code, you get a referral</li>
                <li>After 5 referrals, earn a FREE Perféro Gift Pack (₹799 value)!</li>
              </ol>
            </div>

            <div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p style="font-size: 12px; color: #666; margin: 0 0 5px 0;">
                <strong>Your Referral Code:</strong>
              </p>
              <p style="font-size: 20px; color: #B8860B; font-weight: bold; margin: 8px 0;">
                ${referralCode}
              </p>
              <p style="font-size: 11px; color: #666; margin: 8px 0;">
                Share link: https://perferofragrance.com/shop?ref=${referralCode}
              </p>
            </div>

            <a href="https://perferofragrance.com/shop?ref=${referralCode}" style="display: inline-block; background: #B8860B; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">
              Start Referring Now
            </a>

            <p style="font-size: 14px; color: #666; margin-top: 30px;">
              Questions? Reply to this email or visit our Help Center.
            </p>
            
            <p style="font-size: 12px; color: #999; margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">
              © 2024 Perféro. All rights reserved.
            </p>
          </div>
        `,
      });

      return true;
    } catch (error) {
      console.error('Error sending welcome email:', error);
      return false;
    }
  },
};

