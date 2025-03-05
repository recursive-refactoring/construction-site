import { SimpleTextPoint } from "../simple-text-point/simple-text-point";
import { BulletTextPoint } from "../bullet-text-point/bullet-text-point";

export const PrivacyPolicyContent = () => {
  return (
    <div>
      <SimpleTextPoint
        heading="Introduction"
        description={`Your privacy is important to us, and we are dedicated to safeguarding your personal information. This Privacy Policy explains how we collect, use, and protect the information you provide when you interact with our website and services.`}
      />
      <BulletTextPoint
        heading="Information We Collect"
        description="We may gather personal information that you voluntarily share with us, including:"
        points={[
          {
            heading: "Contact Details:",
            title: `Such as your name, address, phone number, and email address.`,
          },
          {
            heading: "Service-Related Information:",
            title: `Information relevant to your care needs.`,
          },
          {
            heading: "Payment Details:",
            title: ` For billing purposes, if you choose to use our services.`,
          },
          {
            // heading: "Personal Information",
            title: `Additionally, we may automatically collect certain technical data, such as your IP address, browser type, and browsing patterns, to help us enhance website performance and functionality.`,
          },
        ]}
      />
      <BulletTextPoint
        heading="How We Use Your Information"
        description="Your personal information is used to:"
        description2={`We do not sell personal data to third parties. Any data sharing is limited to fulfilling our service obligations or meeting legal requirements.`}
        points={[
          {
            // heading: "Service Provision:",
            title: `Deliver and manage our services;`,
          },
          {
            // heading: "Service Improvement: ",
            title: `Process payments and handle billing;`,
          },
          {
            // heading: "Marketing and Communication:",
            title: `Communicate with you about updates, enquiries, or support requests`,
          },
          {
            // heading: "Third-Party Sharing:",
            title: `Improve our website and services based on feedback and analytical insights.`,
          },
        ]}
      />
      <BulletTextPoint
        heading="Sharing Your Information"
        description="We do not sell or lease your personal information. We may only share it in specific circumstances:"
        points={[
          {
            // heading: "Data Encryption:",
            title: `When required by law, regulation, or as part of legal proceedings;`,
          },
          {
            // heading: "Access Controls: ",
            title: `When necessary to provide the services you’ve requested, including coordination with medical professionals or service partners;`,
          },
          {
            // heading: "Regular Security Audits:",
            title: `With trusted third-party providers who assist us in delivering our services, under strict confidentiality agreements.`,
          },
          {
            // heading: "Third-Party Sharing:",
            title: `In the event of a data breach, we will notify affected individuals and relevant authorities promptly, as required by law.`,
          },
        ]}
      />
      <SimpleTextPoint
        heading="Data Security"
        description={`We employ industry-standard security measures to protect your information from unauthorised access, alteration, or disclosure. While we strive to ensure your data’s security, no online data transmission can be entirely secure, and we cannot guarantee absolute protection`}
      />
      <SimpleTextPoint
        heading="Your Rights"
        description={
          "You have certain rights regarding your personal data, including the ability to:"
        }
      />
      <SimpleTextPoint
        heading="Access and request corrections to your data;"
        description={
          <>
            <div>
              Withdraw your consent if we are processing your data based on
              consent;
            </div>
            <div>
              Request deletion of your data, subject to our legal obligations.
            </div>
            <div>
              To exercise any of these rights, please contact us using the
              details provided below.
            </div>
          </>
        }
      />
      <SimpleTextPoint
        heading="Cookies and Tracking Technologies"
        description={
          "Our website may use cookies and similar tracking technologies to enhance your experience, analyse usage, and customise content. You can control cookies via your browser settings, although disabling cookies may impact certain website functionalities."
        }
      />
      <SimpleTextPoint
        heading="Third-Party Links"
        description={
          "Our website may contain links to external websites. We are not responsible for the privacy practices of these third parties, and we recommend reviewing their privacy policies."
        }
      />
      <SimpleTextPoint
        heading="Children’s Privacy"
        description={
          "Our services are intended for adults, and we do not knowingly collect personal information from children under 13. If you believe we have collected a child’s information, please contact us, and we will promptly delete it."
        }
      />
      <SimpleTextPoint
        heading="Contact Information"
        description={
          "For any questions or concerns about your data or this policy, please contact us at:"
        }
        address={"4 Shelley Road, Oxford, Oxfordshire, England, OX4 3EA"}
        phone={"0186 570 4641"}
        email={"info@educaredirectcare.co.uk"}
      />
      <SimpleTextPoint
        heading="Changes to This Privacy Policy"
        description={
          "We reserve the right to amend this Privacy Policy at any time. Updates will be posted on this page, and continued use of our website indicates acceptance of any changes."
        }
      />
    </div>
  );
};
