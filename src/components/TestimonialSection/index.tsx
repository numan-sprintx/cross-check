import React from 'react';

const TestimonialSection : React.FC = () => {
  return (
    <div className="w-full px-10 py-20" style={{backgroundColor: '#F9F9F9'}}>
      <div>
        {/* Testimonial Quote */}
        <div className="text-center mb-8">
          <blockquote className="text-xl text-black font-normal leading-7 mb-6 tracking-normal">
            "Crosscheck has completely transformed how we handle bug reports. The ability to record, replay, and<br/>
            capture all the technical context—without any extra back-and-forth—has saved our team hours. Even non-<br/>
            technical teammates can report issues clearly now. It's a game-changer for collaboration between QA, design,<br/>
            and engineering."
          </blockquote>
          
          {/* Attribution */}
          <p className="text-base text-gray-500 font-normal mb-12">
            Darrell Steward, Product Manager at LoopTech
          </p>
        </div>
        
        {/* Company Logos */}
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="text-4xl font-bold text-black">
            Oplll
          </div>
          <div className="text-4xl font-bold text-black">
            CASA
          </div>
          <div className="flex items-center text-4xl font-bold text-black">
            <span className="text-gray-600 mr-2 text-3xl">✱</span>
            XimPlify
          </div>
          <div className="text-4xl font-bold text-black tracking-wider">
            RELO
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;