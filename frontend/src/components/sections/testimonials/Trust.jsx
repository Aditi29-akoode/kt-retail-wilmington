"use client";

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Sophie Moore",
        handle: "@sophiemoore",
        text: "It's amazing how simple it is to set up workflows. The terminal looks clean, and everything executes without errors.",
        avatar: "https://i.pravatar.cc/150?u=sophie"
    },
    {
        name: "Matt Cannon",
        handle: "@mattcannon",
        text: "Running tests and deployments with one command is incredible. The interface feels modern, and nothing ever slows me down.",
        avatar: "https://i.pravatar.cc/150?u=matt"
    },
    {
        name: "Lilly Woods",
        handle: "@lillywoods",
        text: "The integration with Git is smooth and reliable. The terminal feels fresh, and pushing code has never been easier.",
        avatar: "https://i.pravatar.cc/150?u=lilly"
    },
    {
        name: "Maya Collins",
        handle: "@mayacollins",
        text: "The feedback on running processes is extremely helpful. The terminal feels alive, and monitoring results is now painless.",
        avatar: "https://i.pravatar.cc/150?u=maya"
    },
    {
        name: "Andy Smith",
        handle: "@andyhouston",
        text: "I love how smart the autocomplete is in daily tasks. The CLI feels intuitive, and every shortcut works perfectly well.",
        avatar: "https://i.pravatar.cc/150?u=andy"
    },
    {
        name: "Sandy Houston",
        handle: "@sandyhouston",
        text: "It's so quick to schedule automated jobs from the terminal. The design feels lightweight, and tasks finish right on time.",
        avatar: "https://i.pravatar.cc/150?u=sandy"
    },
    {
        name: "Patrick Meyer",
        handle: "@patrickmeyer",
        text: "I like how straightforward it is to customize prompts. The CLI feels flexible, and everything adapts to my workflow.",
        avatar: "https://i.pravatar.cc/150?u=patrick"
    },
    {
        name: "James Wilson",
        handle: "@jwilson",
        text: "The support team is top-notch. They helped me solve a complex issue in minutes. Highly recommended!",
        avatar: "https://i.pravatar.cc/150?u=james"
    }
];

export default function Trust() {
    return (
        <section className="md:pb-24 md:pt-24 pb-12 pt-18 bg-white overflow-hidden" id="testimonials">
            <div className="max-w-7xl mx-auto px-4 text-center md:mb-16 mb-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[32px] md:text-[54px] lg:text-6xl font-medium text-black md:mb-8 mb-4 leading-tight tracking-tight"
                >
                    Trusted by <span className="italic font-inter font-bold ">many</span> customers.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className=" md:max-w-[80%] max-w-full mx-auto text-black text-xl md:text-2xl font-medium leading-relaxed"
                >
                    In our 2+ years being in Wilmington, KhemTech Repair has gathered a reputation of quality repairs. Read what people experienced:                </motion.p>
            </div>

            {/* Marquee Rows */}
            <div className="flex flex-col gap-0">
                {/* Row 1 */}
                <div className="relative flex overflow-hidden py-4 md:py-6">
                    <motion.div
                        className="flex w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 100,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        <div className="flex gap-4 md:gap-6 pr-4 md:pr-6">
                            {testimonials.map((t, i) => (
                                <TestimonialCard key={`r1-1-${i}`} {...t} />
                            ))}
                        </div>
                        <div className="flex gap-4 md:gap-6 pr-4 md:pr-6">
                            {testimonials.map((t, i) => (
                                <TestimonialCard key={`r1-2-${i}`} {...t} />
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Row 2 */}
                <div className="relative flex overflow-hidden py-4 md:py-6">
                    <motion.div
                        className="flex w-max"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{
                            duration: 100,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        <div className="flex gap-4 md:gap-6 pr-4 md:pr-6">
                            {testimonials.map((t, i) => (
                                <TestimonialCard key={`r2-1-${i}`} {...t} />
                            ))}
                        </div>
                        <div className="flex gap-4 md:gap-6 pr-4 md:pr-6">
                            {testimonials.map((t, i) => (
                                <TestimonialCard key={`r2-2-${i}`} {...t} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Read More Button */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mt-12 flex justify-center"
            >
                <button className="flex items-center gap-4 pl-4 pr-8 py-2.5 border-[2px] border-[#0071AE] rounded-full hover:shadow-xl transition-all duration-300 bg-white group active:scale-95 shadow-lg shadow-blue-500/5">
                    <div className="w-12 h-12 bg-[#0071AE] rounded-full flex-shrink-0 flex items-center justify-center">
                        <span className="text-white text-3xl font-bold [text-shadow:-2px_2px_0_#0E72A0]">
                            G
                        </span>
                    </div>
                    <span className="text-2xl font-semibold text-black tracking-tight">Read More</span>
                </button>
            </motion.div>
        </section>
    );
}

function TestimonialCard({ name, handle, text, avatar }) {
    return (
        <div className="w-[470px] bg-white border border-[#E8F0FE] rounded-[2rem] p-8 shadow-md flex flex-col gap-4 flex-shrink-0 whitespace-normal text-left relative overflow-hidden transition-all duration-300">
            {/* X Icon (Twitter) */}
            <div className="absolute top-10 right-10 text-gray-400 opacity-60">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"></path>
                </svg>
            </div>

            <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 ring-2 ring-blue-50">
                    <img src={avatar} alt={name} className="w-full h-full object-cover" />
                </div>
                <div>
                    <h4 className="font-bold text-xl text-gray-950 leading-tight">{name}</h4>
                    <p className="text-gray-500 text-base">{handle}</p>
                </div>
            </div>
            <p className="text-gray-800 font-medium text-lg leading-relaxed">
                {text}
            </p>
        </div>
    );
}
