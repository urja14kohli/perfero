import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | PERFÉRO FRAGRANCE",
  description:
    "Terms of Service for PERFÉRO FRAGRANCE governing use of our website and purchases.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 leading-7 text-neutral-800">
      <header className="mb-10">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-neutral-500">
          Effective: <span className="font-medium">28 Oct 2025</span> · Last updated:{" "}
          <span className="font-medium">28 Oct 2025</span>
        </p>
      </header>

      <section className="[&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-semibold [&_p]:mt-3 [&_ul]:mt-3 [&_li]:mt-2">
        <p className="text-sm text-neutral-600">
          Welcome to <span className="font-medium">Perféro</span>. These Terms of Service ("Terms") govern
          your access to and use of our website at{" "}
          <span className="font-medium">https://www.perferofragrance.com</span> (the "Site"), and any related services
          we provide. By accessing or using our Site, you agree to be bound by these Terms and our{" "}
          <a href="/privacy" className="underline hover:text-gold transition-colors">
            Privacy Policy
          </a>. If you do not agree with any part of these Terms, you may not use our services.
        </p>

        <h2>1) Company Information</h2>
        <p>
          The Site is operated by <span className="font-medium">7 ACE EXIM LLP</span>,
          a limited liability partnership registered in India. References to "we", "our", "us", or "Perféro" in these Terms refer to this legal entity. For inquiries about our company, please contact us at the email addresses provided in the Contact section below.
        </p>

        <h2>2) Eligibility</h2>
        <p>
          You must be at least <span className="font-medium">18 years old</span> to make purchases or create an account on our Site. By using the Site, you represent and warrant that you meet this age requirement. If you are under 18, please have a parent or guardian complete any transactions on your behalf.
        </p>

        <h2>3) Use of the Site</h2>
        <ul className="list-disc pl-6">
          <li>You agree to use the Site only for lawful purposes and in accordance with these Terms and all applicable laws and regulations.</li>
          <li>
            You must not: (a) introduce viruses, malware, or any code designed to disrupt or disable the Site; (b) attempt to gain unauthorized access to the Site or its systems; (c) interfere with other users' access to or enjoyment of the Site; or (d) engage in any form of harassment or abuse directed at other users or our staff.
          </li>
          <li>
            We reserve the right to suspend or permanently terminate your access to the Site if we reasonably believe you have violated these Terms or engaged in any unlawful activity.
          </li>
        </ul>

        <h2>4) Product Information & Availability</h2>
        <p>
          We make every effort to ensure that product descriptions, images, specifications, and pricing displayed on the Site are accurate and up-to-date. However, we cannot guarantee complete accuracy and minor variations or discrepancies may occur. Product availability is subject to change without notice. We reserve the right to limit quantities per order and to discontinue any product at our discretion.
        </p>

        <h2>5) Orders & Payment</h2>
        <ul className="list-disc pl-6">
          <li>
            When you place an order, you provide an offer to purchase the specified products. Submission of an order does not guarantee acceptance. We will send you a confirmation email when your order is accepted.
          </li>
          <li>
            We reserve the right to accept, reject, cancel, or suspend any order for any reason, including but not limited to: pricing errors, suspected fraudulent activity, suspected money laundering, product unavailability, or violations of these Terms.
          </li>
          <li>
            Payments are securely processed through <span className="font-medium">Razorpay</span>, our authorized payment partner. We do not store complete credit card information on our servers. By making a payment, you authorize the transaction and agree to Razorpay's terms of service.
          </li>
        </ul>

        <h2>6) Pricing & Taxes</h2>
        <p>
          All prices on the Site are displayed in <span className="font-medium">Indian Rupees (INR)</span> and include all applicable Goods and Services Tax (GST) and other taxes unless explicitly stated otherwise. Shipping and handling fees, if applicable, are calculated and displayed separately during the checkout process. We are not responsible for any additional customs duties, import taxes, or fees that may be imposed by third parties or your country of residence.
        </p>

        <h2>7) Shipping & Delivery</h2>
        <p>
          Orders are shipped to the address you provide during checkout. Delivery timeframes are estimates based on typical carrier schedules and may vary due to location, logistics, weather, or external factors beyond our control. We are not responsible for delays caused by third-party carriers, customs delays, or other circumstances beyond our reasonable control. For detailed shipping information, please refer to our <a href="/shipping" className="underline hover:text-gold transition-colors">Shipping Information</a> page.
        </p>

        <h2>8) Returns, Exchanges & Refunds</h2>
        <p>
          Return, exchange, and refund eligibility and procedures are governed by our <a href="/refund" className="underline hover:text-gold transition-colors">Returns & Refund Policy</a>. Due to hygiene and safety considerations, opened or used perfumes, testers, and gift sets may not be eligible for return. Please review our complete policy for all eligibility criteria and procedures.
        </p>

        <h2>9) Intellectual Property</h2>
        <p>
          All content on the Site—including but not limited to text, images, logos, graphics, photographs, videos, and code—is owned by or licensed to <span className="font-medium">Perféro</span> and is protected by applicable intellectual property laws. You agree not to reproduce, modify, distribute, transmit, republish, display, or perform any of this content without obtaining our prior written permission, except for personal, non-commercial viewing and downloading for your own use.
        </p>

        <h2>10) User Content</h2>
        <p>
          If you submit reviews, testimonials, comments, photographs, or other materials on the Site ("User Content"), you grant Perféro a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, and display that content in connection with our business and marketing efforts. You represent and warrant that you own or have obtained all necessary rights to the content you submit and that it does not violate any third-party rights or applicable laws.
        </p>

        <h2>11) Disclaimer of Warranties</h2>
        <p>
          THE SITE AND ALL ITS CONTENTS ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE FROM VIRUSES OR OTHER HARMFUL COMPONENTS.
        </p>

        <h2>12) Limitation of Liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, PERFÉRO AND ITS OFFICERS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SITE OR PURCHASE OF OUR PRODUCTS, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR THE SITE SHALL NOT EXCEED THE TOTAL AMOUNT YOU PAID FOR THE PRODUCT OR SERVICE IN QUESTION.
        </p>

        <h2>13) Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless Perféro, its parent company, subsidiaries, affiliates, officers, employees, agents, and successors from any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from: (a) your violation of these Terms; (b) your misuse of the Site; (c) your violation of any third-party rights; or (d) any other conduct that violates applicable law.
        </p>

        <h2>14) Governing Law & Dispute Resolution</h2>
        <p>
          These Terms and your use of the Site are governed by and construed in accordance with the laws of the <span className="font-medium">Republic of India</span>, without regard to its conflict of law principles. Any disputes arising out of or relating to these Terms or the Site shall be subject to the exclusive jurisdiction of the courts located in <span className="font-medium">New Delhi, India</span>. By agreeing to these Terms, you consent to the personal jurisdiction and venue of these courts.
        </p>

        <h2>15) Termination</h2>
        <p>
          We may immediately terminate or suspend your account and access to the Site, without prior notice or liability, if we reasonably believe you have violated these Terms or engaged in any unlawful activity. Upon termination, your right to use the Site ceases immediately.
        </p>

        <h2>16) Changes to These Terms</h2>
        <p>
          We may revise these Terms at any time without prior notice. The revised version will be posted on this page with an updated "Last updated" date. Continued access to or use of the Site following the posting of changes constitutes your binding acceptance of the updated Terms. If you do not agree with any changes, please discontinue your use of the Site.
        </p>

        <h2>17) Contact Us</h2>
        <p>
          For any questions, concerns, or requests regarding these Terms of Service, please contact us at:<br />
          <span className="font-medium">Email:</span> <a href="mailto:support@perferofragrance.com" className="underline hover:text-gold transition-colors">
            support@perferofragrance.com
          </a><br />
          <span className="font-medium">Brand:</span> Perféro<br />
          <span className="font-medium">Company:</span> 7 ACE EXIM LLP
        </p>

        <hr className="my-10 border-neutral-200" />
        <p className="text-xs text-neutral-500">
          <span className="font-semibold">Legal Notice:</span> These Terms of Service are compliant with the Indian Consumer Protection (E-Commerce) Rules 2020 and related legislation. This document is provided for informational purposes. For questions regarding compliance with specific laws, please consult with a qualified legal professional. Last updated 28 October 2025.
        </p>
      </section>
    </main>
  );
}
