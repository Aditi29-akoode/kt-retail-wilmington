"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// --- ANIMATION VARIANTS ---
const CONTAINER_VARIANTS = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const LIST_ITEM_VARIANTS = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.19, 1, 0.22, 1], // Smooth cinematic ease
        },
    },
};



export function MainFooter() {
    return (
        <div className="bg-[#F6F6F6] text-black md:pt-16 pt-8 pb-8 px-6">
            {/* SUBSCRIPTIVE TEXT SECTION */}


            {/* DIVIDER */}

            {/* GRID */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={CONTAINER_VARIANTS}
                className="max-w-7xl mx-auto flex flex-wrap justify-between gap-y-10 border-b pb-12 border-gray-200"
            >
                {/* ADDRESS */}
                <motion.div
                    variants={LIST_ITEM_VARIANTS}
                    style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
                    className="w-full md:w-[30%]"
                >
                    <h4 className="font-medium text-xl mb-3">Address</h4>
                    <p className="text-md text-gray-600 leading-relaxed">
                        Concord Mall,<br />
                        4737 Concord Pike,<br />
                        Wilmington, DE 19803
                    </p>
                    <div className="mt-6 w-[70%] h-[140px] rounded-xl border border-gray-300 overflow-hidden">
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ border: 0 }}
                            src="https://maps.google.com/maps?q=Concord+Mall,+4737+Concord+Pike,+Wilmington,+DE+19803&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <Image
                        src="/images/khem-tech-logo.png"
                        alt="logo"
                        width={180}
                        height={60}
                        className="mt-8"
                    />
                    <p className="text-[14px] text-[#6E6E72] mt-1">
                        © 2026 KhemTech Enterprise
                    </p>
                </motion.div>

                {/* SERVICES */}
                <div className="w-1/2 md:w-[15%]">
                    <motion.h4 variants={LIST_ITEM_VARIANTS} className="font-medium text-xl mb-3">Services</motion.h4>
                    <motion.ul
                        variants={CONTAINER_VARIANTS}
                        className="text-md text-gray-600 space-y-1"
                    >
                        <motion.li variants={LIST_ITEM_VARIANTS} style={{ transform: "translateZ(0)" }}><Link href="/" className="hover:text-black transition-colors">iPhone Repair</Link></motion.li>
                        <motion.li variants={LIST_ITEM_VARIANTS} style={{ transform: "translateZ(0)" }}><Link href="/" className="hover:text-black transition-colors">iPad Repair</Link></motion.li>
                        <motion.li variants={LIST_ITEM_VARIANTS} style={{ transform: "translateZ(0)" }}><Link href="/" className="hover:text-black transition-colors">Android Repair</Link></motion.li>
                        <motion.li variants={LIST_ITEM_VARIANTS} style={{ transform: "translateZ(0)" }}><Link href="/" className="hover:text-black transition-colors">Computer Repair</Link></motion.li>
                        <motion.li variants={LIST_ITEM_VARIANTS} style={{ transform: "translateZ(0)" }}><Link href="/" className="hover:text-black transition-colors">Game Console Repair</Link></motion.li>
                    </motion.ul>
                </div>

                {/* REPAIR */}
                <div className="w-1/2 md:w-[15%]">
                    <motion.h4 variants={LIST_ITEM_VARIANTS} className="font-medium text-xl mb-3">Repair</motion.h4>
                    <motion.ul
                        variants={CONTAINER_VARIANTS}
                        className="text-md text-gray-600 space-y-1"
                    >
                        <motion.li variants={LIST_ITEM_VARIANTS} style={{ transform: "translateZ(0)" }}><Link href="/" className="hover:text-black transition-colors">Start a Repair</Link></motion.li>
                        <motion.li variants={LIST_ITEM_VARIANTS} style={{ transform: "translateZ(0)" }}><Link href="/" className="hover:text-black transition-colors">Services</Link></motion.li>
                    </motion.ul>
                </div>

                {/* LEGAL */}
                <div className="w-1/2 md:w-[15%]">
                    <motion.h4 variants={LIST_ITEM_VARIANTS} className="font-medium text-xl mb-3">Legal</motion.h4>
                    <motion.ul
                        variants={CONTAINER_VARIANTS}
                        className="text-md text-gray-600 space-y-1"
                    >
                        <motion.li variants={LIST_ITEM_VARIANTS} style={{ transform: "translateZ(0)" }}><Link href="/" className="hover:text-black transition-colors">Privacy Policy</Link></motion.li>
                        <motion.li variants={LIST_ITEM_VARIANTS} style={{ transform: "translateZ(0)" }}><Link href="/" className="hover:text-black transition-colors">Repair Policy</Link></motion.li>
                        <motion.li variants={LIST_ITEM_VARIANTS} style={{ transform: "translateZ(0)" }}><Link href="/" className="hover:text-black transition-colors">Non-fixable Device Policy</Link></motion.li>
                        <motion.li variants={LIST_ITEM_VARIANTS} style={{ transform: "translateZ(0)" }}><Link href="/" className="hover:text-black transition-colors">Shipping policy</Link></motion.li>
                    </motion.ul>
                </div>

                {/* SOCIAL */}
                <div className="w-1/2 md:w-[15%]">
                    <motion.h4 variants={LIST_ITEM_VARIANTS} className="font-medium text-xl mb-3">Follow Us</motion.h4>
                    <motion.ul
                        variants={CONTAINER_VARIANTS}
                        className="text-md text-gray-600 space-y-1"
                    >
                        <motion.li variants={LIST_ITEM_VARIANTS} style={{ transform: "translateZ(0)" }}><Link href="#" className="hover:text-black transition-colors">YouTube</Link></motion.li>
                        <motion.li variants={LIST_ITEM_VARIANTS} style={{ transform: "translateZ(0)" }}><Link href="#" className="hover:text-black transition-colors">Instagram</Link></motion.li>
                        <motion.li variants={LIST_ITEM_VARIANTS} style={{ transform: "translateZ(0)" }}><Link href="#" className="hover:text-black transition-colors">Facebook</Link></motion.li>
                        <motion.li variants={LIST_ITEM_VARIANTS} style={{ transform: "translateZ(0)" }}><Link href="#" className="hover:text-black transition-colors">Snapchat</Link></motion.li>
                        <motion.li variants={LIST_ITEM_VARIANTS} style={{ transform: "translateZ(0)" }}><Link href="#" className="hover:text-black transition-colors">X</Link></motion.li>
                    </motion.ul>
                </div>
            </motion.div>

            <div className="flex mt-8 items-center justify-center">
                <p className="text-md text-gray-600">
                    © 2026 KhemTech. | Made with{" "}
                    <a
                        href="https://www.akoode.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-block group hover:scale-110 transition-transform"
                    >
                        ❤️

                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-0 
                   hidden group-hover:block 
                   bg-[#474972] text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                            AI & Software Company in India | USA
                        </span>
                    </a>
                </p>
            </div>
        </div>
    );
}

export default function Footer() {
    return (
        <>
            <MainFooter />
        </>
    );
}