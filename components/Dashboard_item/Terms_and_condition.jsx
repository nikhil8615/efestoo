import React from "react";
import "./Terms_condition.css";

const terms = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing or using Elestoo, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please do not use our services.",
  },
  {
    title: "Eligibility",
    content:
      "You must be at least 18 years old to create an account and organize events. Attendees below 18 may need parental permission to register.",
  },
  {
    title: "User Responsibilities",
    content: (
      <>
        <strong>For Organizers:</strong>
        <ul>
          <li>You must provide accurate event details.</li>
          <li>No fake events or misleading information.</li>
          <li>
            You are responsible for managing your ticket inventory and attendee
            communications.
          </li>
        </ul>
        <strong>For Attendees:</strong>
        <ul>
          <li>You must provide correct information when booking.</li>
          <li>QR-based ePasses must not be shared or duplicated.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Event Verification & Approval",
    content:
      "All organizers must complete identity and event verification before publishing any events. Elestoo reserves the right to reject or remove events that violate our policies.",
  },
  {
    title: "Payment & Payouts",
    content: (
      <ul>
        <li>
          Ticket revenue will be processed through secure payment gateways.
        </li>
        <li>
          Payouts to organizers will be made to verified bank accounts after the
          event ends (or as per Elestoo policy).
        </li>
        <li>Elestoo deducts a platform fee from each transaction.</li>
      </ul>
    ),
  },
  {
    title: "Refund Policy",
    content:
      "Refunds are subject to the event organizer’s cancellation policy. Elestoo is not liable for refunds unless explicitly handled by the platform for certain verified cases (e.g. event cancellation, fraud).",
  },
  {
    title: "Prohibited Content & Activities",
    content: (
      <ul>
        <li>No illegal, abusive, discriminatory, or adult content.</li>
        <li>No impersonation or use of copyrighted material without rights.</li>
        <li>No selling or sharing user data.</li>
      </ul>
    ),
  },
  {
    title: "Intellectual Property",
    content:
      "All content, branding, and design of Elestoo are the intellectual property of Elestoo. Users cannot reproduce or reuse the platform’s materials without written consent.",
  },
  {
    title: "Data Privacy",
    content:
      "We collect and process your data according to our Privacy Policy. Your bank details and sensitive information are encrypted and never shared with third parties.",
  },
  {
    title: "Termination",
    content:
      "Elestoo reserves the right to suspend or terminate any account that violates our Terms or attempts to misuse the platform.",
  },
  {
    title: "Limitation of Liability",
    content:
      "Elestoo is not liable for any loss, injury, or damages resulting from events listed on the platform. All risks related to event attendance and organization lie with the user.",
  },
  {
    title: "Modification of Terms",
    content:
      "Elestoo may update these Terms at any time. Continued use of the platform after changes implies acceptance of the updated terms.",
  },
];

const Terms_condition = () => {
  return (
    <div className="terms-container">
      <h2 className="terms-header">
        Elestoo – Terms & Conditions (Key Sections)
      </h2>
      {terms.map((item, index) => (
        <div key={index} className="terms-section">
          <div className="terms-icon">◆{index + 1}</div>
          <div>
            <h3 className="terms-title">{item.title}</h3>
            <div className="terms-content">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Terms_condition;
