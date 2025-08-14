import React, { useState } from "react";
import { Tabs } from "../debug";

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0); // Start with first feature active

  const features = [
    {
      id: 0,
      title: "Effortless Bug Reporting",
      description:
        "Report bugs quickly and efficiently with just a few clicks.",
      image: "/bugReporting.svg",
      hasSubFeatures: true,
    },
    {
      id: 1,
      title: "Record Your Screen Activity",
      description:
        "Take clear screenshots to document issues and share them with your team.",
      image: "/RecordScreen.svg",
    },
    {
      id: 2,
      title: "Capture Screenshots Instantly",
      description:
        "Record your screen to provide context for any reported issues.",
      image: "/captureScreenshot.svg",
    },
    {
      id: 3,
      title: "Instant Replay",
      description:
        "Never miss a detail again with our Instant Replay feature. Instantly review the last 2 minutes of your activity for better insights and decisions.",
      image: "/instantReplay.svg",
    },
  ];

  return (
    <section className="w-full bg-white pt-20 px-10">
      <div className="">
        {/* Header Section */}
        <div className="flex items-start mb-16">
          <div className="max-w-2xl">
            <h2 className="text-6xl font-normal text-black leading-none mb-6">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-[#09D7EE] to-[#67D894] bg-clip-text text-transparent font-semibold">
                Key Features
              </span>
            </h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-xl text-black leading-8 tracking-wide">
              Our Chrome extension enhances your workflow with robust tools for
              developers and QA teams. Discover how our features streamline bug
              reporting and improve project management.
            </p>
          </div>
        </div>

        {/* Features List and Video Player */}
        <div className="flex gap-16">
          {/* Left Side - Features List */}
          <div className="flex-1 space-y-4 max-w-2xl">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`border-b border-black  cursor-pointer transition-colors ${
                  activeFeature === feature.id ? "border-blue-500" : ""
                }`}
                onClick={() => setActiveFeature(feature.id)}
              >
                <h3
                  className={`text-3xl font-semibold   ${index ===0 ? '' :"pt-12"} pb-6 transition-colors text-black`}
                >
                  {feature.title}
                </h3>
                {feature.description && activeFeature === feature.id && (
                  <p className="text-lg text-black leading-7 mt-4 mb-6">
                    {feature.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Dynamic Image Display */}
          <div className="flex-1">
            <div className="rounded-lg  max-w-2xl">
              <div className="relative">
                {/* Dynamic Image */}
                <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <img
                    src={features[activeFeature].image}
                    alt={features[activeFeature].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Debug Smarter Section */}
        <div className="mt-20">
          <div className="flex gap-60 items-start">
            <div className="max-w-md">
              <h2 className="text-6xl font-normal text-black leading-none mb-6">
                Debug Smarter,{" "}
                <span className="bg-gradient-to-r from-[#09D7EE] to-[#67D894] bg-clip-text text-transparent font-semibold">
                  Not Harder
                </span>
              </h2>
            </div>
            <div className="max-w-2xl">
              <p className="text-xl text-black leading-8 tracking-wide">
                Automatically collects everything developers need—console logs,
                network activity, device data, and more—so you never have to ask
                users to reproduce a bug.
              </p>
            </div>
          </div>

          {/* Developer Tools Interface */}
          <Tabs />
        </div>
      </div>
    </section>
  );
};

export default Features;
