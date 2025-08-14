import React from "react";

const ResolveBugs: React.FC = () => {
  return (
    <section className="w-full py-20 px-10">
      <div className="mb-10 flex gap-40 items-center">
        <h2 className="text-6xl font-normal text-black leading-none mb-6 max-w-md">
          Resolve bugs{" "}
          <span className="bg-gradient-to-r from-[#2CD8CC] to-[#45D8B4] bg-clip-text text-transparent font-bold">
            in record time
          </span>
        </h2>
        <p className="text-xl text-gray-700 leading-8 tracking-wide max-w-3xl ">
          Capture everything upfront and get to the fix faster.
        </p>
      </div>

      <div className="bg-black rounded-lg py-7 px-20 w-full">
        <div className="flex justify-between items-center gap-20 w-full">
          {/* Beta Users */}
          <div className="text-center">
            <div className="text-6xl font-bold text-white mb-5">200+</div>
            <div className="text-white text-2xl">Beta Users</div>
          </div>

          {/* Improved Efficiency */}
          <div className="text-center">
            <div className="text-6xl font-bold text-white mb-5">92%</div>
            <div className="text-white text-2xl">Improved Efficiency</div>
          </div>

          {/* Satisfaction Score */}
          <div className="text-center">
            <div className="text-6xl font-bold text-white mb-5">4.8/5</div>
            <div className="text-white text-2xl">Satisfaction Score</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-12 pb-6 gap-6">
        <img src="/pinkCard.svg" alt="pinkCard" className="w-full h-full" />
        <img src="/greenCard.svg" alt="greenCard" className="w-full h-full" />
      </div>
      <img src="/orangeCard.svg" alt="orangeCard" className="w-full h-full" />
    </section>
  );
};

export default ResolveBugs;
