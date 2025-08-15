import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  halfImage: string;
  quarterImage: string;
  fullImage: string;
  isHovered: boolean;
  isOtherHovered: boolean;
  onHover: (isHovering: boolean) => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  halfImage, 
  quarterImage, 
  fullImage, 
  isHovered, 
  isOtherHovered, 
  onHover 
}) => {
  // Determine which image to show based on hover state
  const getCurrentImage = () => {
    if (isHovered) return fullImage;
    if (isOtherHovered) return quarterImage;
    return halfImage;
  };

  return (
    <div 
      className={`pb-5 last:mb-0 transition-all duration-500 `}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      {/* Image Container with Dynamic Hover Effect */}
      <div className="relative overflow-hidden">
        <motion.img 
          src={getCurrentImage()}
          alt={title}
          className="w-full h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.6,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
};

const UnifiedViewSection: React.FC = () => {
  const [leftColumnHovered, setLeftColumnHovered] = useState<string | null>(null);
  const [rightColumnHovered, setRightColumnHovered] = useState<string | null>(null);

  const leftColumnFeatures = [
    {
      id: "report-bugs",
      title: "Report Bugs in a Snap",
      description: "Capture screenshots or videos, add quick annotations, and share instantly. With instant replay, never miss a bug again.",
      halfImage: "/bugReportHalfImage.svg",
      quarterImage: "/bugReportQuaterImage.svg",
      fullImage: "/bugReporFullImage.svg"
    },
    {
      id: "session-details",
      title: "Session Details at a Glance",
      description: "Our session info widget automatically captures and displays all the key technical details for every report—right inside the extension.",
      halfImage: "/sessionDetailsHalfImage.svg",
      quarterImage: "/sessionDetailsQuaterImage.svg",
      fullImage: "/sessionDetailsFullImage.svg"
    },
    {
      id: "track-actions",
      title: "Track Every Action",
      description: "The Actions panel logs each click, scroll, input, and navigation step leading up to a bug.",
      halfImage: "/takeEveryActionHalfImage.svg",
      quarterImage: "/takeEveryActionQuaterImage.svg",
      fullImage: "/takeEveryActionFullImage.svg"
    }
  ];

  const rightColumnFeatures = [
    {
      id: "console-logs",
      title: "Console Logs Made Simple",
      description: "Capture JavaScript errors, warnings, and logs right inside your bug reports. With automatic console tracking, developers get clear insights into what went wrong—no extra digging required.",
      halfImage: "/consoleLogMadeSimplehalfImage.svg",
      quarterImage: "/consoleLogMadeSimpleQuatermage.svg",
      fullImage: "/consoleLogMadeSimpleFullImage.svg"
    },
    {
      id: "network-capture",
      title: "Complete Network Capture",
      description: "Log every request and response, including payloads, headers, and status codes. Spot failed calls, slow endpoints, and timeouts instantly, making debugging faster and more accurate.",
      halfImage: "/completeNetworkCaptureHalfImage.svg",
      quarterImage: "/completeNetworkCaptureQuaterImage.svg",
      fullImage: "/completeNetworkCaptureFullImage.svg"
    }
  ];

  const handleLeftColumnHover = (cardId: string, isHovering: boolean) => {
    setLeftColumnHovered(isHovering ? cardId : null);
  };

  const handleRightColumnHover = (cardId: string, isHovering: boolean) => {
    setRightColumnHovered(isHovering ? cardId : null);
  };

  return (
    <div className="py-20 px-10" style={{backgroundColor: '#F9F9F9'}}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-16">
          {/* Left Column - Headline */}
          <div className="flex-1 pr-16">
            <h2 className="text-6xl font-bold leading-tight text-black">
              A unified view of<br />
              your <span style={{color: '#4ECDC4'}}>entire tech<br />
              stack.</span>
            </h2>
          </div>
          
          {/* Right Column - Description and Button */}
          <div className="flex-1 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              Seamlessly connect errors, session replays, console logs, and more to get complete clarity.
              Quickly understand the what, why, and how behind your full-stack web application.
            </p>
            
            {/* Download Button */}
            <button className="flex items-center space-x-3 bg-white border-2 border-purple-400 rounded-full px-8 py-4 text-gray-800 font-medium hover:bg-gray-50 transition-colors">
              <Download size={20} />
              <span>Download</span>
            </button>
          </div>
        </div>

        {/* Features Grid - Two Columns with Equal Heights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - 3 Features */}
          <div className="flex flex-col">
            {leftColumnFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  halfImage={feature.halfImage}
                  quarterImage={feature.quarterImage}
                  fullImage={feature.fullImage}
                  isHovered={leftColumnHovered === feature.id}
                  isOtherHovered={leftColumnHovered !== null && leftColumnHovered !== feature.id}
                  onHover={(isHovering) => handleLeftColumnHover(feature.id, isHovering)}
                />
              </motion.div>
            ))}
          </div>

          {/* Right Column - 2 Features */}
          <div className="flex flex-col justify-center">
            {rightColumnFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3 + index * 0.1,
                  ease: "easeOut"
                }}
              >
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  halfImage={feature.halfImage}
                  quarterImage={feature.quarterImage}
                  fullImage={feature.fullImage}
                  isHovered={rightColumnHovered === feature.id}
                  isOtherHovered={rightColumnHovered !== null && rightColumnHovered !== feature.id}
                  onHover={(isHovering) => handleRightColumnHover(feature.id, isHovering)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnifiedViewSection;