import React, { useState } from "react";

const Tabs: React.FC = () => {
  const tabs = [
    {
      id: "Networking",
      label: "Networking",
      icon: "/networkingIcon.svg",
      image:"/networkingImage.svg",
      content: {
        title: "Network",
        description:
          "Every request, every response—captured in real-time while you record. No need to dig through dev tools—get the full picture instantly.",
        features: [
          "View API Calls With Payloads And Headers",
          "Track Failed Requests And Status Codes",
          "Spot Slow Endpoints And Timeouts",
          "Replay Network Events As They Happened",
        ],
      },
    },
    {
      id: "Console",
      label: "Console",
      icon: "/consoleIcon.svg",
      image:"/consoleBigImage.svg",
      content: {
        title: "Console",
        description:
          "Monitor and debug JavaScript execution in real-time. Track errors, logs, and performance metrics instantly.",
        features: [
          "View Console Logs And Errors",
          "Track JavaScript Exceptions",
          "Monitor Performance Metrics",
          "Debug Client-Side Issues",
        ],
      },
    },
    {
      id: "Actions",
      label: "Actions",
      icon: "/ActionsIcon.svg",
      image:"/actionBigImage.svg",
      content: {
        title: "Actions",
        description:
          "Capture and analyze user interactions. Understand how users navigate and interact with your application.",
        features: [
          "Track User Interactions",
          "Monitor Form Submissions",
          "Record Button Clicks",
          "Analyze User Behavior",
        ],
      },
    },
    {
      id: "Comments",
      label: "Comments",
      icon: "/componentsIcon.svg",
      image:"/commentsBigImage.svg",
      content: {
        title: "Comments",
        description:
          "Collaborate with your team through comments and feedback. Track bug reports and resolve issues faster.",
        features: [
          "View Team Comments",
          "Track Bug Reports",
          "Monitor Feedback",
          "Collaborate On Issues",
        ],
      },
    },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);

 

  return (
    <div className="w-full mt-12">
      {/* Main Tab Container with Border */}
      <div className="w-full bg-white rounded-lg  shadow-lg">
        {/* Tab Navigation */}
        <div className="border-2 border-b-0 border-[#6C6C6C]">
          <div className="flex gap-8 p-5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`w-full justify-center py-4 font-medium transition-all duration-200 flex items-center gap-3 ${
                  activeTab.id === tab.id
                    ? "text-[#000000] text-semibold border-[#000000] bg-[#E2E9FF] rounded-md"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <img
                  src={tab.icon}
                  alt={`${tab.label} icon`}
                  className="w-5 h-5"
                />
                <span className="text-base">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
          {tabs.map(
            (tab) =>
              activeTab.id === tab.id && (
                <div key={tab.id} className="w-[100.2%]">
                    <img
                      src={activeTab.image}
                      alt={`${tab.label} interface`}
                      className="w-full h-full"
                    />
                </div>
              )
          )}
        </div>
    </div>
  );
};

export default Tabs;
