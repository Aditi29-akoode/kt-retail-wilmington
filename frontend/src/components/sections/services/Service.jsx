"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const SERVICES = [
    {
        title: "Game Console Repair",
        description: "From HDMI Ports, to motherboard issues - many repairs are done same day.",
        image: "/images/landing-page/services/console-repairs.png",
        id: "console-repair",
    },
    {
        title: "Phone Repair",
        description: "Whether it's a broken screen or severe water damage - nearly all phones can be fixed.",
        image: "/images/landing-page/services/phone-repairs.png",
        id: "phone-repair",
    },
    {
        title: "Laptop Repair",
        description: "Macbooks, Lenovo Yogabooks, Dell, HP - our technicians are familiar with them all.",
        image: "/images/landing-page/services/laptop-repairs.png",
        id: "laptop-repair",
    },
    {
        title: "Electronic Repair",
        description: "Got a rare device? Vintage console, apple watch, car key fob? Bring it on.",
        image: "/images/landing-page/services/specialty-repairs.png",
        id: "specialty-repair",
    },
];

// The offset is safely calculated in the component using useEffect to avoid SSR errors
const GAP = 16;

const CONTAINER_VARIANTS = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const ITEM_VARIANTS = {
    hidden: { opacity: 0, y: 70 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.6,
            ease: [0.19, 1, 0.22, 1],
            opacity: { duration: 1.2, ease: "linear" }
        },
    },
};

export default function ServicesCarousel() {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [offset, setOffset] = useState(0); // State to hold the safe left offset

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            // 0.07 (7%) for mobile, 0.15 (15%) for desktop
            const newOffset = width < 1024 ? width * 0.07 : width * 0.15;
            setOffset(newOffset);
        };

        handleResize(); // Calculate on first client render
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const updateScrollState = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
    };

    const scroll = (direction) => {
        if (!scrollRef.current) return;
        const card = scrollRef.current.querySelector("[data-card]");
        const scrollAmount = (card ? card.offsetWidth : 280) + GAP;
        scrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
        setTimeout(updateScrollState, 350);
    };

    return (
        <section className="w-full py-16 font-sans">
            {/* Header */}
            <div className="text-center md:max-w-3xl max-w-[90%] mx-auto mb-8">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-gray-500 font-medium text-sm tracking-widest uppercase mb-4 block"
                >
                    Services
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
                >
                    Any Device, <span className="text-[#004A7E]">Any Time.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600 text-lg leading-relaxed"
                >
                    KhemTech Repair in Wilmington offers repair services for all electronics:
                    Phones, tablets, computers and game consoles. Click on each below to learn
                    more about the repair service!
                </motion.p>
            </div>


            {/* Nav Arrows */}
            <div className="flex justify-center gap-3 mb-8">
                <button
                    onClick={() => scroll("left")}
                    disabled={!canScrollLeft}
                    className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${canScrollLeft
                        ? "border-gray-300 text-gray-700 hover:border-gray-500 hover:bg-gray-50"
                        : "border-gray-200 text-gray-300 cursor-not-allowed"
                        }`}
                    aria-label="Scroll left"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button
                    onClick={() => scroll("right")}
                    disabled={!canScrollRight}
                    className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${canScrollRight
                        ? "border-gray-300 text-gray-700 hover:border-gray-500 hover:bg-gray-50"
                        : "border-gray-200 text-gray-300 cursor-not-allowed"
                        }`}
                    aria-label="Scroll right"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            {/* Carousel — full bleed */}
            <div className="w-full overflow-hidden">
                <motion.div
                    ref={scrollRef}
                    onScroll={updateScrollState}
                    variants={CONTAINER_VARIANTS}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex overflow-x-auto scroll-smooth pb-4"
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        gap: `${GAP}px`,
                        // The leading spacer creates the initial empty space on the left safely
                        paddingLeft: `${offset}px`,
                        paddingRight: "24px",
                    }}
                >
                    {SERVICES.map((service) => (
                        <motion.div
                            key={service.id}
                            data-card
                            variants={ITEM_VARIANTS}
                            className="flex-shrink-0 cursor-pointer group snap-start"
                            style={{ width: "min(380px, 80vw)" }}
                        >
                            {/* Card Image Box */}
                            <div
                                className="relative w-full bg-gray-100 rounded-2xl overflow-hidden mb-3 border border-gray-200 transition-all duration-500"
                                style={{ aspectRatio: "1 / 1" }}
                            >
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 scale-105 hover:scale-110"
                                />
                            </div>
                            {/* Card Text */}
                            <div className="px-2">
                                <h3 className="font-bold text-gray-900 text-2xl md:text-3xl mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-800 text-lg md:text-xl leading-relaxed max-w-[320px]">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mt-8"
            >
                <Button
                    variant="nav"
                    size="lg"
                    icon={ArrowUpRight}
                    iconPlacement="left"
                    rotate={true}
                >
                    See All Services
                </Button>

                <Button
                    variant="outline"
                    size="lg"
                    icon={ArrowUpRight}
                    iconPlacement="left"
                    rotate={true}
                >
                    START REPAIR
                </Button>
            </motion.div>
        </section>
    );
}