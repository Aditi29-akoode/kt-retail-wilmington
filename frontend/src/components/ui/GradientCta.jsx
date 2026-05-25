"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const CONTAINER_VARIANTS = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.6,
      ease: [0.19, 1, 0.22, 1],
      staggerChildren: 0.15,
      delayChildren: 0.2,
      opacity: { duration: 1.2, ease: "linear" }
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

export default function GradientCTA({
  title,
  subtitle,
  buttonText = "START REPAIR",
  href = "",
  onClick,
}) {
  return (
    <section className="w-full flex justify-center items-center md:py-20 py-8 md:px-12 px-8 bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={CONTAINER_VARIANTS}
        style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
        className="w-full max-w-5xl rounded-[32px] px-10 md:py-18 py-10 flex flex-col items-center text-center relative"
      >
        {/* BACKGROUND */}
        <div className="absolute inset-0 rounded-[40px] border-2 border-black bg-[linear-gradient(90deg,#A6D8F5_0%,#EAF6FD_25%,#F8F8F8_60%,#F8F8F8_100%)] shadow-[-10px_10px_0px_#94DDFF]" />

        {/* CONTENT */}
        <div className="relative z-20 flex flex-col items-center text-center">
          <motion.h2
            variants={ITEM_VARIANTS}
            style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
            className="text-3xl md:text-5xl font-extrabold text-black"
          >
            {title}
          </motion.h2>

          <motion.p
            variants={ITEM_VARIANTS}
            style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
            className="text-gray-800 md:text-xl text-lg mt-4"
          >
            {subtitle}
          </motion.p>

          <motion.div
            variants={ITEM_VARIANTS}
            style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
            className="mt-8"
          >
            {onClick ? (
              <button
                onClick={onClick}
                className="cursor-pointer group flex items-center lg:gap-3 gap-2 border-3 border-[#0071AE] text-black text-xl pl-3 pr-2 py-2 rounded-full font-semibold inline-flex"
              >
                <span className="w-10 h-10 rounded-full border border-black flex items-center justify-center transition-transform duration-300">
                  <ArrowUpRight className="w-5 h-5 stroke-[3px] transition-transform duration-300 group-hover:rotate-45" />
                </span>
                {buttonText}
              </button>
            ) : (
              <Link
                href={href}
                className="cursor-pointer group flex items-center lg:gap-3 gap-2 border-3 border-[#0071AE] text-black text-xl pl-3 pr-2 py-2 rounded-full font-semibold inline-flex"
              >
                <span className="w-10 h-10 rounded-full border border-black flex items-center justify-center transition-transform duration-300">
                  <ArrowUpRight className="w-5 h-5 stroke-[3px] transition-transform duration-300 group-hover:rotate-45" />
                </span>
                {buttonText}
              </Link>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}