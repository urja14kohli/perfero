import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | PERFÉRO FRAGRANCE",
  description:
    "Privacy Policy for PERFÉRO FRAGRANCE describing how we collect, use, and protect personal information.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 leading-7 text-neutral-800">
      <header className="mb-10">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-neutral-500">
          Effective: <span className="font-medium">28 Oct 2025</span> · Last updated:{" "}
          <span className="font-medium">28 Oct 2025</span>
        </p>
      </header>

      <section className="[&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-semibold [&_p]:mt-3 [&_ul]:mt-3 [&_li]:mt-2">
        <p className="text-sm text-neutral-600">
          This Privacy Policy explains how <span className="font-medium">Perféro</span> ("we", "us", "our")
          collects, uses, shares, and safeguards your personal information when you visit{" "}
          <span className="font-medium">https://www.perferofragrance.com</span>, make a purchase, or interact with us.
          By using our services, you agree to the practices described here. We are committed to protecting your privacy and ensuring transparency in how we handle your data.
        </p>

        <h2>1) Who we are</h2>
        <p>
          <span className="font-medium">Legal entity:</span> 7 ACE EXIM LLP<br />
          <span className="font-medium">Brand:</span> Perféro<br />
          <span className="font-medium">Registered address:</span> India<br />
          <span className="font-medium">Contact:</span> <a className="underline hover:text-gold transition-colors" href="mailto:privacy@perferofragrance.com">privacy@perferofragrance.com</a><br />
          <span className="font-medium">Grievance/Privacy Officer:</span> Available upon request at the contact address above
        </p>

        <h2>2) Scope</h2>
        <p>
          This Policy applies to our website, checkout process, customer support communications, marketing activities, and social media channels we operate. It does not cover third-party websites, applications, or services that we may link to or partner with.
        </p>

        <h2>3) Information we collect</h2>
        <ul className="list-disc pl-6">
          <li>
            <span className="font-medium">Identifiers & contact data:</span> name, email address, phone number, billing and shipping addresses, and payment information.
          </li>
          <li>
            <span className="font-medium">Order & transaction data:</span> products purchased, order amounts, payment status, and order IDs. Payment card data is processed securely by our payment processor Razorpay and we do not store full card numbers on our servers.
          </li>
          <li>
            <span className="font-medium">Device/usage data:</span> IP address, browser type and version, pages visited, links clicked, time spent on pages, and device identifiers collected through cookies and similar technologies.
          </li>
          <li>
            <span className="font-medium">Marketing preferences:</span> newsletter opt-ins, email subscription preferences, and campaign engagement records.
          </li>
          <li>
            <span className="font-medium">Support communications:</span> emails, chat messages, support tickets, and any information you voluntarily share with our support team.
          </li>
        </ul>

        <h2>4) How we use your information</h2>
        <ul className="list-disc pl-6">
          <li>Process and fulfill orders, handle returns, and manage replacements and refunds.</li>
          <li>Provide responsive customer support and respond to your inquiries.</li>
          <li>Improve site performance, user experience, content relevance, and product offerings.</li>
          <li>Personalize your shopping experience and measure the effectiveness of marketing campaigns.</li>
          <li>Detect, prevent, and investigate fraud, security threats, and misuse of our services.</li>
          <li>Comply with legal obligations, court orders, and enforce our Terms of Service.</li>
        </ul>

        <h2>5) Legal bases (where applicable)</h2>
        <p>
          We process your personal data based on one or more of the following legal grounds: your consent, the necessity to perform a contract with you, compliance with applicable laws and regulations, and our legitimate interests in operating and improving our business (including site security, fraud prevention, and analytics).
        </p>

        <h2>6) Cookies & similar technologies</h2>
        <p>
          We use essential cookies necessary for core site functionality. We may also use optional analytics and advertising cookies to improve your experience. You can manage cookie preferences through your browser settings. We respect Do Not Track (DNT) signals where applicable.
        </p>

        <h2>7) Payments</h2>
        <p>
          Payments are securely processed by <span className="font-medium">Razorpay</span>, our trusted payment partner.
          Your payment data is handled according to Payment Card Industry Data Security Standard (PCI DSS) and industry best practices. We only receive limited payment metadata (such as transaction ID and confirmation status) to process and verify your orders.
        </p>

        <h2>8) Sharing your information</h2>
        <ul className="list-disc pl-6">
          <li>
            <span className="font-medium">Service providers:</span> We share data with carefully vetted third parties who provide hosting, email services, SMS communications, analytics, payment processing, and shipping logistics. These partners are contractually bound to maintain confidentiality and use data solely for the services we request.
          </li>
          <li>
            <span className="font-medium">Legal requirements:</span> We may disclose your information when required by law, court order, or government request, or to protect our legal rights and the safety of our users.
          </li>
          <li>
            <span className="font-medium">Business transfers:</span> In the event of a merger, acquisition, bankruptcy, or sale of assets, your information may be transferred as part of that transaction, subject to protections outlined in this Policy.
          </li>
        </ul>

        <h2>9) International transfers</h2>
        <p>
          If your personal data is transferred to countries outside India, we implement appropriate safeguards including Standard Contractual Clauses and other legally recognized mechanisms to protect your information under applicable data protection laws.
        </p>

        <h2>10) Data retention</h2>
        <p>
          We retain personal data only for as long as necessary to fulfill the purposes outlined above, including legal, accounting, and regulatory requirements. Retention periods vary depending on the type of data and applicable legal obligations. You can request deletion of your data at any time, subject to legal retention requirements.
        </p>

        <h2>11) Your rights</h2>
        <p>
          Depending on your jurisdiction, you may have the right to access, correct, update, delete, or request a copy of your personal data. You may also have rights to restrict processing, object to certain uses, and withdraw consent. To exercise any of these rights, contact{" "}
          <a className="underline hover:text-gold transition-colors" href="mailto:privacy@perferofragrance.com">privacy@perferofragrance.com</a>. We may require identity verification before processing your request.
        </p>

        <h2>12) Communications preferences</h2>
        <p>
          You can opt out of marketing and promotional emails at any time by clicking the "Unsubscribe" link at the bottom of any marketing email or by contacting us directly. Please note that we will continue to send you transactional and service-related emails (such as order confirmations and delivery updates) as these are necessary to provide you with our services.
        </p>

        <h2>13) Children</h2>
        <p>
          Our services are not directed to children under 18 years of age. We do not knowingly collect personal information from children. If we become aware that a child has provided personal data, we will take prompt action to delete such information and terminate the child's account if applicable.
        </p>

        <h2>14) Security</h2>
        <p>
          We implement comprehensive administrative, technical, and physical security measures appropriate to the sensitivity of your personal data. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
        </p>

        <h2>15) Third-party links</h2>
        <p>
          Our website may contain links to third-party websites and services. We are not responsible for their privacy practices. We strongly encourage you to review the privacy policies of any third-party sites before providing your personal information.
        </p>

        <h2>16) Changes to this Policy</h2>
        <p>
          We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. Material changes will be posted on this page with an updated "Last updated" date. Your continued use of our services following the posting of changes constitutes your acceptance of those changes.
        </p>

        <h2>17) Contact</h2>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:<br />
          <span className="font-medium">Email:</span> <a className="underline hover:text-gold transition-colors" href="mailto:privacy@perferofragrance.com">privacy@perferofragrance.com</a><br />
          <span className="font-medium">Brand:</span> Perféro
        </p>

        <hr className="my-10 border-neutral-200" />

        <p className="text-xs text-neutral-500">
          <span className="font-semibold">Legal Notice:</span> This Privacy Policy is compliant with the India Digital Personal Data Protection Act 2023 (DPDP Act) and follows industry best practices. It is intended for informational purposes. For specific legal compliance questions, please consult with a qualified legal professional. This policy was last updated on 28 October 2025.
        </p>
      </section>
    </main>
  );
}
