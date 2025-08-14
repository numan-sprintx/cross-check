import type React from "react";
import logo from "../../assets/svgs/logo.svg";
import { Button } from "../common/Button";
import CustomTabs from "../common/Tabs";

const Hero: React.FC = () => {
  return (
    <section className="w-full h-[920px] overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/hero.svg')] ">
      <div className="px-10 py-5 ">
        <div className=" flex justify-between items-center">
          <img src={logo || "/placeholder.svg"} alt="logo" />
          <CustomTabs />
          <Button variant="outline">Download</Button>
        </div>

        <div className="pt-10">
          {/* Main Headline */}
          <div>
            <h1 className="text-8xl md:text-9xl lg:text-[120px] font-thin text-white leading-none">
              <span className="font-thin">From </span>
              <span className="font-semibold">Bug to Fix</span>
            </h1>
            <h2 className="mt-0 text-6xl md:text-7xl lg:text-[120px] font-bold bg-gradient-to-r from-[#00DAF4] to-[#5EDC99] bg-clip-text text-transparent leading-none mt-2">
              10x Faster Reporting
            </h2>
          </div>

          {/* Description */}
          <p className="text-xl text-white max-w-3xl leading-8 tracking-wide mb-8 mt-8">
            Crosscheck is a free Chrome extension for designers and developers.
            It simplifies bug reporting with instant replay and easy
            screenshots.
          </p>

          {/* CTA Button */}
          <Button variant="outline-reverse">Download the Extension</Button>

          {/* Statistics */}
          <div className="flex gap-12 mt-[150px]">
            <div className="flex gap-10 w-full">
              <div>
                <div className="text-4xl font-bold text-white">200+</div>
                <div className="text-white text-sm">Beta Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white">92%</div>
                <div className="text-white text-sm">Improved Efficiency</div>
              </div>
            </div>
            <div className="relative h-[1000px] w-full">
              <div className="absolute top-[-23%] right-[5%]">
                <img
                  src="/Rectangle.svg"
                  alt="Chrome Extension Preview"
                  className="w-auto h-auto "
                />
              </div>

              {/* Gradient Mask - Decorative Star */}
              <div className="absolute top-[-3%] right-[0%] transform -translate-y-1/2">
                <img
                  src="/grdientMask.svg"
                  alt="gradientMask"
                  className="w-auto h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
