import React from "react";
import { Download } from "lucide-react";
import star from "../../assets/svgs/start.svg";

const PromoBanner: React.FC = () => {
    return (
        <div
            className="relative text-white py-16 px-6 overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/hero.svg')]"
        >
            {/* Decorative Sparkles */}
            <div className="absolute top-20 right-20">
                <div className="w-4 h-4 bg-yellow-400 transform rotate-45"></div>

            </div>
            <div className="absolute top-8 right-8">
                <img
                    src={star || "/placeholder.svg"}
                    alt="Crosscheck Logo"
                    className="w-auto"
                />
            </div>
            <div className="absolute bottom-16 left-8">
                <div className="w-3 h-3 bg-yellow-400 transform rotate-45"></div>
            </div>

            <div className="mx-auto w-full px-10 pb-10">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
                    Ditch the old{" "}
                    <span className="text-green-300">bug reporting methods</span>
                </h2>
                <p className="text-lg md:text-xl mb-10">
                    Use{" "}
                    <span className="font-bold">
                        <span className="text-blue-900">Cross</span>
                        <span className="text-orange-500">Check</span>
                    </span>{" "}
                    and experience the future of debugging.
                </p>

                <div className="flex flex-col lg:flex-row items-center justify-between">
                    {/* Testimonial */}
                    <div className="mb-8 lg:mb-0">
                        <blockquote className="text-lg md:text-xl font-semibold mb-1">
                            "Time saver"
                        </blockquote>
                        <div className="text-sm opacity-80 mb-3">
                            Sara, Project Manager
                        </div>
                        <div className="flex items-center text-yellow-400">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <svg
                                    key={i}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 fill-current"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 15l-5.878 3.09L5.82 12.18 1 8.09l6.061-.88L10 2l2.939 5.21L19 8.09l-4.82 4.09 1.698 5.91z" />
                                </svg>
                            ))}
                            <span className="ml-2 text-white text-sm">
                                Overall rating: 4.5/5
                            </span>
                        </div>
                    </div>

                    {/* Download Button */}
                    <a
                        href="#"
                        className="relative rounded-full p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-105 transition-transform"
                    >
                        <span className="flex items-center bg-indigo-950 px-8 py-3 rounded-full text-lg font-semibold">
                            <Download className="w-5 h-5 mr-3" />
                            Download the Extension
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PromoBanner;