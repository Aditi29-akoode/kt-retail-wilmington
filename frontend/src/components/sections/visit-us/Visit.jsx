"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useTransform, useSpring, useScroll } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

// --- ANIMATION VARIANTS ---
const CONTAINER_VARIANTS = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const ITEM_VARIANTS = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: [0.19, 1, 0.22, 1],
            opacity: { duration: 0.8, ease: "linear" }
        },
    },
};

export default function Visit() {
    const sectionRef = useRef(null);

    // Get scroll progress for the parallax clouds
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax values for the clouds
    const cloudOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const cloudLeftX = useSpring(useTransform(scrollYProgress, [0, 0.2, 1], [-400, 0, 0]), { stiffness: 100, damping: 30 });
    const cloudLeftY = useSpring(useTransform(scrollYProgress, [0, 0.2, 1], [-30, 0, 0]), { stiffness: 100, damping: 30 });
    const cloudRightX = useSpring(useTransform(scrollYProgress, [0, 0.2, 1], [400, 0, 0]), { stiffness: 100, damping: 30 });
    const cloudRightY = useSpring(useTransform(scrollYProgress, [0, 0.2, 1], [-30, 0, 0]), { stiffness: 100, damping: 30 });

    return (
        <section
            ref={sectionRef}
            id="visit"
            className="relative w-full overflow-hidden bg-white rounded-b-[20px] min-[1025px]:rounded-b-none"
        >
            <div className="relative w-full flex flex-col">
                {/* Content Section: Relative on mobile with blue bg, Absolute overlay on desktop */}
                <div className="relative min-[1025px]:absolute min-[1025px]:inset-0 z-20 flex flex-col items-center pt-20 md:pt-[4%] min-[1025px]:pt-[2em] -pb-12 min-[1025px]:pb-0 px-4 md:px-6 
                    bg-[linear-gradient(to_bottom,#ffffff_0%,#ffffff_30%,rgba(255,255,255,0)_70%),linear-gradient(to_right,#e6f4ff_0%,#f3f9fe_100%)]
                    min-[1025px]:bg-transparent min-[1025px]:bg-none"
                >
                    {/* Parallax Clouds (Desktop Only) */}
                    <div className="absolute hidden min-[1025px]:block inset-0 pointer-events-none z-0">
                        <motion.div style={{ y: cloudLeftY, x: cloudLeftX, opacity: cloudOpacity }} className="absolute -top-16 left-0">
                            <Image src="/images/landing-page/visit-us/cloud-left.png" alt="cloud" width={400} height={250} className="w-[400px] h-auto" />
                        </motion.div>
                        <motion.div style={{ y: cloudRightY, x: cloudRightX, opacity: cloudOpacity }} className="absolute -top-16 right-0">
                            <Image src="/images/landing-page/visit-us/cloud-right.png" alt="cloud" width={450} height={300} className="w-[450px] h-auto" />
                        </motion.div>
                    </div>

                    {/* Text Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={CONTAINER_VARIANTS}
                        className="relative flex flex-col items-center text-center max-w-5xl mx-auto z-10"
                    >
                        <motion.span
                            variants={ITEM_VARIANTS}
                            className="text-xl text-gray-800 md:text-[2rem] font-extrabold md:mb-6 mb-2 tracking-tight"
                        >
                            Visit Us!
                        </motion.span>

                        <motion.h2
                            variants={ITEM_VARIANTS}
                            className="text-gray-900 text-lg md:text-3xl leading-snug font-bold md:mb-6 mb-2 tracking-tight leading-tight"
                        >
                            {"We're open 7-days a week"}
                        </motion.h2>

                        <motion.p
                            variants={ITEM_VARIANTS}
                            className="text-gray-800 text-2xl md:text-3xl leading-snug font-semibold max-w-3xl mb-10"
                        >
                            Walk-ins are welcome, and we provide a free diagnostic & quote before proceeding with any work.
                        </motion.p>
                        <motion.p
                            variants={ITEM_VARIANTS}
                            className="text-gray-800 text-2xl md:text-2xl leading-snug font-semibold italic max-w-4xl mb-12"
                        >
                            📍Wilmington, Delaware
                        </motion.p>

                        <motion.div variants={ITEM_VARIANTS}>
                            <Link href="/">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    rotate={true}
                                    icon={ArrowUpRight}
                                    className="border-gray-900 text-gray-900 shadow-lg bg-white/80 backdrop-blur-sm"
                                >
                                    Directions
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Image Section - Sits below on mobile, provides background on desktop */}
                <div className="relative w-full z-0 -mt-12 min-[730px]:-mt-[25%] min-[1025px]:mt-0">
                    <Image
                        src="/images/landing-page/visit-us/store-graphic.webp"
                        alt="KhemTech Storefront"
                        width={1920}
                        height={1080}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}