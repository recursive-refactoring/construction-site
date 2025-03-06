import { SimpleTextPoint } from "../simple-text-point/simple-text-point";
import { BulletTextPoint } from "../bullet-text-point/bullet-text-point";

export const TermsAndConditionsContent = () => {
  return (
    <div>
      <SimpleTextPoint
        heading="1. Introduction"
        description={`Welcome to Brick Mond Construction . By accessing our website and using our services, you agree to comply with the following terms and conditions.`}
      />
      <SimpleTextPoint
        heading="2. Services"
        description={`We provide construction services, including excavation, roadwork, asphalt paving, interlock fixing, and building material supply. All projects are subject to availability and agreement on project scope, timeline, and pricing.`}
      />
      <BulletTextPoint
        heading="3. Payments & Pricing"
        points={[
          {
            title: `Payment terms will be agreed upon before the commencement of any project.`,
          },
          {
            title: `Quotes provided are subject to change based on material costs and project modifications.`,
          },
          {
            title: `Late payments may result in additional charges or suspension of services.`,
          },
        ]}
      />
      <SimpleTextPoint
        heading="4. Project Timelines"
        description={`Estimated project completion timelines are provided in good faith but may be affected by unforeseen circumstances such as weather conditions, material shortages, or regulatory approvals.Clients will be notified of any delays and necessary adjustments.`}
      />
      <BulletTextPoint
        heading="5. Warranty & Liability"
        points={[
          {
            title: `We guarantee high-quality workmanship and materials as per industry standards.`,
          },
          {
            title: `Any defects due to workmanship will be rectified within the agreed warranty period.`,
          },
          {
            title: `We are not liable for damages caused by misuse, third-party actions, or external factors beyond our control.`,
          },
        ]}
      />
      <SimpleTextPoint
        heading="6. Cancellations & Refunds"
        description={
          "Clients may cancel a project before work commences, subject to applicable cancellation fees.Refunds for materials or services already provided will not be issued."
        }
      />
      <SimpleTextPoint
        heading="7. Intellectual Property"
        description={`All content, logos, and materials on this website are the property of [Your Company Name]. Unauthorized use or reproduction is strictly prohibited.`}
      />
      <SimpleTextPoint
        heading="8. Governing Law"
        description={
          "These terms are governed by the laws of [Your Country/State]. Any disputes shall be resolved through arbitration or legal proceedings within the relevant jurisdiction."
        }
      />
      <SimpleTextPoint
        heading="Legal Compliance"
        description={
          "By using this website, you agree to adhere to all relevant laws and regulations. We reserve the right to report any suspected violations to the appropriate authorities and will cooperate with any legal investigations as necessary."
        }
      />
    </div>
  );
};
