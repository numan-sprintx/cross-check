import { tabs } from "../../config/constant";
import { useState } from "react";

export default function CustomTabs() {
  const [activeTab, setActiveTab] = useState("home");

  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex bg-[#FFFFFF1A] rounded-full gap-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <div
              key={tab.id}
              className={`flex-1 rounded-full transition-all duration-300 ${
                isActive
                  ? "p-[1.5px] bg-gradient-to-r from-[#658AFF] to-[#E25E3E]"
                  : "p-[1.5px] bg-transparent"
              }`}
            >
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`w-full rounded-full px-5 py-4 text-sm font-medium transition-all duration-300
                   ${
                     isActive
                       ? "bg-[#0F0707] text-white"
                       : "bg-transparent text-white hover:text-gray-800 hover:bg-gray-50"
                   }
                 `}
                
              >
                {tab.label}
              </button>
            </div>
          );
        })}
      </div>

      {/* {currentTab && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">{currentTab.title}</h2>
          <p className="text-gray-600">{currentTab.description}</p>
        </div>
      )} */}
    </div>
  );
}
