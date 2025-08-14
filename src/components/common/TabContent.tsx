// components/TabContent.tsx
import React from "react";

interface TabSection {
  title: string;
  description: string;
}

interface TabContentProps {
  activeTab: string;
}

const sections: Record<string, TabSection> = {
  home: {
    title: "Home",
    description:
      "Welcome to the home section. This is where you'll find the main content and overview of our platform.",
  },
  crosscheck: {
    title: "CrossCheck",
    description:
      "CrossCheck functionality allows you to verify and validate information across multiple sources for accuracy.",
  },
  features: {
    title: "Features",
    description:
      "Explore all the powerful features available in our platform, designed to enhance your productivity and workflow.",
  },
  faqs: {
    title: "FAQ's",
    description:
      "Find answers to frequently asked questions about our platform, features, and how to get the most out of your experience.",
  },
};

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  const section = sections[activeTab];

  if (!section) return null;

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
      <p className="text-gray-600">{section.description}</p>
    </div>
  );
};

export default TabContent;
