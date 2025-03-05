import { SimpleTextPoint } from "../simple-text-point/simple-text-point";
import { BulletTextPoint } from "../bullet-text-point/bullet-text-point";

export const TermsAndConditionsContent = () => {
  return (
    <div>
      <SimpleTextPoint
        heading="Our Services"
        description={`The information and resources provided on this website are designed to offer general insights into homecare services. This content is purely for informational purposes and should not replace professional medical advice. We encourage users to consult qualified healthcare professionals for any personalised health concerns or questions.`}
      />
      <SimpleTextPoint
        heading="Changes to Terms and Website Content"
        description={`We retain the right to modify, update, or remove portions of these Terms or any content on this website at our discretion, without prior notice. By continuing to access and use this website, you acknowledge and accept any such changes to these Terms.`}
      />
      <SimpleTextPoint
        heading="Website Content and Use"
        description={`All content available on this website, including text, graphics, logos, images, and design elements, is owned by us and is intended solely for personal, non-commercial use. Any redistribution, modification, or commercial use of this material is strictly prohibited without prior written permission.`}
      />
      <BulletTextPoint
        heading="User Conduct"
        description="When engaging with interactive features on our website, you agree to refrain from posting content that:"
        points={[
          {
            // heading: "Contact Details:",
            title: `Is illegal, abusive, or offensive;`,
          },
          {
            // heading: "Service-Related Information:",
            title: `Violates intellectual property rights;`,
          },
          {
            // heading: "Payment Details:",
            title: ` Contains unsolicited promotions or spam;`,
          },
          {
            // heading: "Personal Information",
            title: `Includes harmful code or viruses.`,
          },
          {
            // heading: "Personal Information",
            title: `We reserve the right to remove any content that breaches these Terms or is deemed inappropriate.`,
          },
        ]}
      />
      <SimpleTextPoint
        heading="No Medical Advice"
        description={`This website provides general information to support individuals with age-related or physical care needs. It does not provide specific medical advice, referrals, or recommendations. Always consult qualified healthcare providers for personal medical guidance.`}
      />
      <SimpleTextPoint
        heading="Disclaimers"
        description={
          "While we strive to ensure that the information on our website is accurate and current, there may be occasional errors or outdated information. We make no guarantees regarding the accuracy, reliability, or completeness of the content provided, which is offered “as is” without any warranties. Use of this website is entirely at your own risk."
        }
      />
      <SimpleTextPoint
        heading="Limitation of Liability"
        description={`We shall not be held liable for any damages, viruses, or issues that may impact your device as a result of using this website. We disclaim all liability for any damages associated with your use or attempted use of this site.`}
      />
      <SimpleTextPoint
        heading="Links to External Websites"
        description={
          "Our website may include links to external websites for your convenience. These third-party sites are not under our control, and we do not endorse or assume responsibility for their content. Access to linked websites is at your own risk."
        }
      />
      <SimpleTextPoint
        heading="Legal Compliance"
        description={
          "By using this website, you agree to adhere to all relevant laws and regulations. We reserve the right to report any suspected violations to the appropriate authorities and will cooperate with any legal investigations as necessary."
        }
      />
      <SimpleTextPoint
        heading="User Feedback and Submissions"
        description={
          "We welcome feedback from users to help us improve our website. Any suggestions, ideas, or submissions provided to us are considered non-confidential and may be used at our discretion, without any obligation or compensation to the contributor."
        }
      />
      <SimpleTextPoint
        heading="Termination of Access"
        description={
          "We reserve the right to restrict or terminate your access to our website if we determine that your conduct is disruptive or violates these Terms."
        }
      />
      <SimpleTextPoint
        heading="Governing Law"
        description={
          "These Terms are governed by the laws of the United Kingdom. Any legal disputes arising from these Terms must be filed within one year from the date of the cause of action."
        }
      />
      <SimpleTextPoint
        heading="Notices and Trademarks"
        description={
          "All trademarks and service marks displayed on this website are owned by us and may not be used without our explicit written permission.."
        }
      />
    </div>
  );
};
