"use client";

import React, { useEffect, useState, useRef } from "react";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const tabs = ["Local", "Business", "Mail-ins"];

const locationItems = [
  {
    name: "Deptford, New Jersey",
    link: "https://kt-retail.vercel.app/",
  },
  {
    name: "Pennsauken, New Jersey",
    link: "https://kt-retail-pennsauken.vercel.app/",
  },
  // {
  //   name: "Wilmington, Delaware",
  //   link: "https://kt-retail-wilmington.vercel.app/",
  // },
];

export default function UtilityStrip() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("Local");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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

        {/* Locations with Dropdown */}
        <div className="relative h-full flex items-center" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1 md:gap-2 text-gray-500 hover:text-gray-900 transition-colors duration-300 cursor-pointer"
          >
            <MapPin className="w-4 h-4 -translate-y-[1px]" />
            <span className="leading-none">Wilmington, Delaware</span>
          </button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="absolute right-0 top-full mt-1 w-64 bg-white border border-gray-200 rounded-2xl shadow-xl py-2.5 z-[70] normal-case tracking-normal border-t-2 border-t-[#004A7E]"
              >
                {locationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    className="block px-5 py-3 hover:bg-gray-50 transition-colors duration-150 group"
                  >
                    <div className="text-[14px] font-bold text-gray-900 group-hover:text-[#004A7E] transition-colors">
                      {item.name}
                    </div>
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
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