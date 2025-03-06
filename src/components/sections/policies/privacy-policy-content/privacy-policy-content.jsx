import { SimpleTextPoint } from "../simple-text-point/simple-text-point";
import { BulletTextPoint } from "../bullet-text-point/bullet-text-point";

export const PrivacyPolicyContent = () => {
  return (
    <div>
      <SimpleTextPoint
        heading="1. Introduction"
        description={`At Brick Mond Construction , we respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information.`}
      />
      <BulletTextPoint
        heading="2. Information We Collect"
        description="We may gather personal information that you voluntarily share with us, including:"
        points={[
          {
            title: `Personal details (name, email, phone number) provided when you contact us or request a quote.`,
          },
          {
            title: `Payment information for transactions (secured and not stored by us).`,
          },
          {
            title: ` Browsing data collected via cookies to enhance user experience.`,
          },
        ]}
      />
      <BulletTextPoint
        heading="3. How We Use Your Information"
        points={[
          {
            title: `To provide and improve our services.`,
          },
          {
            title: `To communicate with you regarding inquiries, quotes, or project updates.`,
          },
          {
            title: `To process payments and transactions securely.`,
          },
          {
            title: `To comply with legal obligations.`,
          },
        ]}
      />
      <BulletTextPoint
        heading="4. Data Protection & Security"
        points={[
          {
            title: `We implement industry-standard security measures to protect your data.`,
          },
          {
            title: `Your personal information is not shared or sold to third parties without consent, except when required by law.`,
          },
        ]}
      />
      <BulletTextPoint
        heading="5. Cookies & Tracking Technologies"
        points={[
          {
            title: `Our website may use cookies to enhance functionality and improve your experience.`,
          },
          {
            title: `You can disable cookies through your browser settings, but this may affect site functionality.`,
          },
        ]}
      />
      <SimpleTextPoint
        heading="6. Third-Party Links"
        description={`Our website may contain links to third-party websites. We are not responsible for their privacy practices or content.`}
      />
      <SimpleTextPoint
        heading="7. Your Rights"
        description={`You have the right to request access, correction, or deletion of your personal data.To exercise these rights, please contact us at [Your Email Address].
          `}
      />
      <SimpleTextPoint
        heading="8. Policy Updates"
        description={
          "We may update this Privacy Policy periodically. Any changes will be posted on this page, and continued use of our services implies acceptance of these updates."
        }
      />
      <SimpleTextPoint
        heading="9. Contact Us"
        description={
          "If you have any questions about our Terms & Conditions or Privacy Policy, please reach out to us:"
        }
        phone={" +974 74758881"}
        email={"info@brickmond.com"}
      />
    </div>
  );
};
