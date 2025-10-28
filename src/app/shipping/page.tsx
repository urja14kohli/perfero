import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Info | PERFÉRO FRAGRANCE",
  description:
    "Information about shipping options and delivery times for PERFÉRO FRAGRANCE.",
  robots: { index: true, follow: true },
};

export default function ShippingPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 leading-7 text-neutral-800">
      <header className="mb-10">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
          Shipping Information
        </h1>
        <p className="mt-2 text-sm text-neutral-500">
          Effective: <span className="font-medium">28 Oct 2025</span> · Last updated:{" "}
          <span className="font-medium">28 Oct 2025</span>
        </p>
      </header>

      <section className="[&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-semibold [&_p]:mt-3 [&_ul]:mt-3 [&_li]:mt-2">
        <p className="text-sm text-neutral-600">
          Welcome to the shipping information page of <span className="font-medium">Perféro</span>. We are committed to delivering your premium fragrances safely and promptly. This page provides comprehensive details about our shipping options, delivery times, and related information to help you track and plan for your order.
        </p>

        <h2>1) Shipping Options</h2>
        <p>
          We offer multiple shipping methods to suit your needs and preferences:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <span className="font-medium">Standard Shipping:</span> Economical option with estimated delivery within 5-7 business days from order confirmation.
          </li>
          <li>
            <span className="font-medium">Express Shipping:</span> Fast-track delivery option with estimated delivery within 2-3 business days from order confirmation.
          </li>
          <li>
            <span className="font-medium">Priority Shipping:</span> Premium service for urgent deliveries, with estimated delivery within 1-2 business days.
          </li>
        </ul>
        <p>
          All shipping options are available during checkout. Select the option that best fits your timeline and budget.
        </p>

        <h2>2) Delivery Times</h2>
        <p>
          Delivery timeframes depend on your location, the shipping method selected, and current logistics conditions:
        </p>
        <ul className="list-disc pl-6">
          <li><span className="font-medium">Domestic (India):</span> Standard 5-7 business days, Express 2-3 business days, Priority 1-2 business days.</li>
          <li><span className="font-medium">Processing time:</span> Orders are typically processed within 1-2 business days after confirmation.</li>
          <li><span className="font-medium">Weekends & holidays:</span> Delivery times exclude weekends and public holidays.</li>
          <li>Estimated delivery times are provided at checkout and updated via email.</li>
        </ul>

        <h2>3) International Shipping</h2>
        <p>
          We ship to select international destinations. International orders may be subject to:
        </p>
        <ul className="list-disc pl-6">
          <li>Extended delivery times (typically 10-21 business days depending on destination).</li>
          <li>Additional customs duties, import taxes, and handling fees charged by the destination country.</li>
          <li>These additional costs are the responsibility of the recipient and not included in the order total.</li>
          <li>Please verify import regulations in your country, as some fragrance products may have restrictions.</li>
        </ul>
        <p>
          Contact us for international shipping inquiries: <a className="underline hover:text-gold transition-colors" href="mailto:support@perferofragrance.com">support@perferofragrance.com</a>
        </p>

        <h2>4) Order Tracking</h2>
        <p>
          Once your order ships, you will receive an email notification with:
        </p>
        <ul className="list-disc pl-6">
          <li>Your tracking number and carrier information.</li>
          <li>A direct link to track your shipment in real-time.</li>
          <li>Estimated delivery date based on current courier updates.</li>
          <li>Regular delivery status updates as your package moves through the logistics network.</li>
        </ul>
        <p>
          You can also check your order status anytime by contacting our support team with your Order ID.
        </p>

        <h2>5) Shipping Address & Accuracy</h2>
        <p>
          To ensure successful delivery:
        </p>
        <ul className="list-disc pl-6">
          <li>Verify that your shipping address is complete and accurate at checkout.</li>
          <li>Include building/house number, street name, landmark, city, postal code, and contact phone number.</li>
          <li>For apartment buildings, clearly mention the flat/unit number and building name.</li>
          <li>We are not responsible for delays or non-delivery due to incorrect or incomplete addresses.</li>
          <li>If you need to change your address, do so immediately before the order ships.</li>
        </ul>

        <h2>6) Returns and Refunds</h2>
        <p>
          For complete information about our returns and refund policies, including return shipping procedures and refund timelines, please refer to our <a href="/refund" className="underline hover:text-gold transition-colors">Returns & Refund Policy</a> page. 
        </p>

        <h2>7) Shipping to Remote Areas</h2>
        <p>
          Delivery to remote or rural areas may incur additional shipping charges and extended delivery times. Your cart will display applicable surcharges during checkout. Some remote locations may not be serviceable; if this applies to you, we will notify you during the ordering process.
        </p>

        <h2>8) Insurance & Damage Claims</h2>
        <p>
          All packages are carefully packaged to prevent damage. If you receive a damaged item:
        </p>
        <ul className="list-disc pl-6">
          <li>Report the damage within 48 hours of delivery with photographic evidence.</li>
          <li>Include your Order ID and detailed description of the damage.</li>
          <li>Send your report to <a className="underline hover:text-gold transition-colors" href="mailto:support@perferofragrance.com">support@perferofragrance.com</a>.</li>
          <li>We will arrange a replacement or refund after verifying the damage claim.</li>
        </ul>

        <h2>9) Undelivered Packages</h2>
        <p>
          If a package cannot be delivered:
        </p>
        <ul className="list-disc pl-6">
          <li>The carrier will attempt redelivery based on local policies.</li>
          <li>Repeated failed deliveries may result in the package being returned to us.</li>
          <li>You will be notified of any redelivery attempts or returns via email.</li>
          <li>Returned packages may be subject to restocking fees or a full refund after deducting shipping costs.</li>
        </ul>

        <h2>10) Seasonal & Peak Periods</h2>
        <p>
          During peak seasons (holidays, festivals, major sales events), delivery times may be extended due to high order volumes. We appreciate your patience during these periods. Order early to ensure timely delivery for special occasions.
        </p>

        <h2>11) Customer Support</h2>
        <p>
          If you have any questions, concerns, or issues with your shipment, please contact us:
        </p>
        <ul className="list-disc pl-6">
          <li><span className="font-medium">Email:</span> <a className="underline hover:text-gold transition-colors" href="mailto:support@perferofragrance.com">support@perferofragrance.com</a></li>
          <li><span className="font-medium">Brand:</span> Perféro</li>
          <li><span className="font-medium">Company:</span> 7 ACE EXIM LLP</li>
          <li>We aim to respond to all inquiries within 24 business hours.</li>
        </ul>

        <hr className="my-10 border-neutral-200" />
        <p className="text-xs text-neutral-500">
          <span className="font-semibold">Note:</span> Shipping information is subject to change based on logistics partners, carrier policies, and external factors. We recommend checking this page regularly for updates. Estimated delivery times are based on standard operating conditions and may vary. Last updated 28 October 2025.
        </p>
      </section>
    </main>
  );
}
