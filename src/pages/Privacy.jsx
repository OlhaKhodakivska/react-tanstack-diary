import React from "react";

export default function Privacy() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-base-200 rounded-3xl shadow-sm mt-10 border border-base-300">
      <h2 className="text-2xl font-bold text-neutral mb-4">Privacy Policy</h2>
      <div className="text-xs opacity-70 space-y-2 leading-relaxed">
        <p>
          At MindfulSpace, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website and services.
        </p>
        <p>
          <strong>Information We Collect:</strong> We may collect personal information such as your name, email address, and usage data when you interact with our website. This information is used to provide and improve our services.
        </p>
        <p>
          <strong>How We Use Your Information:</strong> We use the collected information to personalize your experience, communicate with you, and enhance our services. We do not sell or share your personal information with third parties without your consent.
        </p>
        <p>
          <strong>Data Security:</strong> We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
        </p>
        <p>
          <strong>Your Rights:</strong> You have the right to access, correct, or delete your personal information. You can also opt-out of receiving communications from us at any time.
        </p>
        <p>
          If you have any questions about our Privacy Policy, please contact us at <a href="mailto:olhakhodakivska@gmail.com" className="link link-hover">olhakhodakivska@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}