import LegalLayout from '@/components/LegalLayout';

export const metadata = {
  title: 'Privacy Policy • PERFÉRO',
  description: 'Learn how PERFÉRO Fragrance collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  const updated = '28 October 2025';
  
  const sections = [
    { id: 'intro', label: 'Introduction' },
    { id: 'collection', label: 'Information We Collect' },
    { id: 'use', label: 'How We Use Information' },
    { id: 'sharing', label: 'Sharing & Disclosure' },
    { id: 'cookies', label: 'Cookies & Tracking' },
    { id: 'security', label: 'Data Security' },
    { id: 'rights', label: 'Your Rights' },
    { id: 'retention', label: 'Data Retention' },
    { id: 'international', label: 'International Transfers' },
    { id: 'changes', label: 'Changes to Policy' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <LegalLayout title="Privacy Policy" updated={updated} sections={sections}>
      <h2 id="intro">Introduction</h2>
      <p>
        PERFÉRO Fragrance ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy 
        explains how we collect, use, disclose, and safeguard your personal information when you visit our 
        website <a href="https://www.perferofragrance.com">www.perferofragrance.com</a> or make a purchase 
        from us.
      </p>
      <p>
        By using our website and services, you agree to the collection and use of information in accordance 
        with this policy. If you do not agree with our policies and practices, please do not use our services.
      </p>

      <h2 id="collection">Information We Collect</h2>
      <p>We collect several types of information to provide and improve our services:</p>

      <h3>Personal Information</h3>
      <ul>
        <li>
          <strong>Account & Order Details:</strong> When you create an account or place an order, we collect 
          your name, email address, phone number, billing address, and shipping address.
        </li>
        <li>
          <strong>Payment Information:</strong> Payment transactions are processed securely through our 
          payment partner Razorpay. We do not store your full credit card numbers, debit card numbers, or 
          UPI details. Razorpay maintains this information in accordance with PCI-DSS standards.
        </li>
        <li>
          <strong>Communication Data:</strong> Records of your correspondence with us, including customer 
          service inquiries, feedback, and reviews.
        </li>
      </ul>

      <h3>Automatically Collected Information</h3>
      <ul>
        <li>
          <strong>Usage Data:</strong> Information about how you interact with our website, including pages 
          visited, time spent, click patterns, and navigation paths.
        </li>
        <li>
          <strong>Device Information:</strong> IP address, browser type and version, device type, operating 
          system, and unique device identifiers.
        </li>
        <li>
          <strong>Cookies & Similar Technologies:</strong> We use cookies and similar tracking technologies 
          to enhance your experience. See our Cookies section below for more details.
        </li>
      </ul>

      <h2 id="use">How We Use Information</h2>
      <p>We use the information we collect for the following purposes:</p>
      <ul>
        <li>
          <strong>Order Processing:</strong> To process and deliver your orders, manage payments, and provide 
          customer support.
        </li>
        <li>
          <strong>Communication:</strong> To send order confirmations, shipping updates, and respond to your 
          inquiries. With your consent, we may also send promotional emails about new products, special offers, 
          and other updates.
        </li>
        <li>
          <strong>Improvement & Analytics:</strong> To understand how our website is used, improve our products 
          and services, and optimize the user experience.
        </li>
        <li>
          <strong>Security & Fraud Prevention:</strong> To protect our business and customers from fraudulent 
          transactions and other security threats.
        </li>
        <li>
          <strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes.
        </li>
        <li>
          <strong>Personalization:</strong> To provide personalized content, recommendations, and advertising 
          based on your preferences and browsing history.
        </li>
      </ul>

      <h2 id="sharing">Sharing & Disclosure</h2>
      <p>
        We do not sell, trade, or rent your personal information to third parties. We may share your information 
        in the following circumstances:
      </p>
      <ul>
        <li>
          <strong>Service Providers:</strong> We work with trusted third-party service providers who assist us 
          in operating our website, processing payments (Razorpay), fulfilling orders, shipping products, and 
          providing analytics. These providers are bound by confidentiality obligations and may only use your 
          information to perform services on our behalf.
        </li>
        <li>
          <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your 
          information may be transferred to the acquiring entity.
        </li>
        <li>
          <strong>Legal Requirements:</strong> We may disclose your information if required by law, court order, 
          or governmental authority, or to protect our rights, property, or safety.
        </li>
        <li>
          <strong>With Your Consent:</strong> We may share your information for any other purpose with your 
          explicit consent.
        </li>
      </ul>

      <h2 id="cookies">Cookies & Tracking Technologies</h2>
      <p>
        We use cookies and similar tracking technologies to enhance your browsing experience and collect 
        information about website usage.
      </p>

      <h3>Types of Cookies We Use:</h3>
      <ul>
        <li>
          <strong>Essential Cookies:</strong> Necessary for the website to function properly, including shopping 
          cart functionality and secure login.
        </li>
        <li>
          <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website, 
          allowing us to improve performance and user experience.
        </li>
        <li>
          <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign 
          effectiveness (only with your consent).
        </li>
      </ul>

      <p>
        You can manage cookie preferences through your browser settings. Note that disabling certain cookies 
        may affect website functionality.
      </p>

      <h2 id="security">Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect your personal information 
        against unauthorized access, alteration, disclosure, or destruction. These measures include:
      </p>
      <ul>
        <li>SSL/TLS encryption for data transmission</li>
        <li>Secure payment processing through PCI-DSS compliant providers</li>
        <li>Regular security audits and monitoring</li>
        <li>Access controls and authentication procedures</li>
        <li>Employee training on data protection practices</li>
      </ul>
      <p>
        However, no method of transmission over the internet is 100% secure. While we strive to protect your 
        information, we cannot guarantee absolute security.
      </p>

      <h2 id="rights">Your Rights</h2>
      <p>
        Under applicable data protection laws, including Indian privacy regulations, you have the following rights:
      </p>
      <ul>
        <li>
          <strong>Access:</strong> Request access to the personal information we hold about you.
        </li>
        <li>
          <strong>Correction:</strong> Request correction of inaccurate or incomplete information.
        </li>
        <li>
          <strong>Deletion:</strong> Request deletion of your personal information, subject to legal retention 
          requirements.
        </li>
        <li>
          <strong>Restriction:</strong> Request restriction of processing in certain circumstances.
        </li>
        <li>
          <strong>Portability:</strong> Request a copy of your data in a structured, machine-readable format.
        </li>
        <li>
          <strong>Objection:</strong> Object to processing of your personal information for marketing purposes.
        </li>
        <li>
          <strong>Withdrawal of Consent:</strong> Withdraw consent for marketing communications at any time 
          by clicking the unsubscribe link in our emails.
        </li>
      </ul>
      <p>
        To exercise any of these rights, please contact us at <a href="mailto:support@perferofragrance.com">support@perferofragrance.com</a>. 
        We will respond to your request within 30 days.
      </p>

      <h2 id="retention">Data Retention</h2>
      <p>
        We retain your personal information only for as long as necessary to fulfill the purposes outlined in 
        this Privacy Policy, unless a longer retention period is required or permitted by law. Retention periods 
        vary depending on the type of information and purpose:
      </p>
      <ul>
        <li>Order and transaction data: Retained for 7 years for accounting and tax purposes</li>
        <li>Account information: Retained while your account is active and for 2 years after closure</li>
        <li>Marketing data: Retained until you unsubscribe or request deletion</li>
        <li>Analytics data: Typically anonymized after 26 months</li>
      </ul>

      <h2 id="international">International Data Transfers</h2>
      <p>
        Your information may be transferred to and processed in countries other than India. We ensure that 
        any such transfers comply with applicable data protection laws and that appropriate safeguards are in 
        place to protect your information.
      </p>

      <h2 id="changes">Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices or legal 
        requirements. We will notify you of any material changes by posting the updated policy on our website 
        and updating the "Last updated" date. Your continued use of our services after such changes constitutes 
        acceptance of the updated policy.
      </p>

      <h2 id="contact">Contact Us</h2>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
        please contact us:
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
        This Privacy Policy is provided for transparency and informational purposes. It does not create any 
        contractual rights or replace legal advice. Please consult with legal counsel for specific questions 
        about your privacy rights.
      </p>
    </LegalLayout>
  );
}

