import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund, Return & Exchange Policy | PERFÉRO FRAGRANCE",
  description:
    "Refund, return, and exchange terms for PERFÉRO FRAGRANCE purchases.",
  robots: { index: true, follow: true },
};

export default function RefundReturnPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 leading-7 text-neutral-800">
      <header className="mb-10">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
          Returns & Refund Policy
        </h1>
        <p className="mt-2 text-sm text-neutral-500">
          Effective: <span className="font-medium">28 Oct 2025</span> · Last updated:{" "}
          <span className="font-medium">28 Oct 2025</span>
        </p>
      </header>

      <section className="[&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-semibold [&_p]:mt-3 [&_ul]:mt-3 [&_li]:mt-2">
        <p className="text-sm text-neutral-600">
          Thank you for shopping with <span className="font-medium">Perféro</span>. We stand behind the quality of our premium fragrances and take great care in their crafting and packaging. This Returns & Refund Policy outlines how we handle returns, exchanges, cancellations, and refunds for all purchases made at <span className="font-medium">https://www.perferofragrance.com</span>. We are committed to ensuring your complete satisfaction.
        </p>

        <h2>1) Eligibility window</h2>
        <ul className="list-disc pl-6">
          <li>
            <span className="font-medium">Return/Exchange request:</span> You must initiate return or exchange requests within <span className="font-medium">7 days</span> of delivery. Requests made after this period cannot be processed.
          </li>
          <li>
            <span className="font-medium">Damaged/defective/incorrect items:</span> If you receive a damaged, defective, or incorrect item, you must report it within <span className="font-medium">48 hours</span> of delivery. Please include clear unboxing photos or video evidence with your report.
          </li>
        </ul>

        <h2>2) Condition requirements</h2>
        <ul className="list-disc pl-6">
          <li>Items must be unused, unopened, and in their original, undamaged packaging.</li>
          <li>All original labels, security seals, and protective films must remain intact and unbroken.</li>
          <li>You must provide proof of purchase, including your order ID or original invoice.</li>
          <li>For items received in non-pristine condition, photographic documentation is required.</li>
        </ul>

        <h2>3) Non-returnable items (for hygiene and safety)</h2>
        <ul className="list-disc pl-6">
          <li>Opened, used, or partially used perfumes, fragrances, testers, or gift sets (once any component is unsealed).</li>
          <li>Items with damaged, missing, or tampered original packaging or seals.</li>
          <li>Complimentary gifts, promotional items, gift cards, e-vouchers, or samples (unless defective).</li>
          <li>Items purchased during final sale or clearance events (except for defects).</li>
        </ul>

        <h2>4) How to request a return or exchange</h2>
        <ol className="list-decimal pl-6">
          <li>
            Send an email to{" "}
            <a className="underline hover:text-gold transition-colors" href="mailto:support@perferofragrance.com">
              support@perferofragrance.com
            </a>{" "}
            within 7 days of delivery. Include your Order ID, order date, and a detailed reason for the return or exchange request.
          </li>
          <li>
            Attach clear, high-quality photos or videos showing: the outer packaging, inner box condition, product label, security seal, and the specific issue (if applicable).
          </li>
          <li>
            Wait for our team to review your request and provide approval and return shipping instructions before dispatching the item back to us.
          </li>
          <li>
            Ensure the item is packaged securely before shipping to prevent further damage.
          </li>
        </ol>

        <h2>5) Return shipping</h2>
        <ul className="list-disc pl-6">
          <li>
            <span className="font-medium">Our error (damaged, defective, wrong item):</span> If the return is due to our error, we will provide a prepaid return shipping label or arrange a free pickup from your location. Return shipping costs will be borne by Perféro.
          </li>
          <li>
            <span className="font-medium">Customer-initiated returns ("change of mind"):</span> If you are returning the item due to personal reasons and it meets all return conditions, you may return it at your own cost. Standard return shipping costs are the customer's responsibility.
          </li>
          <li>
            Please use the provided return shipping label (if applicable) and ship the item back securely to the address we provide.
          </li>
        </ul>

        <h2>6) Refund process</h2>
        <ul className="list-disc pl-6">
          <li>Upon receipt, we will inspect the returned item to verify it meets our return conditions. This inspection typically takes 3–5 business days.</li>
          <li>
            Once approved, your refund will be processed to your original payment method. Depending on your bank and payment method, the funds may take an additional 5–10 business days to appear in your account.
          </li>
          <li>
            Refunds are issued only to the original payment source or account. We cannot issue refunds to a different account, bank, or payment method.
          </li>
          <li>
            If return shipping was customer-paid, the shipping cost will not be refunded.
          </li>
        </ul>

        <h2>7) Exchanges</h2>
        <p>
          We are happy to arrange exchanges for defective items or to a different product, subject to stock availability. If the requested product is currently out of stock, we will offer you the choice to either wait for restocking (with a notification when available) or receive a full refund. Exchanges are processed in coordination with our team after approval of your exchange request.
        </p>

        <h2>8) Cancellations</h2>
        <ul className="list-disc pl-6">
          <li>Orders can be cancelled before they are dispatched. Please email <a className="underline hover:text-gold transition-colors" href="mailto:support@perferofragrance.com">support@perferofragrance.com</a> immediately with your Order ID if you wish to cancel.</li>
          <li>
            If an order has already been shipped, you may refuse delivery or follow the return procedure outlined in this policy if the item is eligible for return.
          </li>
          <li>
            Cancellation requests must be made as soon as possible to maximize the chance of cancellation before shipment.
          </li>
        </ul>

        <h2>9) Undeliverable or wrong address</h2>
        <ul className="list-disc pl-6">
          <li>
            If a parcel is returned by the courier due to an incorrect or incomplete address, repeated failed delivery attempts, or customer refusal, we have the option to either reship the item (at your cost) or process a refund after deducting the original shipping and handling charges.
          </li>
          <li>
            Please ensure the address provided during checkout is accurate and complete to avoid delivery issues.
          </li>
        </ul>

        <h2>10) Marketplace orders</h2>
        <p>
          For orders placed through third-party platforms such as Amazon, Flipkart, or other e-commerce marketplaces, please follow their respective return and refund procedures, as they may differ from this policy. Contact the marketplace's customer service for assistance with those orders.
        </p>

        <h2>11) Sale and discounted items</h2>
        <p>
          Items purchased during sales, clearance events, or with applied discount codes may have restricted return eligibility. Such items can typically only be returned or exchanged if they arrive damaged or defective. Please review the specific terms at the time of purchase. When in doubt, contact our support team.
        </p>

        <h2>12) Contact & support</h2>
        <p>
          <span className="font-medium">Customer Support Email:</span> <a className="underline hover:text-gold transition-colors" href="mailto:support@perferofragrance.com">support@perferofragrance.com</a><br />
          <span className="font-medium">Brand:</span> Perféro<br />
          <span className="font-medium">Company:</span> 7 ACE EXIM LLP<br />
          <span className="font-medium">Grievance Officer:</span> Available upon request at the email above
        </p>

        <h2>13) Governing law</h2>
        <p>
          This Returns & Refund Policy is governed by and construed in accordance with the laws of the <span className="font-medium">Republic of India</span>. Any disputes or claims arising out of or relating to this policy shall be subject to the exclusive jurisdiction of the courts located in <span className="font-medium">New Delhi, India</span>. This policy complies with the Indian Consumer Protection (E-Commerce) Rules 2020.
        </p>

        <hr className="my-10 border-neutral-200" />
        <p className="text-xs text-neutral-500">
          <span className="font-semibold">Important Note:</span> Due to hygiene and safety standards for fragrances, opened items cannot be accepted for return or refund. This policy complies with India's Consumer Protection (E-Commerce) Rules 2020 and the Digital Personal Data Protection Act 2023. For any disputes, consumers can also file complaints with the National Consumer Disputes Redressal Commission (NCDRC). Last updated 28 October 2025.
        </p>
      </section>
    </main>
  );
}
