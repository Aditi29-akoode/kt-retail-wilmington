"use client";

import { useId } from "react";
import { motion } from "framer-motion";

export default function SegmentedControl({ tabs, activeTab, onChange, className = "", pillColor = "#0F3D4C" }) {
    const uniqueId = useId();

    return (
        <div className={`relative bg-gray-200 rounded-full p-1 flex items-center ${className}`}>
            {tabs.map((tab) => {
                const label = typeof tab === "object" ? tab.full : tab;
                const shortLabel = typeof tab === "object" ? tab.short : tab;
                const isActive = activeTab === tab || activeTab === label;
                
                return (
                    <button
                        key={label}
                        onClick={() => onChange(label)}
                        className={`relative z-10 px-6 md:px-7 py-2 cursor-pointer rounded-full text-lg md:text-lg font-medium transition-colors duration-200 ${isActive ? "text-white" : "text-gray-900"
                            }`}
                    >
                        <span className="md:block hidden">{label}</span>
                        <span className="md:hidden">{shortLabel}</span>
                        
                        {isActive && (
                            <motion.div
                                layoutId={`active-pill-${uniqueId}`}
                                className="absolute inset-0 rounded-full -z-10"
                                style={{ backgroundColor: pillColor }}
                                transition={{ ease: "easeInOut", duration: 0.3 }}
                            />
                        )}
                    </button>
                );
            })}
        </div>
    );
}
