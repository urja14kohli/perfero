import LegalLayout from '@/components/LegalLayout';

export const metadata = {
  title: 'Terms of Service • PERFÉRO',
  description: 'Terms and conditions for using PERFÉRO Fragrance website and purchasing our products.',
};

export default function TermsPage() {
  const updated = '28 October 2025';
  
  const sections = [
    { id: 'intro', label: 'Introduction' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'products', label: 'Products & Pricing' },
    { id: 'orders', label: 'Orders & Payment' },
    { id: 'shipping', label: 'Shipping & Delivery' },
    { id: 'returns', label: 'Returns & Refunds' },
    { id: 'intellectual', label: 'Intellectual Property' },
    { id: 'prohibited', label: 'Prohibited Uses' },
    { id: 'warranties', label: 'Warranties & Liability' },
    { id: 'indemnification', label: 'Indemnification' },
    { id: 'governing', label: 'Governing Law' },
    { id: 'disputes', label: 'Dispute Resolution' },
    { id: 'changes', label: 'Changes to Terms' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <LegalLayout title="Terms of Service" updated={updated} sections={sections}>
      <h2 id="intro">Introduction</h2>
      <p>
        Welcome to PERFÉRO Fragrance. These Terms of Service ("Terms") govern your access to and use of 
        our website <a href="https://www.perferofragrance.com">www.perferofragrance.com</a> and the purchase 
        of products from us. By accessing or using our website, you agree to be bound by these Terms.
      </p>
      <p>
        Please read these Terms carefully before using our services. If you do not agree with any part of 
        these Terms, you must not use our website or purchase our products.
      </p>

      <h2 id="eligibility">Eligibility</h2>
      <p>
        To use our website and purchase products, you must:
      </p>
      <ul>
        <li>Be at least 18 years of age or have the consent of a parent or legal guardian</li>
        <li>Have the legal capacity to enter into a binding contract</li>
        <li>Provide accurate, current, and complete information during registration and checkout</li>
        <li>Not be prohibited from using our services under applicable law</li>
      </ul>
      <p>
        By placing an order, you represent and warrant that you meet all eligibility requirements.
      </p>

      <h2 id="products">Products & Pricing</h2>
      
      <h3>Product Information</h3>
      <p>
        We strive to provide accurate descriptions, images, and information about our fragrance products. 
        However, we do not warrant that product descriptions, colors, or other content are accurate, complete, 
        or error-free. We reserve the right to correct any errors or inaccuracies and update information at 
        any time without prior notice.
      </p>

      <h3>Pricing</h3>
      <ul>
        <li>All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless otherwise stated</li>
        <li>Prices are subject to change without notice, but changes will not affect orders already placed</li>
        <li>We reserve the right to modify prices, discontinue products, or refuse orders at our discretion</li>
        <li>In case of a pricing error, we will contact you before processing your order</li>
      </ul>

      <h3>Product Availability</h3>
      <p>
        Product availability is subject to change. While we make every effort to keep our inventory updated, 
        items may become unavailable after you place an order. In such cases, we will notify you and offer a 
        refund or alternative product.
      </p>

      <h2 id="orders">Orders & Payment</h2>
      
      <h3>Placing an Order</h3>
      <p>
        When you place an order through our website, you are making an offer to purchase products at the 
        stated price. We reserve the right to accept or decline your order for any reason, including but 
        not limited to product availability, errors in pricing or product information, or suspected fraudulent 
        activity.
      </p>
      <p>
        An order confirmation email does not constitute acceptance of your order. Acceptance occurs when we 
        dispatch the products to you, at which point a contract is formed between you and PERFÉRO Fragrance.
      </p>

      <h3>Payment</h3>
      <ul>
        <li>
          Payment is processed securely through our payment partner Razorpay, which supports credit cards, 
          debit cards, UPI, net banking, and other payment methods
        </li>
        <li>Payment must be received in full before orders are dispatched</li>
        <li>All transactions are subject to validation and authorization by your payment provider</li>
        <li>We do not store your payment card information; this is handled securely by Razorpay</li>
        <li>In case of payment failure, your order will not be processed</li>
      </ul>

      <h3>Order Cancellation</h3>
      <p>
        You may cancel your order before it is dispatched by contacting us at <a href="mailto:support@perferofragrance.com">support@perferofragrance.com</a>. 
        Once an order has been dispatched, our Returns & Refunds policy applies.
      </p>

      <h2 id="shipping">Shipping & Delivery</h2>
      
      <h3>Shipping Areas</h3>
      <p>
        We currently ship to addresses within India only. Please ensure your shipping address is complete 
        and accurate, as we are not responsible for orders shipped to incorrect addresses provided by you.
      </p>

      <h3>Shipping Costs & Timing</h3>
      <ul>
        <li>Standard shipping is FREE on all orders above ₹1,000</li>
        <li>Orders below ₹1,000 are subject to a standard shipping fee calculated at checkout</li>
        <li>Orders are typically dispatched within 2-4 business days (Monday-Friday, excluding public holidays)</li>
        <li>Estimated delivery times are 5-7 business days for most locations, though actual delivery may vary</li>
        <li>Remote or rural areas may experience longer delivery times</li>
      </ul>

      <h3>Risk of Loss</h3>
      <p>
        Risk of loss and title for products pass to you upon delivery to the shipping carrier. We are not 
        responsible for lost or stolen packages confirmed to be delivered to the address provided at checkout.
      </p>

      <h2 id="returns">Returns & Refunds</h2>
      <p>
        Please refer to our <a href="/refund">Refund & Returns Policy</a> for detailed information about 
        returning products and obtaining refunds. Key points include:
      </p>
      <ul>
        <li>30-day return window from date of delivery</li>
        <li>Products must be unused, sealed, and in original packaging</li>
        <li>Proof of purchase required</li>
        <li>Certain items are non-returnable (opened bottles, gift cards, final sale items)</li>
      </ul>

      <h2 id="intellectual">Intellectual Property</h2>
      <p>
        All content on our website, including but not limited to text, graphics, logos, images, product 
        descriptions, photographs, and software, is the property of PERFÉRO Fragrance or its content suppliers 
        and is protected by Indian and international copyright, trademark, and other intellectual property laws.
      </p>

      <h3>Trademarks</h3>
      <p>
        PERFÉRO, the PERFÉRO logo, and all related product names are trademarks of 7 ACE EXIM LLP. You may 
        not use these trademarks without our prior written permission.
      </p>

      <h3>Limited License</h3>
      <p>
        You are granted a limited, non-exclusive, non-transferable license to access and use our website for 
        personal, non-commercial purposes. You may not:
      </p>
      <ul>
        <li>Reproduce, distribute, or publicly display any content without permission</li>
        <li>Modify or create derivative works from our content</li>
        <li>Use any automated systems (bots, scrapers) to access our website</li>
        <li>Reverse engineer or attempt to access source code</li>
      </ul>

      <h2 id="prohibited">Prohibited Uses</h2>
      <p>
        You agree not to use our website or services for any unlawful purpose or in any way that:
      </p>
      <ul>
        <li>Violates applicable laws or regulations</li>
        <li>Infringes intellectual property rights of others</li>
        <li>Harasses, abuses, or harms another person</li>
        <li>Transmits viruses, malware, or other harmful code</li>
        <li>Attempts to gain unauthorized access to our systems</li>
        <li>Impersonates any person or entity</li>
        <li>Engages in fraudulent or deceptive practices</li>
        <li>Interferes with the proper functioning of our website</li>
      </ul>
      <p>
        We reserve the right to terminate your access for violating these prohibited uses.
      </p>

      <h2 id="warranties">Warranties & Limitation of Liability</h2>
      
      <h3>Product Warranties</h3>
      <p>
        Our products are sold "as is" to the extent permitted by law. We warrant that our products conform 
        to their descriptions and are free from defects in materials and workmanship under normal use. This 
        warranty does not cover:
      </p>
      <ul>
        <li>Damage caused by misuse, abuse, or improper storage</li>
        <li>Normal wear and tear</li>
        <li>Allergic reactions or sensitivities to fragrance ingredients</li>
        <li>Products purchased from unauthorized sellers</li>
      </ul>

      <h3>Website Disclaimer</h3>
      <p>
        Our website is provided on an "as is" and "as available" basis. We make no warranties or representations 
        about the accuracy, reliability, or availability of our website. To the fullest extent permitted by law, 
        we disclaim all warranties, express or implied, including warranties of merchantability, fitness for a 
        particular purpose, and non-infringement.
      </p>

      <h3>Limitation of Liability</h3>
      <p>
        To the maximum extent permitted by law, PERFÉRO Fragrance, its directors, employees, and affiliates 
        shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including 
        but not limited to loss of profits, data, or business opportunities, arising out of or related to:
      </p>
      <ul>
        <li>Your use of or inability to use our website or products</li>
        <li>Any errors or omissions in content</li>
        <li>Unauthorized access to your information</li>
        <li>Delays or disruptions in service</li>
      </ul>
      <p>
        Our total liability for any claim arising out of these Terms shall not exceed the amount you paid for 
        the product(s) in question, or ₹5,000, whichever is lower.
      </p>
      <p>
        Some jurisdictions do not allow limitations on implied warranties or liability for incidental or 
        consequential damages, so some of the above limitations may not apply to you. You may have specific 
        legal rights that vary by jurisdiction.
      </p>

      <h2 id="indemnification">Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless PERFÉRO Fragrance, 7 ACE EXIM LLP, and our officers, 
        directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses 
        (including reasonable attorneys' fees) arising out of or related to:
      </p>
      <ul>
        <li>Your violation of these Terms</li>
        <li>Your violation of any law or the rights of a third party</li>
        <li>Your use of our website or products</li>
        <li>Any content you submit to our website</li>
      </ul>

      <h2 id="governing">Governing Law</h2>
      <p>
        These Terms and any disputes arising out of or related to them shall be governed by and construed in 
        accordance with the laws of India, without regard to conflict of law principles. The United Nations 
        Convention on Contracts for the International Sale of Goods does not apply.
      </p>

      <h2 id="disputes">Dispute Resolution</h2>
      
      <h3>Informal Resolution</h3>
      <p>
        Before filing any formal dispute, you agree to first contact us at <a href="mailto:support@perferofragrance.com">support@perferofragrance.com</a> and 
        attempt to resolve the issue informally. We will make good-faith efforts to resolve any disputes amicably.
      </p>

      <h3>Jurisdiction & Venue</h3>
      <p>
        Any disputes that cannot be resolved informally shall be subject to the exclusive jurisdiction of the 
        courts located in New Delhi, India. You agree to submit to the personal jurisdiction of these courts.
      </p>

      <h3>Arbitration</h3>
      <p>
        For disputes involving amounts less than ₹50,000, you and PERFÉRO Fragrance agree to resolve the 
        dispute through binding arbitration in accordance with the Arbitration and Conciliation Act, 1996. 
        The arbitration shall be conducted in New Delhi by a single arbitrator mutually agreed upon by both parties.
      </p>

      <h2 id="changes">Changes to These Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. When we make changes, we will update the 
        "Last updated" date at the top of this page. Material changes will be communicated through our website 
        or via email.
      </p>
      <p>
        Your continued use of our website and services after such changes constitutes acceptance of the updated 
        Terms. If you do not agree with the modified Terms, you must discontinue use of our services.
      </p>

      <h2 id="severability">Severability & Waiver</h2>
      <p>
        If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall 
        remain in full force and effect. Our failure to enforce any right or provision shall not constitute a 
        waiver of that right or provision.
      </p>

      <h2 id="entire">Entire Agreement</h2>
      <p>
        These Terms, together with our Privacy Policy and Refund & Returns Policy, constitute the entire 
        agreement between you and PERFÉRO Fragrance regarding the use of our website and purchase of products, 
        superseding any prior agreements.
      </p>

      <h2 id="contact">Contact Us</h2>
      <p>
        If you have any questions or concerns about these Terms of Service, please contact us:
      </p>
      <p>
        <strong>PERFÉRO Fragrance</strong><br />
        7 ACE EXIM LLP<br />
        New Delhi, India
      </p>
      <p>
        Email: <a href="mailto:support@perferofragrance.com">support@perferofragrance.com</a><br />
        Phone: <a href="tel:+919821209804">+91 9821209804</a><br />
        Website: <a href="https://www.perferofragrance.com">www.perferofragrance.com</a>
      </p>

      <p className="text-xs text-muted mt-10 pt-6 border-t border-line">
        These Terms of Service are provided for clarity and transparency. They do not create additional rights 
        beyond those provided by law. Please consult with legal counsel for specific questions about your rights 
        and obligations.
      </p>
    </LegalLayout>
  );
}

