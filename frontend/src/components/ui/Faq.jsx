"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Phone } from "lucide-react";
import { faqs } from "@/constants/faq";
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="bg-white px-4 md:px-12 py-12 md:py-20 flex flex-col items-center relative overflow-hidden">
            {/* 🔵 LEFT BACKGROUND GLOW */}
            <div className="absolute hidden min[1024px]:block top-1/5 left-0 pointer-events-none z-0">
                <Image
                    src="/images/spot-left.png"
                    alt="glow"
                    width={200}
                    height={200}
                    className="object-contain"
                    unoptimized
                />
            </div>
            {/* HEADING */}
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center justify-center text-[32px] md:text-[54px] lg:text-6xl font-extrabold text-black whitespace-nowrap"
            >
                <span className="font-inter">
                    Questions? <span className="text-[#004A7E]">Answers.</span>
                </span>
            </motion.h2>

            {/* SUBTEXT */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-black text-xl md:text-2xl font-medium mt-4 text-center"
            >
                Call us anytime - we'd loveto help!
            </motion.p>

            {/* PHONE BUTTON */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6"
            >
                <a href="tel:8623437979" className="flex items-center gap-3 border border-black pr-8 pl-2 py-1 rounded-full hover:bg-gray-50 transition-colors">
                    <span className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
                        <Phone className="w-4 h-4" />
                    </span>
                    <span className="text-black text-md md:text-base font-medium">
                        (862) 343-7979
                    </span>
                </a>
            </motion.div>

            {/* FAQ LIST */}
            <div className="mt-12 md:mt-20 mb-0 w-full px-2 md:px-0 max-w-5xl">
                {faqs.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="border-b-2 border-gray-100"
                    >
                        {/* QUESTION */}
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex items-center justify-between py-7 text-left"
                        >
                            <span className="text-black font-semibold text-xl md:text-2xl pr-8">
                                {item.q}
                            </span>
                            <ChevronDown
                                className={`w-6 h-6 flex-shrink-0 text-gray-400 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                            />
                        </button>

                        {/* ANSWER */}
                        <AnimatePresence initial={false}>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    className="overflow-hidden"
                                >
                                    <div className="pb-8 text-gray-500 font-medium text-lg md:text-xl leading-relaxed">
                                        {item.a}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>


        </div>
    );
}