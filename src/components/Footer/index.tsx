import React from "react";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import logo from "../../assets/svgs/footerLogo.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white w-full px-10 pt-20 pb-10">
      <div className="mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
          {/* Logo */}
          <div className="flex items-center mb-4 lg:mb-0">
            <img
              src={logo || "/placeholder.svg"}
              alt="Crosscheck Logo"
              className="w-auto"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-8">
            <a
              href=""
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Blog
            </a>
            <a
              href=""
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Help Center
            </a>
            <a
              href=""
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Contact Us
            </a>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-4 flex flex-col lg:flex-row justify-between items-center text-sm text-gray-600">
          {/* Left: Terms */}
          <div className="flex items-center space-x-6 mb-4 lg:mb-0">
            <a href="" className="hover:text-gray-900 transition-colors">
              Terms of Service
            </a>
            <a href="" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
          </div>

          {/* Center: Company Info */}
          <div className="mb-4 lg:mb-0">
            SprintX Pvt Ltd © 2024. All rights reserved
          </div>

          {/* Right: Social Icons */}
          <div className="flex space-x-4">
            <a
              href=""
              aria-label="Facebook"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href=""
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href=""
              aria-label="Twitter"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;