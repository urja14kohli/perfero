import LegalLayout from '@/components/LegalLayout';

export const metadata = {
  title: 'Refund & Returns Policy • PERFÉRO',
  description: 'Learn about returning products and obtaining refunds from PERFÉRO Fragrance.',
};

export default function RefundPage() {
  const updated = '28 October 2025';
  
  const sections = [
    { id: 'intro', label: 'Introduction' },
    { id: 'eligibility', label: 'Return Eligibility' },
    { id: 'non-returnable', label: 'Non-Returnable Items' },
    { id: 'process', label: 'Return Process' },
    { id: 'condition', label: 'Product Condition' },
    { id: 'refunds', label: 'Refunds' },
    { id: 'exchanges', label: 'Exchanges' },
    { id: 'shipping-costs', label: 'Shipping Costs' },
    { id: 'damages', label: 'Damaged or Defective Items' },
    { id: 'cancellation', label: 'Order Cancellation' },
    { id: 'timeline', label: 'Processing Timeline' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <LegalLayout title="Refund & Returns Policy" updated={updated} sections={sections}>
      <h2 id="intro">Introduction</h2>
      <p>
        At PERFÉRO Fragrance, we want you to be completely satisfied with your purchase. If for any reason 
        you are not satisfied with your order, we offer a 30-day return policy on eligible items. This policy 
        outlines the terms and conditions for returns, refunds, and exchanges.
      </p>
      <p>
        Please read this policy carefully before initiating a return. If you have any questions, our customer 
        service team is here to help at <a href="mailto:support@perferofragrance.com">support@perferofragrance.com</a>.
      </p>

      <h2 id="eligibility">Return Eligibility</h2>
      <p>
        To be eligible for a return, your purchase must meet the following conditions:
      </p>
      <ul>
        <li>
          <strong>Time Frame:</strong> You must initiate the return within 30 days from the date of delivery. 
          Returns requested after this period will not be accepted.
        </li>
        <li>
          <strong>Proof of Purchase:</strong> You must provide proof of purchase, such as your order number 
          and email receipt. Orders without proof of purchase cannot be returned.
        </li>
        <li>
          <strong>Product Condition:</strong> Items must be unused, unopened, sealed in their original packaging, 
          and in the same condition as received. Products that show signs of use or damage will not be accepted.
        </li>
        <li>
          <strong>Original Packaging:</strong> All items must be returned in their original packaging, including 
          any accompanying materials, documentation, and accessories.
        </li>
        <li>
          <strong>Purchase Location:</strong> This policy applies only to products purchased directly from 
          <a href="https://www.perferofragrance.com">www.perferofragrance.com</a>. Products purchased from 
          third-party retailers are subject to their respective return policies.
        </li>
      </ul>

      <h2 id="non-returnable">Non-Returnable Items</h2>
      <p>
        For hygiene, safety, and quality reasons, the following items cannot be returned:
      </p>
      <ul>
        <li>
          <strong>Opened or Used Fragrances:</strong> Once a perfume bottle or fragrance product has been 
          opened, used, or its seal has been broken, it cannot be returned for hygiene and safety reasons.
        </li>
        <li>
          <strong>Gift Cards:</strong> Digital or physical gift cards are non-returnable and non-refundable 
          once purchased.
        </li>
        <li>
          <strong>Final Sale Items:</strong> Products marked as "Final Sale," "Clearance," or "Non-Returnable" 
          at the time of purchase cannot be returned.
        </li>
        <li>
          <strong>Promotional Items:</strong> Free promotional items, samples, and gifts with purchase are 
          non-returnable.
        </li>
        <li>
          <strong>Customized or Personalized Products:</strong> Any products that have been customized or 
          personalized for you cannot be returned.
        </li>
      </ul>
      <p>
        These exclusions are in place to maintain product quality and hygiene standards. We appreciate your 
        understanding.
      </p>

      <h2 id="process">Return Process</h2>
      <p>
        Follow these steps to initiate a return:
      </p>

      <h3>Step 1: Contact Customer Service</h3>
      <p>
        Email us at <a href="mailto:support@perferofragrance.com">support@perferofragrance.com</a> with the 
        following information:
      </p>
      <ul>
        <li>Your order number</li>
        <li>Name and email address used for the order</li>
        <li>Product name(s) you wish to return</li>
        <li>Reason for return</li>
        <li>Photos of the product (if applicable, especially for damaged or defective items)</li>
      </ul>

      <h3>Step 2: Receive Return Authorization</h3>
      <p>
        Our customer service team will review your request within 1-2 business days. If your return is approved, 
        we will provide you with:
      </p>
      <ul>
        <li>Return Authorization (RA) number</li>
        <li>Return shipping address</li>
        <li>Instructions for packaging and shipping your return</li>
      </ul>
      <p>
        <strong>Important:</strong> Do not ship items back without a Return Authorization number. Unauthorized 
        returns may not be processed, and you may not receive a refund.
      </p>

      <h3>Step 3: Package Your Return</h3>
      <p>
        Carefully package the items you are returning:
      </p>
      <ul>
        <li>Include all original packaging, tags, and accessories</li>
        <li>Write your RA number clearly on the outside of the package</li>
        <li>Include a copy of your order receipt or packing slip</li>
        <li>Use a shipping method that provides tracking</li>
      </ul>

      <h3>Step 4: Ship Your Return</h3>
      <p>
        Ship the package to the address provided by our customer service team. Keep your shipping receipt and 
        tracking number for your records. We are not responsible for returns lost in transit.
      </p>

      <h2 id="condition">Product Condition Requirements</h2>
      <p>
        To ensure your return is accepted, please note:
      </p>
      <ul>
        <li>Products must be in their original, sealed packaging</li>
        <li>No signs of use, wear, or damage</li>
        <li>All seals, security stickers, and shrink wrap must be intact</li>
        <li>No labels or stickers should be affixed directly to the product packaging</li>
        <li>All included items, such as gift boxes, cards, or promotional materials, must be returned</li>
      </ul>
      <p>
        Items that do not meet these condition requirements will be returned to you at your expense, and no 
        refund will be issued.
      </p>

      <h2 id="refunds">Refunds</h2>
      
      <h3>Refund Method</h3>
      <p>
        Once we receive and inspect your returned items, we will process your refund within 5-7 business days. 
        Refunds will be issued to the original payment method used for the purchase:
      </p>
      <ul>
        <li><strong>Credit/Debit Cards:</strong> 5-10 business days from refund processing</li>
        <li><strong>UPI/Net Banking:</strong> 3-5 business days from refund processing</li>
        <li><strong>Wallet Payments:</strong> 2-3 business days from refund processing</li>
      </ul>
      <p>
        The actual time for the refund to appear in your account depends on your payment provider and may vary.
      </p>

      <h3>Refund Amount</h3>
      <p>
        The refund will include:
      </p>
      <ul>
        <li>Full product price</li>
        <li>Any taxes paid</li>
        <li>Original shipping charges (if the return is due to our error or a defective product)</li>
      </ul>
      <p>
        The refund will <strong>not</strong> include:
      </p>
      <ul>
        <li>Return shipping costs (unless the return is due to our error)</li>
        <li>Original shipping charges (for standard returns)</li>
        <li>Gift wrapping or special packaging fees</li>
      </ul>

      <h3>Partial Refunds</h3>
      <p>
        Partial refunds may be issued in the following circumstances:
      </p>
      <ul>
        <li>Items returned without original packaging or accessories</li>
        <li>Items with visible signs of use (subject to evaluation)</li>
        <li>Items returned after the 30-day return window but within 45 days (at our discretion)</li>
      </ul>

      <h2 id="exchanges">Exchanges</h2>
      <p>
        We currently do not offer direct product exchanges. If you would like a different product:
      </p>
      <ol>
        <li>Return the original product following our return process</li>
        <li>Once your return is processed and refunded, place a new order for the desired item</li>
      </ol>
      <p>
        This ensures you receive your preferred product quickly without waiting for the exchange processing.
      </p>
      <p>
        <strong>Exception:</strong> If you received a damaged or defective product, we can expedite a replacement. 
        Contact us immediately at <a href="mailto:support@perferofragrance.com">support@perferofragrance.com</a> 
        with photos of the damage or defect.
      </p>

      <h2 id="shipping-costs">Shipping Costs for Returns</h2>
      
      <h3>Standard Returns</h3>
      <p>
        For standard returns (change of mind, ordered wrong product, etc.), you are responsible for return 
        shipping costs. We recommend using a trackable shipping service and purchasing shipping insurance. 
        We are not responsible for returns lost or damaged in transit.
      </p>

      <h3>Our Error or Defective Products</h3>
      <p>
        If we made an error (wrong item sent, damaged in shipping, defective product), we will cover the return 
        shipping costs. Contact us for a prepaid return label or reimbursement instructions.
      </p>

      <h2 id="damages">Damaged, Defective, or Incorrect Items</h2>
      <p>
        If you receive a damaged, defective, or incorrect item, please contact us immediately:
      </p>

      <h3>Reporting Issues</h3>
      <ul>
        <li>
          <strong>Within 48 Hours:</strong> Report any issues within 48 hours of delivery for fastest resolution
        </li>
        <li>
          <strong>Photo Evidence:</strong> Provide clear photos of the damaged/defective item and packaging
        </li>
        <li>
          <strong>Description:</strong> Describe the issue in detail so we can assist you better
        </li>
      </ul>

      <h3>Resolution Options</h3>
      <p>
        We will offer one of the following solutions:
      </p>
      <ul>
        <li>Full refund to your original payment method</li>
        <li>Replacement product shipped at no additional cost</li>
        <li>Store credit for future purchases (at your preference)</li>
      </ul>
      <p>
        We may request that you return the damaged or defective item, and we will provide a prepaid return label.
      </p>

      <h2 id="cancellation">Order Cancellation</h2>
      
      <h3>Before Dispatch</h3>
      <p>
        You may cancel your order free of charge if it has not yet been dispatched. To cancel:
      </p>
      <ul>
        <li>Contact us at <a href="mailto:support@perferofragrance.com">support@perferofragrance.com</a> with 
        your order number</li>
        <li>Cancellations must be requested within 24 hours of placing the order</li>
        <li>Once canceled, refunds will be processed within 3-5 business days</li>
      </ul>

      <h3>After Dispatch</h3>
      <p>
        Once an order has been dispatched, it cannot be canceled. You may refuse delivery or return the items 
        following our standard return policy once received.
      </p>

      <h2 id="timeline">Processing Timeline Summary</h2>
      <p>
        Here's what to expect during the return and refund process:
      </p>
      <ul>
        <li><strong>Return Request Review:</strong> 1-2 business days</li>
        <li><strong>Return Shipping Time:</strong> 5-7 business days (varies by location)</li>
        <li><strong>Inspection & Approval:</strong> 2-3 business days after receiving your return</li>
        <li><strong>Refund Processing:</strong> 5-7 business days after approval</li>
        <li><strong>Bank/Payment Provider Processing:</strong> 2-10 business days depending on provider</li>
      </ul>
      <p>
        <strong>Total Estimated Time:</strong> 15-29 business days from initiating your return to receiving 
        your refund. We will keep you updated via email throughout the process.
      </p>

      <h2 id="special-considerations">Special Considerations</h2>
      
      <h3>Gift Returns</h3>
      <p>
        If you received an item as a gift and would like to return it:
      </p>
      <ul>
        <li>Contact us with the recipient's name and delivery address</li>
        <li>We will verify the order and provide return instructions</li>
        <li>Refunds for gifts can be issued as store credit or to the original purchaser (at their request)</li>
      </ul>

      <h3>Multiple Item Orders</h3>
      <p>
        If you are returning some (but not all) items from an order:
      </p>
      <ul>
        <li>Clearly specify which items you are returning</li>
        <li>Partial refunds will be calculated based on the returned items</li>
        <li>If your order qualified for free shipping due to meeting the minimum order value, and the returned 
        items bring the order below that threshold, original shipping charges may be deducted from your refund</li>
      </ul>

      <h2 id="contact">Contact Us</h2>
      <p>
        Have questions about returns or need assistance? We're here to help:
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
      <p>
        Customer service hours: Monday-Saturday, 10:00 AM - 6:00 PM IST (excluding public holidays)
      </p>

      <p className="text-xs text-muted mt-10 pt-6 border-t border-line">
        This Refund & Returns Policy is subject to change without notice. The version in effect at the time 
        of your purchase applies to your order. We reserve the right to refuse returns that do not comply with 
        this policy. Consumer protection laws in your jurisdiction may provide additional rights beyond this policy.
      </p>
    </LegalLayout>
  );
}

