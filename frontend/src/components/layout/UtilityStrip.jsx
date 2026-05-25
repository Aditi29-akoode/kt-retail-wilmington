"use client";

import React, { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = ["Local", "Business", "Mail-ins"];

export default function UtilityStrip() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("Local");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-[60] bg-[#F5F5F7] border-b border-gray-200 h-12 transition-all duration-300",
        scrolled ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="w-full h-full px-[3%] flex items-center justify-between text-[12px] md:text-[14px] font-medium uppercase tracking-wider">
        
        {/* Tabs */}
        <div className="relative flex items-center gap-2 md:gap-4 h-full">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "relative px-3 md:px-4 h-full flex items-center justify-center transition-all duration-300 ease-in-out",
                  isActive
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                )}
              >
                {/* Text */}
                <span className="relative z-10">{tab}</span>

                {/* Smooth underline */}
                <div
                  className={cn(
                    "absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gray-900 transition-all duration-300 ease-in-out",
                    isActive
                      ? "w-full opacity-100"
                      : "w-0 opacity-0"
                  )}
                />
              </button>
            );
          })}
        </div>

        {/* Locations */}
        <button className="flex items-center gap-1 md:gap-2 text-gray-500 hover:text-gray-900 transition-colors duration-300">
          <MapPin className="w-4 h-4 -translate-y-[1px]" />
          <span className="leading-none">Locations</span>
        </button>
      </div>

      {/* Optional Tab Content */}
      <div className="hidden">
        {activeTab === "Local" && <div>Local Content</div>}
        {activeTab === "Business" && <div>Business Content</div>}
        {activeTab === "Mail-ins" && <div>Mail-ins Content</div>}
      </div>
    </div>
  );
}