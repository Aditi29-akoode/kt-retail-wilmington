"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const REPAIR_SERVICES = [
  {
    title: "iPhone Repair",
    description: "In Wilmington, DE, our team fixes iPhones fast with high-quality components at competitive local rates.",
    image: "/images/landing-page/khemtech-repair/khemtech-section.png",
    href: "#",
  },
  {
    title: "Samsung Repair",
    description: "We deliver top-quality Samsung repairs at Concord Mall in Wilmington, DE, ensuring your device gets master-level service.",
    image: "/images/landing-page/khemtech-repair/iphone-black.png",
    href: "#",
  },
  {
    title: "Google Pixel Repair",
    description: "We deliver elite Google device repairs at Concord Mall in Wilmington, DE, using precision diagnostics to restore your tech instantly.",
    image: "/images/landing-page/khemtech-repair/google-biege.png",
    href: "#",
  },
  {
    title: "Cell Phone Repair",
    description: "We fix smartphones fast at Concord Mall in Wilmington, DE—servicing iPhone, Samsung, and Google models. Come visit our team.",
    image: "/images/landing-page/khemtech-repair/iphone-purple.png",
    href: "#",
  },
  {
    title: "MacBook Repair",
    description: "For rapid, top-tier MacBook repair at Concord Mall in Wilmington, DE, trust our team. We use high-grade parts and specialized tools to restore your Apple laptop safely.",
    image: "/images/landing-page/khemtech-repair/laptop-screen.png",
    href: "#",
  },
  {
    title: "Laptop Repair",
    description: "Laptops crashing? Visit us for elite laptop repair at Concord Mall in Wilmington, DE. Our team services all models fast with top-tier, reliable parts.",
    image: "/images/landing-page/khemtech-repair/laptop-screen-2.png",
    href: "#",
  },
  {
    title: "Computer Repair",
    description: "Need expert computer repair at Concord Mall in Wilmington, DE? We make diagnostics fast and simple, offering elite technical service and fair pricing for any computer model.",
    image: "/images/landing-page/khemtech-repair/laptop-screen-biege.png",
    href: "#",
  },
  {
    title: "Nintendo Switch Repair",
    description: "Get expert Nintendo Switch repair at Concord Mall in Wilmington, DE. Our technicians quickly resolve console errors, battery faults, and hardware glitches.",
    image: "/images/landing-page/khemtech-repair/remote.png",
    href: "#",
  },
  {
    title: "Playstation (PS5) Repair",
    description: "Console acting up? Visit us for elite PlayStation repair at Concord Mall in Wilmington, DE. Our master technicians resolve hardware issues safely and include a 1-year warranty.",
    image: "/images/landing-page/khemtech-repair/playstation.png",
    href: "#",
  },
  {
    title: "Xbox Repair",
    description: "Xbox glitches? We can diagnose and restore your console with rapid, same-day turnaround times. Visit our team at Concord Mall in Wilmington, DE for expert Xbox service.",
    image: "/images/landing-page/khemtech-repair/xbox-repair.png",
    href: "#",
  },
  {
    title: "Game Console Repair",
    description: "Glitchy Nintendo Switch, PlayStation, or Xbox? For the finest component-level game console repair at Concord Mall in Wilmington, DE, we have you covered.",
    image: "/images/landing-page/khemtech-repair/game-console.png",
    href: "#",
  },
  {
    title: "iPad Repair",
    description: "Need premium technical support and elite iPad repair at Concord Mall in Wilmington, DE? Trust our master technicians to restore your iPad swiftly and affordably.",
    image: "/images/landing-page/khemtech-repair/ipad-screen.png",
    href: "#",
  },
  {
    title: "Tablet Repair",
    description: "Get elite tablet repair at Concord Mall in Wilmington, DE. Our team fixes screens, ports, and batteries fast.",
    image: "/images/landing-page/khemtech-repair/tablet-repair.png",
    href: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function KhemtechRepair() {
  const [mounted, setMounted] = React.useState(false);
  const [isBelow730, setIsBelow730] = React.useState(false);
  const [visibleCount, setVisibleCount] = React.useState(3);

  React.useEffect(() => {
    setMounted(true);
    const checkWidth = () => {
      setIsBelow730(window.innerWidth < 730);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const displayedServices = (mounted && isBelow730)
    ? REPAIR_SERVICES.slice(0, visibleCount)
    : REPAIR_SERVICES;

  return (
    <section className="w-full bg-white py-16 md:py-24 font-sans text-black" id="repair-services">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] md:text-[54px] lg:text-6xl font-medium tracking-tight mb-6"
          >
            How can we help <span className="font-inter italic font-bold text-black">you</span> today?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:max-w-[80%]  max-w-full mx-auto font-medium text-black text-xl md:text-2xl  leading-relaxed"
          >
            No matter the device or issue, KhemTech Repair in Wilmington can fix your tech fast and with quality parts. Here's more information on our extensive repair services.
          </motion.p>
        </div>

        {/* Grid of items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 md:max-w-[90%] mx-auto">
          {displayedServices.map((service, index) => {
            const isLast = index === REPAIR_SERVICES.length - 1;

            return (
              <motion.div
                key={service.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className={`flex flex-col items-center text-center group ${isLast && !isBelow730
                  ? "sm:col-span-2 sm:col-start-1 md:col-span-2 md:col-start-1 lg:col-span-1 lg:col-start-2 xl:col-span-2 xl:col-start-2"
                  : ""
                  }`}
              >
                <Link href={service.href} className="w-full flex flex-col items-center">
                  {/* Image Container */}
                  <div className="w-full h-[140px] flex items-center justify-center mb-6">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="max-h-[140px] max-w-[180px] w-auto h-auto object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 flex items-center gap-1.5 whitespace-nowrap text-black group-hover:text-[#00AEFF] transition-colors duration-300">
                    {service.title}
                    <span className="text-[#00AEFF] transition-transform duration-300 group-hover:translate-x-1.5">
                      &gt;
                    </span>
                  </h3>
                </Link>

                {/* Description */}
                <p className="text-gray-900 font-medium text-base md:text-base leading-relaxed max-w-[80%]">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Show More Button */}
        {mounted && isBelow730 && visibleCount < REPAIR_SERVICES.length && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setVisibleCount((prev) => Math.min(prev + 3, REPAIR_SERVICES.length))}
              className="flex items-center gap-2 px-6 py-3 border-[2px] border-zinc-200 hover:border-[#00AEFF] hover:text-[#00AEFF] transition-all duration-300 bg-white rounded-full font-bold text-lg text-black cursor-pointer active:scale-95 group shadow-md shadow-zinc-100 hover:shadow-[#00AEFF]/5"
            >
              Show More
              <svg
                className="w-5 h-5 text-[#00AEFF] transition-transform duration-300 group-hover:translate-y-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
