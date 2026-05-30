"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const mediaItems = [
    {
        type: "image",
        src: "/images/landing-page/visit-us/image.png",
        alt: "KhemTech Pennsauken Store Exterior",
    },
    {
        type: "image",
        src: "/images/landing-page/visit-us/image1.png",
        alt: "KhemTech Pennsauken Store Exterior",
    },
    {
        type: "image",
        src: "/images/landing-page/visit-us/image2.png",
        alt: "KhemTech Pennsauken Store Interior Showcase",
    },
    {
        type: "image",
        src: "/images/landing-page/visit-us/image3.png",
        alt: "KhemTech Repair Demo Video",
    },
];

export default function Visit() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section
            id="visit"
            className="relative w-full bg-white py-16 md:py-24 font-sans overflow-hidden"
        >
            <style dangerouslySetInnerHTML={{
                __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
            <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col items-center text-center">
                {/* Title */}
                <h2 className="text-gray-950 text-3xl md:text-[2.5rem] font-extrabold tracking-tight mb-2">
                    Visit Us!
                </h2>

                {/* Subtitle */}
                <h3 className="text-gray-900 text-lg md:text-xl font-bold mb-4 tracking-tight">
                    We're open 7-days a week
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-base md:text-lg font-medium max-w-2xl mb-4 leading-relaxed px-2">
                    Walk-ins are welcome, and we provide a free diagnostic & quote before proceeding with any work.
                </p>

                {/* Location Info */}
                <p className="text-gray-800 text-base md:text-lg font-medium italic mb-6">
                    📍Wilmington, Delaware
                </p>

                {/* Directions Button */}
                <div className="mb-12">
                    <a
                        href={"https://www.google.com/maps/place/KhemTech+-+Phone,+Tablet,+Computer,+Game+Console+Repair+%26+Accessories+(Concord+Mall)/@39.8235228,-75.5440403,19z/data=!3m1!5s0x89c6fb46c78f6021:0x10f0d828ef272e2f!4m14!1m7!3m6!1s0x89c6fbe2cd9bb5cd:0x1410cb2ec7ed9c3e!2sKhemTech+-+Phone,+Tablet,+Computer,+Game+Console+Repair+%26+Accessories+(Concord+Mall)!8m2!3d39.8234054!4d-75.5440242!16s%2Fg%2F11xfvvdh1s!3m5!1s0x89c6fbe2cd9bb5cd:0x1410cb2ec7ed9c3e!8m2!3d39.8234054!4d-75.5440242!16s%2Fg%2F11xfvvdh1s?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2.5 pl-2 pr-5 py-2 border border-gray-200 rounded-3xl bg-white shadow-xs hover:shadow-sm hover:border-gray-300 transition-all font-semibold text-gray-800 text-sm md:text-base"
                    >
                        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-blue-500/30 text-[#00AEFF] bg-blue-50/50">
                            <ArrowUpRight className="w-4 h-4 stroke-[3] transition-transform duration-300 group-hover:rotate-45" />
                        </div>
                        <span className="tracking-wide text-xl">Directions</span>
                    </a>
                </div>

                {/* Carousel Container */}
                <div className="relative w-full max-w-4xl flex flex-col items-center">
                    {/* Main Viewport Row */}
                    <div className="relative w-full flex items-center justify-center px-4 md:px-0">
                        {/* Left Navigation Arrow */}
                        <button
                            onClick={handlePrev}
                            className="absolute -left-2 md:-left-20 z-10 w-11 h-11 md:w-14 md:h-14 rounded-full bg-black text-white hover:bg-neutral-800 transition-colors flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 active:scale-95"
                            aria-label="Previous slide"
                        >
                            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
                        </button>

                        {/* Main Media Viewport */}
                        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[2rem] bg-neutral-100 shadow-md">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="w-full h-full relative"
                                >
                                    {mediaItems[currentIndex].type === "image" ? (
                                        <Image
                                            src={mediaItems[currentIndex].src}
                                            alt={mediaItems[currentIndex].alt}
                                            fill
                                            sizes="(max-w-4xl) 100vw, 896px"
                                            className="object-contain"
                                            priority
                                        />
                                    ) : (
                                        <video
                                            src={mediaItems[currentIndex].src}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="w-full h-full object-contain"
                                        />
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Right Navigation Arrow */}
                        <button
                            onClick={handleNext}
                            className="absolute -right-2 md:-right-20 z-10 w-11 h-11 md:w-14 md:h-14 rounded-full bg-black text-white hover:bg-neutral-800 transition-colors flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 active:scale-95"
                            aria-label="Next slide"
                        >
                            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                    </div>

                    {/* Thumbnails Navigation Row */}
                    <div
                        className="flex items-center gap-3 mt-6 overflow-x-auto px-4 py-2 max-w-full no-scrollbar"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {mediaItems.map((item, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`relative w-20 h-14 md:w-24 md:h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${currentIndex === idx
                                    ? "border-neutral-900 scale-105 shadow-md"
                                    : "border-transparent opacity-50 hover:opacity-100"
                                    }`}
                            >
                                {item.type === "image" ? (
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        sizes="(max-w-xs) 25vw, 96px"
                                        className="object-cover"
                                    />
                                ) : (
                                    <video
                                        src={item.src}
                                        muted
                                        playsInline
                                        preload="metadata"
                                        className="w-full h-full object-cover pointer-events-none"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

