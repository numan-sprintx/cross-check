import React from 'react';
import { Download } from 'lucide-react';

const UnifiedViewSection : React.FC = () =>  {
  return (
    <div className="py-20 px-10" style={{backgroundColor: '#F9F9F9'}}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          
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
      </div>
    </div>
  );
};

export default UnifiedViewSection;